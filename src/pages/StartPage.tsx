import { FC, useEffect, useState } from 'react'
import Banner from '../ui/Banner'

interface StartPageProps {}

const StartPage: FC<StartPageProps> = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBannerVisible(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return <>{isBannerVisible && <Banner isBannerVisible={isBannerVisible} />}</>
}

export default StartPage
