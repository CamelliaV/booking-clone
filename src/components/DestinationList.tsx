import React from 'react'
import { dataShowcase } from '../constants'
import tw, { styled } from 'twin.macro'
import SmallCard from './SmallCard'
import { destinationData } from '../constants/data'
import { Data } from '../types'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Container = tw.div`
  grid
  grid-cols-5
  mt-3
`

export default function DestinationList({
  destinationType
}: {
  destinationType: string
}) {
  let data: Data = []
  const [parent] = useAutoAnimate()
  const title = destinationData[destinationType + 'Title']
  const subtitle = destinationData[destinationType + 'SubTitle']
  for (let i = 0; i < title.length; i++) {
    data.push({
      title: title[i],
      subtitle: subtitle[i]
    })
  }
  return (
    <Container ref={parent}>
      {data.map((item, index) => (
        <SmallCard
          type="destinationList"
          info={item!}
          key={`destination-${index}`}
        />
      ))}
    </Container>
  )
}
