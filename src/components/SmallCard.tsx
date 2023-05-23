import React from 'react'
import tw, { styled } from 'twin.macro'
const Container = styled.div`
  ${tw`
  cursor-pointer
  overflow-hidden
  px-0
  w-full
  flex-[1]
  `}
`
const Text = styled.div`
  ${tw`
  mt-4
  `};
`
const Img = styled.img`
  ${tw`
  w-full
  rounded-sm
  object-cover
  `}
  max-height: ${({ theme }: { theme: string }) =>
    theme === 'trip' ? '240px' : '210px'};
  height: ${({ theme }: { theme: string }) =>
    theme === 'trip' ? '240px' : ''};
  width: ${({ theme }: { theme: string }) => (theme === 'trip' ? '263px' : '')};
`
const Title = styled.div`
  ${tw`
  font-bold
  text-base
  `};
  font-weight: ${({ theme }) => (theme === 'destinationList' ? '500' : '')};
  font-size: ${({ theme }) => (theme === 'destinationList' ? '14px' : '')};
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
type DataObj = {
  url?: string
  title?: string
  subtitle?: string
  subtitle2?: string
  reviews?: string
  comment?: string
  score?: string
  price?: string
}
export default function SmallCard({
  info,
  type
}: {
  info: DataObj
  type?: string
}) {
  return (
    <Container>
      {type !== 'destinationList' && (
        <Img theme={type} src={info.url} alt={info.title} />
      )}
      <Text>
        <Title theme={type}>{info.title}</Title>
        <Sub>{info.subtitle}</Sub>
        {info.subtitle2 && <Sub>{info.subtitle2}</Sub>}
        {info.price && (
          <Sub>
            Starting from <Price>{info.price.toLocaleString()}</Price>
          </Sub>
        )}
      </Text>
      {type !== 'destinationList' && (
        <Remark>
          {info.score && <ScoreIcon>{info.score}</ScoreIcon>}
          <Comment>{info.comment}</Comment>
          {info.reviews && <Review>{info.reviews.toLocaleString()}</Review>}
        </Remark>
      )}
    </Container>
  )
}
