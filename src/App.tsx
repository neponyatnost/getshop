import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PromoPage from './pages/PromoPage'
import StartPage from './pages/StartPage'
import AppLayout from './ui/AppLayout'
import MyKeyboard from './ui/MyKeyboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<StartPage />} />
          <Route path='/promo' element={<PromoPage />} />
        </Route>
        <Route path='/mykeyboard' element={<MyKeyboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
