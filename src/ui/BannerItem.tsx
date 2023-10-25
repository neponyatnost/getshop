import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import qr from '../assets/qr.jpg'
import Button from './Button'

const StyledWrapper = styled.div`
  width: 251px;
  height: 357px;
  background-color: #86d3f4;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const StyledHeading = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`

const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`

interface BannerItemProps {}

const BannerItem: FC<BannerItemProps> = () => {
  const navigate = useNavigate()

  const handleClick = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      navigate('/promo')
    }
  }

  return (
    <StyledWrapper>
      <StyledHeading>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </StyledHeading>
      <img src={qr} alt='QR' width={126} height={126} />
      <StyledDescription>Сканируйте QR-код или нажмите ОК</StyledDescription>
      <Button onClick={handleClick}>OK</Button>
    </StyledWrapper>
  )
}

export default BannerItem
