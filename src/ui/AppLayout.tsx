import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Main from './Main'
import Video from './Video'

const Container = styled.div`
  width: 1280px;
  height: 720px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  background-color: #f4f4f4;
`

const AppLayout = () => {
  return (
    <Container>
      <Video />
      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

export default AppLayout
