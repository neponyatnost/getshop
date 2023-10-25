import { FC } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'

interface VideoProps {}

const Video: FC<VideoProps> = () => {
  const location = useLocation()
  const path = location.pathname
  let play = path === '/'

  if (path === '/promo') play = false

  return (
    <ReactPlayer
      url={
        'https://lgohwewjijijjdfznuoj.supabase.co/storage/v1/object/public/video/timer.mp4'
      }
      playing={play}
      width={1280}
      height={720}
      muted
      loop
      stopOnUnmount
    />
  )
}

export default Video
