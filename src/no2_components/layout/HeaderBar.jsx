// HeaderBar.jsx

import React, { useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../no0_context/UserContext'

const HeaderBar = ({ isOpen, setIsOpen}) => {

  const {state, dispatch} = useContext(UserContext);
  //const {isLogin} = state;

  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch({type:"logout"})

    alert("로그아웃 됬습니다")

    navigate("/login")
  }
  

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

        {
          state.isLogin ?

            <UserArea>

              <UserName>
                👋 {state.username}님
              </UserName>

              <LogoutButton
                onClick={handleLogout}
              >
                로그아웃
              </LogoutButton>

            </UserArea>

            :

            <ButtonGroup>

              <LoginButton
                onClick={() => navigate("/login")}
              >
                로그인
              </LoginButton>

              <SignupButton
                onClick={() => navigate("/register")}
              >
                회원가입
              </SignupButton>

            </ButtonGroup>
        }

      </RightArea>

    </Header>
  )
}

export default HeaderBar


// ================= STYLE =================

const Header = styled.header`
  height: 70px;

  background-color: #0f172a;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;

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
  color: white;

  font-size: 24px;
  font-weight: 700;
`

const RightArea = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`

const UserArea = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`

const UserName = styled.div`
  padding: 10px 16px;

  background: rgba(255,255,255,0.1);

  border-radius: 10px;

  color: white;

  font-size: 14px;
  font-weight: 600;
`

const BaseButton = styled.button`
  border: none;

  padding: 10px 16px;

  border-radius: 10px;

  cursor: pointer;

  font-size: 14px;
  font-weight: 600;

  transition: 0.2s;
`

const LoginButton = styled(BaseButton)`
  background: white;

  color: #0f172a;

  &:hover {
    background: #e2e8f0;
  }
`

const SignupButton = styled(BaseButton)`
  background: #3b82f6;

  color: white;

  &:hover {
    background: #2563eb;
  }
`

const LogoutButton = styled(BaseButton)`
  background: #ef4444;

  color: white;

  &:hover {
    background: #dc2626;
  }
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