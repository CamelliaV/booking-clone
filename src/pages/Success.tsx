import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../hooks'
import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { textVariant } from '../constants/motion'
import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import SectionHOC from '../hoc/SectionHOC'
const Container = tw.div`
  flex
  flex-col
  items-center
`
const Title = tw.div`
  font-bold
  text-xl
  mr-[135px]
`
const Subtitle = tw.div`
  text-sm
  font-normal
  max-w-[360px]
  ml-2
  mt-3
  text-[#464646]
`
const StyledInputWrapper = tw.div`
  w-[360px]
  mt-8
  ml-20
  flex
  flex-col
  gap-4
`
const Continue = tw.button`
  bg-[#006ce4]
  text-white
  font-medium
  text-base
  mt-4
  flex
  items-center
  justify-center
  w-[360px]
  h-[48px]
  rounded-[4px]
`
const Options = tw.div`
  flex
  gap-2
`

const Hr = styled.hr`
  ${tw`
  w-full
  mt-7
  h-5
  `};
  border-top: 1px solid #e7e7e7;
  color: #333;
  overflow: visible;
  text-align: center;

  &:after {
    background: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1a1a1a;
    content: '↓';
    padding: 0 8px;
    position: relative;
    top: -15px;
  }
`

const Form = tw.form`
  flex
  flex-col
  items-center
  w-fit
  mt-16
  mr-24
`
const Button = tw.button` 
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
const Info = tw.div``

const Jump = tw(Link)`
bg-[#006ce4]
text-white
font-medium
text-base
mt-4
flex
items-center
justify-center
w-[360px]
h-[48px]
rounded-[4px]
`
const PasswordBody = tw(motion.div)``

function Success() {
  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email'
    }
  })
  const location = useLocation()
  const { password, email } = location.state
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.user)
  const [message, setMessage] = useState('')
  const handleRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(loginStart())
    try {
      console.log('access handleLogin')

      const res = await axios.request({
        url: '/api/auth/signup',
        method: 'post',
        data: {
          username: email,
          password
        },
        withCredentials: true
      })
      setMessage(res.data.message)
      alert(res.data.message)
      if (res.data.data == null) return

      dispatch(loginSuccess(res.data.data))
      // console.log(res.data)
    } catch (error) {
      // console.log(error)
      dispatch(loginFailure())
    }
  }
  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(loginStart())
    try {
      console.log('access handleLogin')

      const res = await axios.request({
        url: '/api/auth/signin',
        method: 'post',
        data: {
          username: email,
          password
        },
        withCredentials: true
      })
      setMessage(res.data.message)
      alert(res.data.message)
      if (res.data.data == null) return
      dispatch(loginSuccess(res.data.data))
      // console.log(res.data)
    } catch (error) {
      // console.log(error)
      dispatch(loginFailure())
    }
  }

  return (
    <Container>
      <Navbar />
      <PasswordBody variants={textVariant()}>
        <Form
          onSubmit={form.onSubmit(() => {
            navigate('/success')
          })}
        >
          <Title>One more step</Title>
          <Subtitle>Sign Up now or Login with existed account</Subtitle>
          <StyledInputWrapper>
            <Hr theme="asasg"></Hr>
            <Continue onClick={handleRegister} type="submit">
              Register
            </Continue>
            <Hr></Hr>
            <Continue onClick={handleLogin} type="submit">
              Login
            </Continue>
            <Hr></Hr>
            <Jump to="/">Back</Jump>
          </StyledInputWrapper>
        </Form>
      </PasswordBody>
    </Container>
  )
}

export default SectionHOC(Success)
