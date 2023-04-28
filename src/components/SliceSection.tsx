import React from 'react'
import tw, { styled } from 'twin.macro'
import SmallCard from './SmallCard'
import { dataShowcase } from '../constants'
import { Carousel } from '@mantine/carousel'
import { sliceHeight } from '../constants/config'
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
  justify-center
  w-full
  max-w-6xl
  gap-4
  px-10
  items-center
  `}
`

export default function SliceSection({ type }: { type: string }) {
  const data = dataShowcase[type + 'Data']

  return (
    <Container
      slideGap="xl"
      containScroll="trimSnaps"
      slidesToScroll={3}
      slideSize={sliceHeight[type]}
      withIndicators
      align="center"
      controlsOffset="sm"
      plugins={[WheelGesturesPlugin()]}
    >
      {data.map((item, index) => (
        <Carousel.Slide>
          <SmallCard info={item} type={type} key={`slice-${type}-${index}`} />
        </Carousel.Slide>
      ))}
    </Container>
  )
}
