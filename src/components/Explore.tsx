import React from 'react'
import tw, { styled } from 'twin.macro'
import SmallCard from './SmallCard'

const Container = styled.div`
  ${tw`
  z-[1]
  flex
  justify-between
  w-full
  max-w-5xl
  gap-4
  `}
`
const Title = tw.div`
  font-bold
  text-2xl
`
const Sub = tw.div`
  font-normal
  text-base
`
const fetchedData: { url: string; title: string; subtitle: string }[] = [
  {
    title: 'Tokyo',
    subtitle: '5,656 properties',
    url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
  },
  {
    title: 'Osaka',
    subtitle: '5,656 properties',
    url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
  },
  {
    title: 'Tokyo',
    subtitle: '5,656 properties',
    url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
  },
  {
    title: 'Tokyo',
    subtitle: '5,656 properties',
    url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
  },
  {
    title: 'Tokyo',
    subtitle: '5,656 properties',
    url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
  },
  {
    title: 'Tokyo',
    subtitle: '5,656 properties',
    url: 'https://q-xx.bstatic.com/xdata/images/city/170x136/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o='
  }
]

export default function Explore() {
  return (
    <Container>
      {fetchedData.map(item => (
        <SmallCard info={item} />
      ))}
    </Container>
  )
}
