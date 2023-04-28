import React, { useState } from 'react'
import tw from 'twin.macro'
import ButtonSingle from './ButtonSingle'
import { longButtonInfos, shortButtonInfos } from '../constants'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const Container = tw.div`
  w-[40%]
  flex
  gap-2
`

export default function ButtonLine({ type }: { type: 'long' | 'short' }) {
  const isPass = type === 'long' ? true : false

  const infos: { text: string; icon?: ReactJSXElement }[] =
    type === 'long' ? longButtonInfos : shortButtonInfos

  const [choice, setChoice] = useState(infos[0].text)

  return (
    <Container>
      {infos.map(info => (
        <ButtonSingle setChoice={setChoice} choice={choice} text={info.text} icon={info.icon} />
      ))}
    </Container>
  )
}
