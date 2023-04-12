import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
const OfferCardContainer = tw.div`
  flex
  w-full
  max-w-5xl
  justify-between
`
const OfferCard = tw.div`
  flex
  flex-col
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
const Button = tw.button`
  py-1
  px-3
  cursor-pointer
  text-sm
  bg-[#0071c2]
  flex
  items-center
  justify-center
  border-2
  text-white
`

export default function OfferCards() {
  return (
    <OfferCardContainer>
      <OfferCard>
        <Title>Fly away to your dream vacation</Title>
        <Sub>Get inspired – compare and book flights with flexibility</Sub>
        <Button>Search for flights</Button>
      </OfferCard>
      <OfferCard>
        <Title>Escape for a while</Title>
        <Sub>Enjoy the freedom of a monthly stay on Booking.com</Sub>
        <Button>Discover monthly stays</Button>
      </OfferCard>
    </OfferCardContainer>
  )
}
