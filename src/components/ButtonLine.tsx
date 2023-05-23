import React, { useState } from 'react'
import tw from 'twin.macro'
import ButtonSingle from './ButtonSingle'
import { longButtonInfos, midButtonInfos, shortButtonInfos } from '../constants'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const Container = tw.div`
  w-[40%]
  flex
  gap-2
`

export default function ButtonLine({
  type,
  setHook
}: {
  type: 'long' | 'short' | 'mid'
  setHook?: React.Dispatch<React.SetStateAction<string>>
}) {
  const infos: { text: string; icon?: ReactJSXElement }[] =
    type === 'long'
      ? longButtonInfos
      : type === 'short'
      ? shortButtonInfos
      : midButtonInfos

  const [choice, setChoice] = useState(infos[0].text)

  return (
    <Container>
      {infos.map(info => (
        <ButtonSingle
          setChoice={setChoice}
          setHook={setHook}
          choice={choice}
          text={info.text}
          icon={info.icon}
        />
      ))}
    </Container>
  )
}
