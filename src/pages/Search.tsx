import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import tw from 'twin.macro'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import HotelCard from '../components/HotelCard'
import { Info } from '../types/index'
const Container = tw.div``
const List = tw.div`
  flex
  flex-col
  gap-6
  p-8
`
const Search = () => {
  const location = useLocation()
  const city = location.state.city
  const [page, setPage] = useState(1)
  const [data, setData] = useState<Info[]>([])
  // console.log(location.state.city)
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `/api/detail/?current=${page}&pageSize=25&city=${city}`
      )
      setData(res.data.records)
    }
    fetchData()
  }, [page, city])
  return (
    <Container>
      <Navbar></Navbar>
      <Header></Header>
      <List>
        {data.map(info => (
          <HotelCard info={info} key={`info-${info.id}`}></HotelCard>
        ))}
      </List>
    </Container>
  )
}

export default Search
