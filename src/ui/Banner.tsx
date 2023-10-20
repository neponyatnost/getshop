import { motion } from 'framer-motion'
import { FC } from 'react'
import banner from '../assets/banner.jpg'

interface BannerProps {
  isBannerVisible: boolean
}

const Banner: FC<BannerProps> = ({ isBannerVisible = false }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
      }}
      transition={{ type: 'spring' }}
      initial={{ opacity: 0, top: 1000, right: 0 }}
      animate={{ opacity: 1, top: 220, right: 0 }}
    >
      <img src={banner} alt='Banner' width={251} height={357} />
    </motion.div>
  )
}

export default Banner
