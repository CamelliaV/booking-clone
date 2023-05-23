import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import { commonStyles } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleQuestion,
  faEarDeaf,
  faEarthAmericas
} from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, useAppSelector } from '../hooks'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import { motion } from 'framer-motion'
import { textVariant } from '../constants/motion'
import SectionHOC from '../hoc/SectionHOC'
import axios from 'axios'
import { logout } from '../redux/userSlice'
// import SectionWrapper from '../hoc/SectionWrapper'
// fixed
// TODO: height adjustment
const Container = styled.div`
  ${tw`
  w-full
  h-[70px]
  flex
  items-center
  justify-center
  py-5
  mx-auto`};

  background-color: ${commonStyles('bg')};
`
const Wrapper = styled(motion.div)`
  ${tw`
  max-w-6xl
  w-full
  flex
  items-center
  justify-between

  `};
  color: ${commonStyles('text')};
`

const Logo = tw(Link)`
  font-bold
  text-2xl
`
const User = tw.div`
  w-[300px]
  flex
  gap-4
  font-medium
  text-base
`
const Span = tw.div`
font-medium
text-base
`

const NavItems = tw.div`
  flex
  gap-8
  py-1
  mr-4
  px-3
`
const Button = tw(Link)`
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
const LogoutButton = tw.div`
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
const SignInButton = tw(Link)`
  cursor-pointer
  flex
  items-center
  justify-center
  w-12
  h-10
`
const StyledIcon = tw(FontAwesomeIcon)`
  w-full
  h-[50%]
`

function Navbar() {
  const { user } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const type = location.pathname

  const handleLogout = async () => {
    const res = await axios.put('/api/auth/logout')
    console.log(res.data.message)
    dispatch(logout())
  }
  return (
    <Container>
      <Wrapper variants={textVariant()}>
        <Logo to="/">Booking.com</Logo>
        <NavItems>
          {type !== '/signin' && type !== '/password' && type !== '/success' ? (
            <>
              <Span>CNY</Span>
              <PublicOutlinedIcon />
              <HelpOutlineOutlinedIcon />
              <Span>List your property</Span>
              {!user && <Button to="/signin">Register</Button>}
              {user ? (
                <User>
                  Welcome! <span>{user.username}</span>
                  <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
                </User>
              ) : (
                <Button to="/signin">Sign in</Button>
              )}
            </>
          ) : (
            <>
              <SignInButton to="/signin">
                <StyledIcon icon={faEarthAmericas} />
              </SignInButton>
              <SignInButton to="/">
                <StyledIcon icon={faCircleQuestion} />
              </SignInButton>
            </>
          )}
        </NavItems>
      </Wrapper>
    </Container>
  )
}

export default SectionHOC(Navbar)
