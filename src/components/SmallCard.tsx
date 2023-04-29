import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
const Container = styled.div`
  ${tw`
  cursor-pointer
  overflow-hidden
  px-0
  flex-[1]
  `}
`
const Text = styled.div``
const Img = styled.img`
  ${tw`
  w-full
  rounded-sm
  object-cover
  `}
  max-height: ${({ theme }: { theme: { type: string } }) =>
    theme.type === 'trip' ? '240px' : '210px'}
`
const Title = styled.div`
  ${tw`
  font-bold
  text-base
  `}
`
const Sub = styled.div`
  ${tw`
  font-normal
  text-sm
  text-[#6b6b6b]
  `};
`
const Remark = tw.div`
  text-[12px]
  font-normal
  flex
  items-center
  mt-2
`
const ScoreIcon = styled.div`
  ${tw`
  bg-[#003580]
  text-white
  w-6
  flex
  items-center
  justify-center
  h-6
  mr-2
  
  `}

  border-radius: 4px 4px 4px 0
`
const Comment = tw.div`
  text-[#262626]
`
const Review = tw.div`
  text-[#6B6B6B]
`
const Price = tw.span`
  font-bold
  text-base
  text-black
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
      <Img theme={type} src={info.url} alt={info.title} />
      <Text>
        <Title>{info.title}</Title>
        <Sub>{info.subtitle}</Sub>
        {info.price && (
          <Sub>
            Starting from <Price>CNY {info.price.toLocaleString()}</Price>
          </Sub>
        )}
      </Text>
      <Remark>
        {info.score && <ScoreIcon>{info.score}</ScoreIcon>}
        <Comment>{info.comment}</Comment>
        {info.reviews && (
          <Review>&nbsp;·&nbsp;{info.reviews.toLocaleString()} reviews</Review>
        )}
      </Remark>
    </Container>
  )
}
