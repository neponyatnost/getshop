import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import {
  KeyboardNavigatorBoard,
  KeyboardNavigatorElement,
  useKeyboardNavigator,
} from 'react-keyboard-navigator'
import styled from 'styled-components'

const Input = styled.input`
  width: 260px;
  height: 38px;
  background-color: transparent;
  margin-bottom: 13px;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  border: none;
  outline: none;
`

const PromoNumberInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 72px 0px;
  max-width: 380px;
  height: 720px;
  background-color: #86d3f4;
`

const Heading = styled.h2`
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 13px;
`

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  max-width: 300px;
  text-align: center;
  margin-bottom: 20px;
`

const MyKeyboard = () => {
  const { markRef } = useKeyboardNavigator({
    eventCallback: (e) => e.preventDefault(),
  })

  const [highlightBlockIndex, setHighlightBlockIndex] = useState(0)

  const [input, setInput] = useState('')

  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'СТЕРЕТЬ', 0]

  const handleKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // if (input.length < 10) {
    //   if (e.key === 'Enter') {
    //     setInput(input + (highlightBlockIndex + 1))
    //   }
    // }
    if (highlightBlockIndex === 9 && e.key === 'Enter') {
      setInput(input.slice(0, -1))
    }
  }

  useEffect(() => {
    function handleKeyDown(ev: Event) {
      if (ev instanceof KeyboardEvent) {
        const kEvent = ev
        if (kEvent.key) {
          if (input.length < 10) {
            if (kEvent.key === 'Enter') {
              setInput(input + (highlightBlockIndex + 1))
            }
          }
          if (highlightBlockIndex === 9 && kEvent.key === 'Enter') {
            setInput(input.slice(0, -1))
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [highlightBlockIndex, input])

  return (
    <PromoNumberInput>
      <Heading>Введите ваш номер мобильного телефона</Heading>
      <InputMask
        mask={'+7(999)999-99-99'}
        maskChar={'_'}
        alwaysShowMask
        value={input}
        className='input-mask'
      >
        {/* {(props) => <input {...props} />} */}
      </InputMask>
      <Paragraph>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </Paragraph>
      <KeyboardNavigatorBoard
        as='div'
        markRef={markRef}
        active={true}
        className='keyboard'
      >
        {keys.map((key, index) => (
          <KeyboardNavigatorElement
            key={key}
            as='button'
            className={key === 'СТЕРЕТЬ' ? 'backspace key' : 'key'}
            style={{
              backgroundColor:
                index === highlightBlockIndex ? '#000' : 'transparent',
              color: index === highlightBlockIndex ? '#fff' : '#000',
            }}
            markRef={markRef}
            active={index === highlightBlockIndex}
            onActiveChange={() => setHighlightBlockIndex(index)}
            onKeyDown={handleKeyPress}
          >
            <span>{key}</span>
          </KeyboardNavigatorElement>
        ))}
      </KeyboardNavigatorBoard>
    </PromoNumberInput>
  )
}

export default MyKeyboard
