import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid transparent;
  ${tw`
  rounded-[100px]
  py-3
  px-4
  flex
  items-center
  justify-between
  gap-2
  flex-[1]
  `};
  &: hover {
    background: rgba(94, 94, 94, 0.08);
  }
`

// text-[rgb(0, 113, 194)]

const Text = tw.span``

export default function ButtonSingle({
  text,
  icon,
  choice,
  setChoice
}: {
  text: string
  icon?: ReactJSXElement
  choice: string
  setChoice: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <Container
      onClick={() => setChoice(text)}
      style={
        choice === text
          ? {
              color: 'rgb(0, 114, 193)',
              border: '1px solid rgb(0, 114, 193)'
            }
          : {}
      }
    >
      {icon} <Text>{text}</Text>
    </Container>
  )
}
