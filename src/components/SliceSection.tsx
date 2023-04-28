import React from 'react'
import tw, { styled } from 'twin.macro'
import SmallCard from './SmallCard'
import { dataShowcase } from '../constants'
import { Carousel } from '@mantine/carousel'
import { sliceConfig } from '../constants/config'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

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
  justify-between
  w-full
  max-w-6xl
  gap-4
  items-center
  `}
`
const TypedCarouselSlide = styled(Carousel.Slide)`
  mx-0
`

export default function SliceSection({ type }: { type: string }) {
  const data = dataShowcase[type + 'Data']

  return (
    <Container
      dragFree
      withIndicators
      slideGap="sm"
      containScroll="trimSnaps"
      slidesToScroll={sliceConfig[type].slidesToScroll}
      slideSize={sliceConfig[type].slideSize}
      align="center"
      controlsOffset="sm"
      plugins={[WheelGesturesPlugin()]}>
      {data.map((item, index) => (
        <TypedCarouselSlide>
          <SmallCard info={item} type={type} key={`slice-${type}-${index}`} />
        </TypedCarouselSlide>
      ))}
    </Container>
  )
}
