import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { styled } from 'twin.macro'
import Footer from '../components/Footer'
import HomeBody from '../components/HomeBody'

const Container = styled.div`
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif;
`

export default function Home() {
  return (
    <Container>
      <Navbar></Navbar>
      <Header></Header>
      <HomeBody></HomeBody>
      <Footer />
    </Container>
  )
}
