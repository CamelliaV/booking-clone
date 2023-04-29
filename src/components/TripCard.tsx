import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Container = tw.div`
  cursor-pointer
  text-white
  overflow-hidden
  px-0
  relative
  w-full
`
const Text = styled.div`
  ${tw` 
  absolute
  bottom-0
  w-full
  h-[50%]
  flex
  flex-col
  justify-end
  py-4

  px-3
  `};
  background: linear-gradient(-180deg, rgba(0, 0, 0, 0) 12%, #000 97%);
`
const Img = styled(motion.img)`
  ${tw`
  w-full
  rounded-sm
  object-cover
  `};
`
const Title = styled.div`
  ${tw`
  font-bold
  text-xl
  `}
`
const Sub = styled.div`
  ${tw`
  font-medium
  text-sm
  `};
`

export default function SmallCard({
  info,
  type
}: {
  info: {
    url?: string
    title?: string
    subtitle?: string
    reviews?: number
    comment?: string
    score?: number
    price?: number
  }
  type: string
}) {
  return (
    <Container>
      <Img whileHover={{ scale: 1.05, transition: {duration: 0.4} }} src={info.url} alt={info.title} />
      <Text>
        <Title>{info.title}</Title>
        <Sub>{info.subtitle}</Sub>
      </Text>
    </Container>
  )
}
