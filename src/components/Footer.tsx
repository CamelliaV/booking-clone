import React from 'react'
import tw, { styled } from 'twin.macro'
const Container = styled.div`
  ${tw`
  `};
`
const Img = styled.img`
  ${tw`
  bg-contain
  `}
`

export default function Footer() {
  return (
    <Container>
      <Img src="/footer.png" />
    </Container>
  )
}
