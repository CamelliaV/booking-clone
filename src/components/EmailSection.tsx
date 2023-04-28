import React from 'react'
import tw from 'twin.macro'

const Container = tw.div`
  w-full
  flex
  flex-col
  justify-center
  items-center
  bg-[#00224f]
`
const Title = tw.div`
  w-full
  text-2xl
  flex
  items-center
  justify-center
  text-white
  font-light
`
const Sub = tw.div`
  w-full
  text-base
  flex
  justify-center
  text-[#BDBDBD]
`
const InputContainer = tw.div`
  max-w-fit
  flex
  gap-2
  justify-between
  items-center
`
const Input = tw.input`

`
const Subscribe = tw.div`
  w-full
  text-white
`

export default function EmailSection() {
  return (
    <Container>
      <Title>Save time, save money!</Title>
      <Sub>Sign up and we'll send the best deals to you</Sub>
      <InputContainer>
        <Input placeholder="Your email address" />
        <Subscribe>Subscribe</Subscribe>
      </InputContainer>
    </Container>
  )
}
