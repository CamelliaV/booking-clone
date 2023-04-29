import React from 'react'
import tw from 'twin.macro'

const Container = tw.div`
  w-full
  mt-12
  flex
  flex-col
  justify-center
  items-center
  p-12
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
  flex
  gap-2
  mt-5
  justify-between
  items-center
`
const Input = tw.input`
  w-96
  h-12
  p-[10px]
  text-xl
  font-thin
  text-[#6b6b6b]
  rounded-sm
  border-none
`
const Subscribe = tw.div`
  text-white
  w-36
  rounded-sm
  h-12
  flex
  items-center
  justify-center
  bg-[#0071c2]
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
