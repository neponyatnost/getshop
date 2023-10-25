import { FC } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 16px;
  background-color: #000;
  color: #86d3f4;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 156px;
  border: none;
`

interface ButtonProps {
  children: string
  onClick?: (e: React.KeyboardEvent) => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onKeyDown={onClick}>{children}</StyledButton>
}

export default Button
