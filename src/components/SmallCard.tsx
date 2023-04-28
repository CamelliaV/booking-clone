import React from 'react'
import tw, { styled } from 'twin.macro'
const Container = tw.div`
  cursor-pointer
  overflow-hidden
  px-0
  flex-[1]
`
const Text = styled.div``
const Img = styled.img`
  ${tw`
  w-full
  object-cover
  `}
`
const Title = styled.div`
  ${tw`
  font-bold
  text-base
  `}
`
const Sub = tw.div`
  font-normal
  text-sm
  text-[#6b6b6b]
`
export default function SmallCard({
  info,
  type
}: {
  info: { url?: string; title?: string; subtitle?: string }
  type: string
}) {
  return (
    <Container>
      <Img src={info.url} alt={info.title} />
      <Text>
        <Title>{info.title}</Title>
        <Sub>{info.subtitle}</Sub>
      </Text>
    </Container>
  )
}
