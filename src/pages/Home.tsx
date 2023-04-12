import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import tw, { styled } from 'twin.macro'
import Explore from '../components/Explore'
import Property from '../components/Property'
import OfferCards from '../components/OfferCards'

const FeaturedContainer = styled.div`
  ${tw`
  flex
  flex-col
  mt-14
  items-center
  gap-8
  `}
`
const SectionWrapper = tw.div`
  w-full
  max-w-5xl
`

const Title = tw.div`
  font-bold
  text-2xl
`
const Sub = tw.div`
  font-normal
  text-base
  text-[#6B6B6B]
`


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <FeaturedContainer>
        <SectionWrapper>
          <Title>Offers</Title>
          <Sub>Promotions, deals, and special of</Sub>
        </SectionWrapper>  
        <OfferCards />
        <SectionWrapper>
          <Title>Explore Japan</Title>
          <Sub>These popular destinations have a lot to offer</Sub>
        </SectionWrapper>
        <Explore />
        <SectionWrapper>
          <Title>Browse by property type</Title>
        </SectionWrapper>
        <Property />
      </FeaturedContainer>
    </>
  )
}
