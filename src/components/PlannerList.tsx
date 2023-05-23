import React from 'react'
import tw, { styled } from 'twin.macro'
import SmallCard from './SmallCard'
import { dataShowcase } from '../constants'
import { Carousel } from '@mantine/carousel'
import { sliceConfig } from '../constants/config'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import TripCard from './TripCard'
import { rem } from '@mantine/core'
import { plannerData } from '../constants/data'
import { useAutoAnimate } from '@formkit/auto-animate/react'

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
type Data = [
  {
    url?: string
    title?: string
    subtitle?: string
    subtitle2?: string
    reviews?: string
    comment?: string
    score?: string
    price?: string
  }?
]
export default function PlannerList({ plannerType }: { plannerType: string }) {
  let data: Data = []
  const title = plannerData[plannerType + 'Title']
  const [parent] = useAutoAnimate()

  const subtitle = plannerData[plannerType + 'SubTitle']
  const url = plannerData[plannerType + 'Url']
  for (let i = 0; i < title.length; i++) {
    data.push({
      url: url[i],
      title: title[i],
      subtitle: subtitle[i]
    })
  }
parent
  return (
    <Container ref={parent}
      dragFree
      withIndicators
      slideGap="xl"
      containScroll="trimSnaps"
      slidesToScroll={sliceConfig['planner'].slidesToScroll}
      slideSize={sliceConfig['planner'].slideSize}
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
      {data.map((item, index) => (
        <TypedCarouselSlide>
          <SmallCard
            info={item!}
            type="planner"
            key={`slice-planner-${index}`}
          />
        </TypedCarouselSlide>
      ))}
    </Container>
  )
}
