import React from 'react'
import tw, { styled } from 'twin.macro'
import SmallCard from './SmallCard'
import { dataShowcase } from '../constants'
import { Carousel } from '@mantine/carousel'
import { sliceConfig } from '../constants/config'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import TripCard from './TripCard'
import { rem } from '@mantine/core'

// z-[1]
// const Container = styled.div`
//   ${tw`
//   flex
//   justify-between
//   w-full
//   max-w-6xl
//   gap-4
//   `}
// `

const Container = styled(Carousel)`
  ${tw`
  flex
  w-full
  max-w-6xl
  gap-4
  items-center
  `}
`
const TypedCarouselSlide = tw(Carousel.Slide)`
  
`

export default function SliceSection({ type }: { type: string }) {
  const data = dataShowcase[type + 'Data']

  return (
    <Container
      dragFree
      withIndicators
      slideGap="xl"
      containScroll="trimSnaps"
      slidesToScroll={sliceConfig[type].slidesToScroll}
      slideSize={sliceConfig[type].slideSize}
      align="center"
      controlsOffset="sm"
      plugins={[WheelGesturesPlugin()]}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default'
          },
          border: '5px solid black',
          color: 'yellow',
          width: rem(12)
        },
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',
          '&[data-active]': {
            width: rem(40)
          }
        }
      }}
    >
      {type === 'trip' && (
        <TypedCarouselSlide style={{ flex: '0 0 50%' }}>
          <TripCard
            info={dataShowcase['tripHead'][0]}
            type={type}
            key={`slice-${type}-${-1}`}
          />
        </TypedCarouselSlide>
      )}
      {data.map((item, index) => (
        <TypedCarouselSlide>
          <SmallCard info={item} type={type} key={`slice-${type}-${index}`} />
        </TypedCarouselSlide>
      ))}
    </Container>
  )
}
