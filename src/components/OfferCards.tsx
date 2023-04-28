import React from 'react'
import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
const OfferCardContainer = tw.div`
  flex
  w-full
  max-w-6xl
  justify-between
  gap-4
`
const TextWrapper = styled.div`
  ${tw`
  flex
  gap-2
  flex-col
  flex-auto
  `}
`
// const Img = tw.img``
const Title = tw.div`
  font-bold
  text-base
`
const Sub = tw.div`
  font-normal
  text-base
`
// const Button = tw(Link)``
// w-36
const Button = tw.button`
  py-1
  px-3
  max-w-fit
  h-8
  font-medium
  cursor-pointer
  text-sm
  bg-[#0071c2]
  flex
  items-center
  justify-center
  rounded-sm
  border-none
  text-white
  mt-2
`
const OfferCard = styled.div`
  ${tw`
  justify-between
  flex-[1]
  w-full
  flex
  rounded-sm
  max-h-fit
  gap-4
  px-4
  pb-4
  pt-8
  shadow-[rgba(0, 0, 0, 0.16)]
  shadow-md
  
  `}
  border: 1px solid rgba(0, 0, 0, 0.16)
`
const Img = tw.img`
  w-[140px]
  flex
  items-center
  border-none
  justify-center
`

export default function OfferCards() {
  return (
    <OfferCardContainer>
      <OfferCard>
        <TextWrapper>
          <Title>Fly away to your dream vacation</Title>
          <Sub>Get inspired – compare and book flights with flexibility</Sub>
          <Button>Search for flights</Button>
        </TextWrapper>
        <Img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.jpeg?k=7652b7b65903f21464b812d3eca387f9a7e0241b1df0b4ebe981ba95df4b254c&o="
          alt="plane"
        />
      </OfferCard>
      <OfferCard
        style={{
          backgroundImage:
            'url(https://q-xx.bstatic.com/xdata/images/xphoto/714x300/184699273.jpeg?k=503e088a7d417c30217b5109dda404d2c2050001588cf7a45fca63e3363573de&o=)',
          backgroundSize: 'cover',
          color: 'white'
        }}
      >
        <TextWrapper>
          <Title>Escape for a while</Title>
          <Sub>Enjoy the freedom of a monthly stay on Booking.com</Sub>
          <Button>Discover monthly stays</Button>
        </TextWrapper>
        <Img src="" alt="" />
      </OfferCard>
    </OfferCardContainer>
  )
}
