import React from 'react'
import tw from 'twin.macro'

const Container = tw.div`
  max-w-5xl
  mx-auto
`

export default function SectionWrapper(Component: React.FunctionComponent) {
  return () => (
    <Container>
      <Component />
    </Container>
  )
}
