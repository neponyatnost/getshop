import { FC } from 'react'
import ReactPlayer from 'react-player'

interface VideoProps {}

const Video: FC<VideoProps> = () => {
  return (
    <ReactPlayer
      url={
        'https://lgohwewjijijjdfznuoj.supabase.co/storage/v1/object/public/video/timer.mp4'
      }
      playing
      width={1280}
      height={720}
      style={{
        zIndex: 1000,
      }}
    />
  )
}

export default Video
