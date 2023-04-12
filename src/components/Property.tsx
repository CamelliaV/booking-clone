import React from 'react'
import tw, { styled } from 'twin.macro'
import SmallCard from './SmallCard'
const Container = styled.div`
  ${tw`
  flex
  justify-between
  w-full
  max-w-5xl
  gap-4
  `}
`

const fetchedData: { url: string; title: string; subtitle: string }[] = [
  {
    title: 'Hotels',
    subtitle: '954,989 hotels',
    url: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o='
  },
  {
    title: 'Hotels',
    subtitle: '954,989 hotels',
    url: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o='
  },
  {
    title: 'Hotels',
    subtitle: '954,989 hotels',
    url: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&'
  },
  {
    title: 'Hotels',
    subtitle: '954,989 hotels',
    url: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o='
  }
]

export default function Property() {
  return (
    <Container>
      {fetchedData.map(item => (
        <SmallCard info={item} />
      ))}
    </Container>
  )
}
