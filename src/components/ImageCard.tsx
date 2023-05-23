import React from 'react'
import tw, { styled } from 'twin.macro'

const Container = styled.div`
  ${tw`
  relative
  w-full
  `};
`

const Img = styled.img`
  ${tw`
  w-full
  max-h-[300px]
  object-cover
  `};
  height: ${({ type }: { type: '2' | '3' }) => (type == '2' ? '50%' : '70%')};
`

const Subtitle = styled.div`
  ${tw`
  flex
  gap-3
  absolute
  text-white
  font-bold
  text-[24px]
  top-6
  w-full
  left-4
  `};
  text-shadow: rgb(0, 0, 0) 1px 1px;
`
const Icon = tw.img`
  w-[24px] 
  h-[24px] 
  mt-1
`

export default function ImageCard({
  type,
  imgUrl,
  text
}: {
  type: '3' | '2'
  imgUrl: string
  text: string
}) {
  return (
    <Container>
      <Img type={type} src={imgUrl} />
      <Subtitle>
        {text}
        <Icon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAolBMVEX///8AAAAAAAAAAAAAAAD////29vbu7u7Q0ObGxuC9vdu3t9irq9GkpM7xkpyensqamsLugYyUlL7td4Psc3+FhbbraHV9fbHqXGvpV2ZycqroVWTlTV1oaKVmZqNhYaDlQFDgP1BaWpzbNkdSUpXaMULkL0HkLD9NTZPiJzrWKDlKSo/iJDfVIzTiHzPhGy9BQYzhGS09PYU7O4kxMYPOCh8LiCGXAAAABXRSTlMAESIzRJTdRHwAAACiSURBVHjardHbDoIwEEXRtogIeFdEEQXxBgiKWv//1xysU0ioJiau89adzEvJP1EleA/qlogSFnSG1fpvC0ZYNDYdnKOjMphutakw8iHsXMvDeTNh8grW2parn4pXdoSLfGEeQjjZcVcuFPwNhKIYcBzHS+0y9HhVzsJhC+F25xKG4x6CoSsYENLk0pCkEPLs2pDl3049lBihWktBox9/8HdPV8gmGPE7N7gAAAAASUVORK5CYII="></Icon>
      </Subtitle>
    </Container>
  )
}
