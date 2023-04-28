import React from 'react'
import tw, { styled } from 'twin.macro'

const Container = styled.div`
  ${tw`
  relative
  w-full
  `};
`

const Img = styled.img`
  ${tw`
  w-full
  max-h-[300px]
  object-cover
  `};
  height: ${({ type }: { type: '2' | '3' }) => (type == '2' ? '50%' : '70%')};
`

const Subtitle = styled.span`
  ${tw`
  absolute
  text-white
  font-bold
  text-[24px]
  top-6
  left-4
  `};
  text-shadow: rgb(0, 0, 0) 1px 1px;
`

export default function ImageCard({
  type,
  imgUrl,
  text
}: {
  type: '3' | '2'
  imgUrl: string
  text: string
}) {
  return (
    <Container>
      <Img type={type} src={imgUrl}/>
      <Subtitle>{text}</Subtitle>
    </Container>
  )
}
