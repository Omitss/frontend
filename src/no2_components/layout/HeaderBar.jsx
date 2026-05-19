// HeaderBar.jsx

import React from 'react'
import styled from 'styled-components'

const HeaderBar = ({ isOpen, setIsOpen }) => {

  return (
    <Header>

      <LeftArea>

        <MenuButton
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </MenuButton>

        <Logo>
          Logo
        </Logo>

      </LeftArea>

      <RightArea>

        <LoginButton>
          로그인
        </LoginButton>

        <SignupButton>
          회원가입
        </SignupButton>

      </RightArea>

    </Header>
  )
}

export default HeaderBar


const Header = styled.header`
  height: 70px;
  background-color: #0f172a;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;

  color: white;

  position: sticky;
  top: 0;
  z-index: 1000;
`

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const RightArea = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`

const LoginButton = styled.button`
  border: none;
  padding: 10px 16px;

  border-radius: 8px;

  cursor: pointer;

  font-size: 14px;
`

const SignupButton = styled(LoginButton)`
  background-color: #3b82f6;
  color: white;
`

const MenuButton = styled.button`
  display: none;

  border: none;
  background: none;

  color: white;

  font-size: 28px;

  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`