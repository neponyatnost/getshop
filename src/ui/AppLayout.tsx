import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Video from './Video'

const Container = styled.div`
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  position: relative;
  background-color: #f4f4f4;
`

const AppLayout = () => {
  return (
    <Container>
      <Outlet />
      <Video />
    </Container>
  )
}

export default AppLayout
