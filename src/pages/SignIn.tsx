import React from 'react'
import Navbar from '../components/Navbar'
import tw, { styled } from 'twin.macro'
// import { Input } from '@mantine/core'
import { TextInput, Checkbox, Group, Box } from '@mantine/core'
import { useForm } from '@mantine/form'

import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import SectionHOC from '../hoc/SectionHOC'
import { motion } from 'framer-motion'
import { textVariant } from '../constants/motion'
const Container = tw.div`
  flex
  w-full
  flex-col
  items-center
`

const Title = tw.div`
  font-bold
  text-xl
  flex
  items-start
  
`
const StyledInputWrapper = tw.div`
  w-[360px]
  mt-8
  ml-20
`
const Hint = tw.div``

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
// ${tw`
// h-1
// bg-[#e7e7e7]
// `}

// border-top: 3px double #333;

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
    content: 'or use one of these options';
    padding: 0 8px;
    position: relative;
    top: -15px;
  }
`

// const SignIn = () => {
//   return (
//     <Container>
//       <Navbar type="signin" />
//       <Form>
//         <Title>Sign in or create an account</Title>{' '}
//         <StyledInputWrapper
//           id="email-input"
//           withAsterisk
//           label="Email address"
//           error="Invalid email input!"
//         >
//           <Input
//             id="email-input"
//             style={{
//               border: '1px solid #262626',
//               borderRadius: '5px',
//               fontSize: '14px'
//             }}
//             placeholder="Your email"
//           />
//         </StyledInputWrapper>
//         <Continue>Continue with email</Continue>
//       </Form>
//     </Container>
//   )
// }

const Form = tw.form`
  flex
  flex-col
  items-center
  w-fit
  mt-16
  mr-24
`

const LoginChoices = tw.div`
  w-[360px]
  h-[112px]
  flex
  mt-4
  justify-center
  gap-10
`
// ${}
const LoginPopUp = tw.div`
  border-solid
  w-[72px]
  h-[72px]
  flex
  items-center
  justify-center
  border-2
`
const LoginIcon = tw.div`
  w-[24px]
  h-[24px]
`
const LoginBody = tw(motion.div)`
  
`

const SignIn = () => {
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
  return (
    <Container>
      <Navbar />
      <LoginBody variants={textVariant()}>
        <Form
          onSubmit={form.onSubmit(values =>
            navigate('/password', { state: { email: values } })
          )}
        >
          <Title>Sign in or create an account</Title>
          <StyledInputWrapper>
            <TextInput
              withAsterisk
              label="Email address"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />

            {/* <Checkbox
            mt="md"
            label="I agree to use my privacy"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          /> */}

            <Continue type="submit">Continue with email</Continue>

            <Options>
              <Hr />
              {/* <Span>or use one of these options</Span> */}
              {/* <Hr /> */}
            </Options>

            <LoginChoices>
              <LoginPopUp>
                <LoginIcon>
                  <FacebookIcon />
                </LoginIcon>
              </LoginPopUp>
              <LoginPopUp>
                <LoginIcon>
                  <GoogleIcon />
                </LoginIcon>
              </LoginPopUp>
              <LoginPopUp>
                <LoginIcon>
                  <PhoneAndroidIcon />
                </LoginIcon>
              </LoginPopUp>
            </LoginChoices>
          </StyledInputWrapper>
        </Form>
      </LoginBody>
    </Container>
  )
}

export default SectionHOC(SignIn)
