import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import tw, { styled } from 'twin.macro'
import Explore from '../components/Explore'
import Property from '../components/Property'
import OfferCards from '../components/OfferCards'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import { propertyData } from '../constants'
import ButtonLine from '../components/ButtonLine'
import SliceSection from '../components/SliceSection'

const FeaturedContainer = styled.div`
  ${tw`
  flex
  flex-col
  mt-14
  items-center
  gap-12
  `}
`
const SectionWrapper = tw.div`
  w-full
  flex
  flex-col
  gap-2
  max-w-6xl
`

const ImgCards = tw.div`
  flex
  gap-5
  max-w-6xl
  items-center
  max-h-[300px]
  w-full
  justify-center  
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
const SectionContainer = tw.div`
  flex
  w-full
  flex-col
  items-center
  justify-between
  gap-4
`

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <FeaturedContainer>
        <SectionContainer>
          <SectionWrapper>
            <Title>Offers</Title>
            <Sub>Promotions, deals, and special offers for you</Sub>
          </SectionWrapper>
          <OfferCards />
        </SectionContainer>
        <SectionContainer>
          <ImgCards>
            <ImageCard
              type="2"
              text="Paris"
              imgUrl="https://ac-a.static.booking.cn/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
            />
            <ImageCard
              type="2"
              text="Bangkok"
              imgUrl="https://ac-a.static.booking.cn/xdata/images/city/600x600/620029.jpg?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o="
            />
          </ImgCards>
        </SectionContainer>
        <SectionContainer>
          <ImgCards>
            <ImageCard
              type="3"
              text="Hong Kong"
              imgUrl="https://ac-a.static.booking.cn/xdata/images/city/600x600/674778.jpg?k=9e5b447ea63e2d98bbd92abb87668b4feb0cf1b4644030fabe472caddf20de1c&o="
            />
            <ImageCard
              type="3"
              text="Tokyo"
              imgUrl="https://ac-a.static.booking.cn/xdata/images/city/600x600/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o="
            />
            <ImageCard
              type="3"
              text="Rome"
              imgUrl="https://ac-a.static.booking.cn/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
            />
          </ImgCards>
        </SectionContainer>
        <SectionContainer>
          <SectionWrapper>
            <Title>Explore Japan</Title>
            <Sub>These popular destinations have a lot to offer</Sub>
          </SectionWrapper>
          {/* <Explore /> */}
          <SliceSection type="explore" />
        </SectionContainer>
        <SectionContainer>
          <SectionWrapper>
            <Title>Browse by property type</Title>
          </SectionWrapper>
          {/* <Property data={propertyData} type="property" /> */}
          <SliceSection type="property" />
        </SectionContainer>
        <SectionContainer>
          <SectionWrapper>
            <Title>Popular destinations by month</Title>
            <Sub>Travellers from China are loving these places</Sub>
            <ButtonLine type="short" />
          </SectionWrapper>
        </SectionContainer>
        <SectionContainer>
          <SectionWrapper>
            <Title>Offers</Title>
            <Sub>Promotions, deals, and special offers for you</Sub>
          </SectionWrapper>
        </SectionContainer>
        <SectionContainer>
          <SectionWrapper>
            <Title>Quick and easy trip planner</Title>
            <Sub>
              Pick a vibe and explore the top destinations in the United States
            </Sub>
            <ButtonLine type="long" />
          </SectionWrapper>
        </SectionContainer>
        <EmailSection />
        <Footer />
      </FeaturedContainer>
    </>
  )
}
