import React, { useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined'
import { Info } from '../types'
import axios from 'axios'
import { bedType, roomType } from '../constants/data'
const Title = tw.div`
font-bold
flex 
gap-2
text-xl
text-[#0071c2]
`
const SubText = tw.span`
text-[#0071c2]
text-xs
underline
font-semibold
`
const SubText2 = tw.span`
text-xs
text-[#262626]
font-normal
`
const Content = styled.div`
  border: 1px solid rgb(198, 198, 198);
  ${tw`
  flex
  w-full
  gap-6
  p-4
  `}
`
const SubTitle = tw.div`
  flex
  gap-4
`
const Rating = tw.div`
  text-[#febb02]
`
const Img = tw.img`
  w-[200px]
  h-[200px]
`
const Detail = tw.div`
  flex-[1]
`
const Rest = tw.div`
  
`
const Recom = styled.div`
  ${tw`
  flex
  flex-col
  gap-2
  mt-5
  ml-4
  `}
`
const RTitle = styled.div`
  ${tw`
    relative
    font-bold
    text-xs
    text-[#262626]
  `}
  &:before {
    background: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #1a1a1a;
    content: '';
    position: relative;
    border-left: 3px solid #e7e7e7;
    height: 700%;
    left: -10px;
    position: absolute;
    top: 2px;
    width: 3px;
    z-index: 0;
  }
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
  p-4
  `}

  border-radius: 4px 4px 4px 0
`
const RSubTitle = tw.div`
font-normal
text-xs
text-[#262626]
`
const RAppend = tw.div`
  font-bold
  text-xs
  text-[#008009]
`
const Bar = tw.div`
  w-[30%]
`
const Container = tw.div`
  flex
  max-w-6xl
  justify-center
  w-full
  mx-auto
`
const HotelCard = ({ info }: { info: Info }) => {
  const ratingData = []
  const getReview = (score: number) => {
    if (score >= 9.6) return '优异的'
    if (score >= 9.0) return '好极了'
    if (score >= 8.6) return '很棒'
    if (score >= 8.0) return '非常好'
    if (score >= 7.0) return '好'
    else return ''
  }
  for (let i = 0; i < info.rating; i++) ratingData.push(null)
  return (
    <Container>
      <Bar>asg</Bar>
      <Content>
        <Img src={`http://localhost:8080/api/image/${info.id - 1}.jpg`}></Img>
        <Detail>
          <Title>
            {info.hotelName}{' '}
            <Rating>
              {ratingData.map(i => (
                <StarPurple500OutlinedIcon />
              ))}
            </Rating>
          </Title>
          <SubTitle>
            <SubText>{info.district}</SubText>
            <SubText>显示在地图上</SubText>

            <SubText2>
              离中心地区
              {(Math.random() * (60 - 1) + 1).toFixed(1)}千米
            </SubText2>
          </SubTitle>
          <Recom>
            <RTitle>
              {roomType[Math.round(Math.random() * (25 - 0) + 0)]}
            </RTitle>
            <RSubTitle>
              {bedType[Math.round(Math.random() * (25 - 0) + 0)]}
            </RSubTitle>
            {Math.round(Math.random() * (60 - 1) + 1) > 30 && (
              <RAppend>包括早餐</RAppend>
            )}
            <RAppend>免费取消</RAppend>
            {Math.round(Math.random() * (60 - 1) + 1) > 30 && (
              <RAppend>无需预付 - 到店付款</RAppend>
            )}
          </Recom>
        </Detail>
        <Rest>
          {getReview(info.score)}
          <ScoreIcon>{info.score}</ScoreIcon>
        </Rest>
      </Content>
    </Container>
  )
}

export default HotelCard
