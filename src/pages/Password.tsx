import Navbar from '../components/Navbar'
import tw, { styled } from 'twin.macro'
// import { Input } from '@mantine/core'
import { TextInput, Checkbox, Group, Box } from '@mantine/core'
import { useForm } from '@mantine/form'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import { useDebouncedState } from '@mantine/hooks'
import { motion, warning } from 'framer-motion'
import SectionHOC from '../hoc/SectionHOC'
import { textVariant } from '../constants/motion'
const Container = tw.div`
  flex
  flex-col
  items-center
`
const Title = tw.div`
  font-bold
  text-xl
  mr-28
`
const Subtitle = tw.div`
  text-sm
  font-normal
  max-w-[360px]
  ml-20
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
    content: 'or use one of these options';
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
const PasswordBody = tw(motion.div)``

const Password = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location.state)
  const [confirm, setConfirm] = useDebouncedState('', 200)

  const { email } = location.state.email

  const form = useForm({
    initialValues: {
      password: '',
      termsOfService: false
    },

    validate: {
      password: (value: string) =>
        /^[0-9a-zA-Z]{4,12}$/.test(value) ? null : 'Invalid password'
    }
  })
  return (
    <Container>
      <Navbar />
      <PasswordBody variants={textVariant()}>
        <Form
          onSubmit={form.onSubmit((values: { password: string }) => {
            const { password } = values
            // console.log(password);
            if (password !== confirm) {
              window.alert('Password not confirmed')
              return
            }
            // console.log(confirm)
            // console.log(email)

            navigate('/success', { state: { email, confirm, password } })
          })}
        >
          <Title>Create password</Title>
          <Subtitle>
            Use a minimum of 10 characters, including uppercase letters,
            lowercase letters and numbers.
          </Subtitle>
          <StyledInputWrapper>
            <TextInput
              withAsterisk
              label="Password"
              placeholder="your password"
              {...form.getInputProps('password')}
            />
            <TextInput
              withAsterisk
              label="Confirm Password"
              placeholder="confirm password"
              onChange={event => setConfirm(event.currentTarget.value)}
            />

            <Continue type="submit">Create account</Continue>
          </StyledInputWrapper>
        </Form>
      </PasswordBody>
    </Container>
  )
}

export default SectionHOC(Password)
