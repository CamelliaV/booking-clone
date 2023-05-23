import tw, { styled } from 'twin.macro'
import OfferCards from '../components/OfferCards'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import ButtonLine from '../components/ButtonLine'
import SliceSection from '../components/SliceSection'
import { motion } from 'framer-motion'
import SectionHOC from '../hoc/SectionHOC'
import DestinationList from '../components/DestinationList'
import PlannerList from '../components/PlannerList'
import { useState } from 'react'
import { fadeIn, slideIn, textVariant } from '../constants/motion'
const FeaturedContainer = styled(motion.div)`
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

const HomeBody = () => {
  const [destinationType, setDestinationType] = useState('Regions')
  const [plannerType, setPlannerType] = useState('Romance')
  return (
    <FeaturedContainer>
      <SectionContainer>
        <SectionWrapper>
          <Title>Offers</Title>
          <Sub>Promotions, deals, and special offers for you</Sub>
        </SectionWrapper>
        <OfferCards/>
      </SectionContainer>
      <SectionContainer>
        <ImgCards>
          <ImageCard
            type="2"
            text="Orlando"
            imgUrl="https://cf.bstatic.com/xdata/images/city/600x600/976919.jpg?k=b4d2dd3f87340b547a0e1aa9fc7e89b47ebe9539086c7f5f4e637e5e2137be7c&o="
          />
          <ImageCard
            type="2"
            text="New York"
            imgUrl="https://cf.bstatic.com/xdata/images/city/600x600/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o="
          />
        </ImgCards>
        <ImgCards>
          <ImageCard
            type="3"
            text="Las Vegas"
            imgUrl="https://cf.bstatic.com/xdata/images/city/600x600/349720.jpg?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o="
          />
          <ImageCard
            type="3"
            text="Los Angeles"
            imgUrl="https://cf.bstatic.com/xdata/images/city/600x600/976870.jpg?k=4bb231f86e973cac2971077b1664c1374fc0d718c95634b4cb01ae4550262f23&o="
          />
          <ImageCard
            type="3"
            text="Atlanta"
            imgUrl="https://cf.bstatic.com/xdata/images/city/600x600/976884.jpg?k=00a3546794e9e8cbb86b98371056949ee731002b76358467601e85a0b09dd6db&o="
          />
        </ImgCards>
      </SectionContainer>
      <SectionContainer>
        <SectionWrapper>
          <Title>Explore United States</Title>
          <Sub>These popular destinations have a lot to offer</Sub>
        </SectionWrapper>
        {/* <Explore /> */}
        <SliceSection type="explore" isCarousel length={10} startIndex={24} />
      </SectionContainer>
      <SectionContainer>
        <SectionWrapper>
          <Title>Browse by property type</Title>
        </SectionWrapper>
        {/* <Property data={propertyData} type="property" /> */}
        <SliceSection type="property" isCarousel length={24} startIndex={0} />
      </SectionContainer>
      {/* <SectionContainer>
  <SectionWrapper>
    <Title>Popular destinations by month</Title>
    <Sub>Travellers from China are loving these places</Sub>
    <ButtonLine type="short" />
  </SectionWrapper>
  <SliceSection type="destination" />
</SectionContainer> */}
      <SectionContainer>
        <SectionWrapper>
          <Title>Quick and easy trip planner</Title>
          <Sub>
            Pick a vibe and explore the top destinations in the United States
          </Sub>
          <ButtonLine type="long" setHook={setPlannerType} />
        </SectionWrapper>
        <PlannerList plannerType={plannerType} />
      </SectionContainer>
      <SectionContainer>
        <SectionWrapper>
          <Title>Connect with other travellers</Title>
        </SectionWrapper>
        <SliceSection type="connect" />
      </SectionContainer>
      <SectionContainer>
        <SectionWrapper>
          <Title>Stay at our top unique properties</Title>
          <Sub>
            From castles and villas to boats and igloos, we've got it all
          </Sub>
        </SectionWrapper>
        <SliceSection type="unique" isCarousel startIndex={49} length={15} />
      </SectionContainer>
      <SectionContainer>
        <SectionWrapper>
          <Title>Homes guests love</Title>
        </SectionWrapper>
        <SliceSection type="love" isCarousel startIndex={64} length={10} />
      </SectionContainer>
      <SectionContainer>
        <SectionWrapper>
          <Title>Get inspiration for your next trip</Title>
        </SectionWrapper>
        <SliceSection type="trip" />
      </SectionContainer>
      <SectionContainer>
        <SectionWrapper>
          <Title>Destinations we love</Title>
          <ButtonLine setHook={setDestinationType} type="mid" />
          <DestinationList destinationType={destinationType} />
        </SectionWrapper>
      </SectionContainer>
      <EmailSection />
    </FeaturedContainer>
  )
}
export default SectionHOC(HomeBody)
