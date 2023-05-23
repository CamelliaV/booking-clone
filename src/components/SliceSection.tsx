import React from 'react'
import tw, { styled } from 'twin.macro'
import SmallCard from './SmallCard'
import { dataShowcase } from '../constants'
import { Carousel } from '@mantine/carousel'
import { sliceConfig } from '../constants/config'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import TripCard from './TripCard'
import { rem } from '@mantine/core'
import {
  carouselSubTitle,
  carouselTitle,
  carouselUrl,
  carouselLabel,
  carouselRate,
  carouselReview,
  carouselPrice
} from '../constants/data'
import { Data } from '../types'

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

export default function SliceSection({
  type,
  isCarousel = false,
  startIndex = 0,
  length = 0
}: {
  type: string
  isCarousel?: boolean
  startIndex?: number
  length?: number
}) {
  let data: Data = dataShowcase[type + 'Data'] as Data
  if (isCarousel) {
    data = []
    for (let i = 0; i < length; i++) {
      data.push({
        url: carouselUrl[startIndex + i],
        title: carouselTitle[startIndex + i],
        subtitle: carouselSubTitle[startIndex + i]
      })
    }
    let start = 0
    if (type === 'love') start = 15
    if (type === 'unique' || type === 'love') {
      for (let i = 0; i < length; i++) {
        data[i]!.reviews = carouselReview[start + i]
        data[i]!.comment = carouselLabel[start + i]
        data[i]!.score = carouselRate[start + i]
      }
    }
    if (type === 'love') {
      for (let i = 0; i < length; i++) {
        data[i]!.price = carouselPrice[i]
      }
    }
  }
  return (
    <Container
      dragFree
      withIndicators
      slideGap="xl"
      containScroll="trimSnaps"
      slidesToScroll={sliceConfig[type].slidesToScroll}
      slideSize={sliceConfig[type].slideSize}
      align="center"
      plugins={[WheelGesturesPlugin()]}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default'
          },
          border: '2px solid',
          color: 'purple',
          width: rem(20),
          height: rem(20)
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
          <SmallCard info={item!} type={type} key={`slice-${type}-${index}`} />
        </TypedCarouselSlide>
      ))}
    </Container>
  )
}
