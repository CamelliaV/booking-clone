import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
  faPalette
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { commonStyles } from '../styles'
// import SectionWrapper from '../hoc/SectionWrapper'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../constants/motion'
import SectionHOC from '../hoc/SectionHOC'

const Container = styled(motion.div)`
  background-color: ${commonStyles('bg')};
  color: ${commonStyles('text')};
  ${tw`
  flex
  justify-center
  `}
`
const Wrapper = styled.div<{ type?: 'Hotels' }>`
  ${tw`
  max-w-6xl
  mx-auto
  mt-5
  w-full
  relative
  `};
  ${({ theme }) => theme !== 'Hotels' && tw`mb-16`}
`
const ItemList = tw.div`
  w-full
  justify-start
  flex
  gap-10
  items-center
  mb-14
`
// TODO: For active state (temporarily hover)
const Item = styled.div`
  ${tw`
  flex
  items-center
  gap-3
  relative
  `};
  :hover {
    ::before {
      content: '';
      width: 140%;
      height: 120%;
      right: 20%;
      left: -20%;
      opacity: 0.1;
      position: absolute;
      border-radius: 100px;
      background-color: currentcolor;
    }
  }
`
const Title = tw.div`
  font-bold
  text-5xl
`
const Desc = tw.div`
  my-5
  
  font-normal
  text-2xl
`
const Button = styled.div`
  ${tw`
  flex
  items-center
  bg-[#0071c2]
  font-medium
  text-xl
  max-w-fit
  h-full
  py-1
  px-6
  cursor-pointer
  `};
  border: 2px solid #febb02;
`
const SearchList = styled.div`
  ${tw`
  flex
  px-0
  items-center
  justify-around
  bg-white
  rounded-md
  h-14
  absolute
  -bottom-24
  w-full
  max-w-6xl
  `};
  margin-bottom: ${({ theme }) => (theme === 'Hotels' ? '80px' : '')};
  border: 3px solid #febb02;
`
const SearchItem = styled.div`
  ${tw`
  w-full
  flex
  items-center
  p-2
  gap-3
  h-full`};
  border: 2px solid #febb02;
`
const SearchInput = styled.input`
  ${tw`
  outline-blue-400
  
  w-full
  text-black
  `};
  &::placeholder {
    color: black;
  }
  &:hover::placeholder {
    color: gray;
  }
`
const SearchSpan = tw.span`
  text-black
  cursor-pointer
`
const StyledDateRange = tw(DateRange)`
  absolute
  z-[2]
  top-14
`

const OptionsWrapper = tw.div`
  bg-white
  z-[2]
  absolute
  rounded-md
  shadow-[rgba(0, 0, 0, 0.4)]
  shadow-lg
  text-black
  top-14
`

const OptionItem = tw.div`
  items-center
  flex
  justify-between
  w-48
  m-3
`
const OptionCounter = tw.div`
  flex
  items-center

  text-sm
  gap-3
`
const OptionText = tw.span``

const OptionCounterNumber = tw.span``

const OptionCounterButton = styled.button`
  ${tw`
  text-[#0071c2]
  w-8
  h-8
  border-solid
  border-2
  border-rose-300
  cursor-pointer
  bg-white
  
  `};
  &: disabled {
    ${tw`text-gray-300 cursor-not-allowed`}
  }
`

const Span = styled.span``

function Header() {
  const location = useLocation()
  let type = ''
  if (location.pathname === '/search') type = 'Hotels'
  const [openDate, setOpenDate] = useState(false)
  const [city, setCity] = useState('')
  const [openOption, setOpenOption] = useState(false)
  const navigate = useNavigate()
  const handleSearch = () => {
    navigate('/search', { state: { city } })
  }
  const [animationParent] = useAutoAnimate({
    duration: 300,
    easing: 'ease-in-out'
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
  type Option = 'adult' | 'children' | 'room'

  const handleOption = (option: Option, operation: '+' | '-') => () => {
    setOptions(prev => {
      return {
        ...prev,
        [option]: operation === '+' ? options[option] + 1 : options[option] - 1
      }
    })
  }

  return (
    <Container variants={textVariant()}>
      <Wrapper theme={type}>
        <ItemList>
          <Item>
            <FontAwesomeIcon icon={faBed} />
            <Span>Stays</Span>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faPlane} />
            <Span>Flights</Span>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faCar} />
            <Span>Car rentals</Span>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faPalette} />
            <Span>Attractions</Span>
          </Item>
          <Item>
            <FontAwesomeIcon icon={faTaxi} />
            <Span>Airport taxis</Span>
          </Item>
        </ItemList>

        {type !== 'Hotels' && (
          <>
            <Title>Find your next stay</Title>
            <Desc>Search deals on hotels, homes, and much more...</Desc>
          </>
        )}
        <SearchList theme={type}>
          <SearchItem>
            <FontAwesomeIcon icon={faBed} style={{ color: 'black' }} />
            <SearchInput
              onChange={e => setCity(e.currentTarget.value)}
              placeholder="Where are you going?"
            ></SearchInput>
          </SearchItem>
          <SearchItem ref={animationParent}>
            <FontAwesomeIcon icon={faCalendarDays} style={{ color: 'black' }} />
            <SearchSpan onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].startDate,
              'eee, MMM d'
            )} —— ${format(date[0].endDate, 'eee, MMM d')}`}</SearchSpan>
            {openDate && (
              <StyledDateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection] as any)}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </SearchItem>
          <SearchItem ref={animationParent}>
            <FontAwesomeIcon icon={faPerson} style={{ color: 'lightgray' }} />
            <SearchSpan
              onClick={() => setOpenOption(!openOption)}
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</SearchSpan>
            {openOption && (
              <OptionsWrapper>
                <OptionItem>
                  <OptionText>Adult</OptionText>
                  <OptionCounter>
                    <OptionCounterButton
                      disabled={options.adult === 1}
                      onClick={handleOption('adult', '-')}
                    >
                      -
                    </OptionCounterButton>
                    <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                    <OptionCounterButton onClick={handleOption('adult', '+')}>
                      +
                    </OptionCounterButton>
                  </OptionCounter>
                </OptionItem>
                <OptionItem>
                  <OptionText>Children</OptionText>
                  <OptionCounter>
                    <OptionCounterButton
                      disabled={options.children === 0}
                      onClick={handleOption('children', '-')}
                    >
                      -
                    </OptionCounterButton>
                    <OptionCounterNumber>
                      {options.children}
                    </OptionCounterNumber>
                    <OptionCounterButton
                      onClick={handleOption('children', '+')}
                    >
                      +
                    </OptionCounterButton>
                  </OptionCounter>
                </OptionItem>
                <OptionItem>
                  <OptionText>Room</OptionText>
                  <OptionCounter>
                    <OptionCounterButton
                      disabled={options.room === 1}
                      onClick={handleOption('room', '-')}
                    >
                      -
                    </OptionCounterButton>
                    <OptionCounterNumber>{options.room}</OptionCounterNumber>
                    <OptionCounterButton onClick={handleOption('room', '+')}>
                      +
                    </OptionCounterButton>
                  </OptionCounter>
                </OptionItem>
              </OptionsWrapper>
            )}
          </SearchItem>
          <Button onClick={handleSearch}>Search</Button>
        </SearchList>
      </Wrapper>
    </Container>
  )
}
export default SectionHOC(Header)
