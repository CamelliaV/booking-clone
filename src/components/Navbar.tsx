import React from 'react'
import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import { commonStyles } from '../styles'
import SectionWrapper from '../hoc/SectionWrapper'
// fixed
// top-0
// TODO: height adjustment
const Container = styled.div`
  ${tw`
  w-full
  h-[50px]
  flex
  items-center
  justify-center
  py-5
  mx-auto`};
  background-color: ${commonStyles('bg')};
`
const Wrapper = styled.div`
  ${tw`
  max-w-6xl
  w-full
  flex
  items-center
  justify-between

  `};
  color: ${commonStyles('text')};
`

const Logo = tw.div`
  font-medium

`

const NavItems = tw.div`
  flex
  gap-5
  py-1
  px-3
`
const Button = tw(Link)`
  py-1
  px-3
  cursor-pointer
  text-sm
  text-[#0071c2]
  flex
  items-center
  justify-center
  border-2
  bg-white
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>
        <NavItems>
          <Button to="/">Register</Button>
          <Button to="/">Sign in</Button>
        </NavItems>
      </Wrapper>
    </Container>
  )
}

export default Navbar
