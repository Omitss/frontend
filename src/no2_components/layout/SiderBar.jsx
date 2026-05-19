// SiderBar.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SiderBar = ({ isOpen, setIsOpen }) => {

  return (
    <>

      {
        isOpen &&
        <Overlay
          onClick={() => setIsOpen(false)}
        />
      }

      <Sidebar isOpen={isOpen}>

        <MenuContainer>

          <StyledLink
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </StyledLink>

          <StyledLink
            to="/todo"
            onClick={() => setIsOpen(false)}
          >
            할일
          </StyledLink>

          <StyledLink
            to="/employee"
            onClick={() => setIsOpen(false)}
          >
            고용인 정보
          </StyledLink>

        </MenuContainer>

      </Sidebar>

    </>
  )
}

export default SiderBar


const Overlay = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0,0,0,0.4);

  z-index: 999;
`

const Sidebar = styled.aside`
  width: 240px;
  min-height: calc(100vh - 70px);

  background-color: white;

  border-right: 1px solid #ddd;

  padding: 24px 16px;

  @media (max-width: 768px) {

    position: fixed;

    top: 70px;

    left: ${({ isOpen }) => isOpen ? '0' : '-260px'};

    transition: 0.3s;

    z-index: 1000;
  }
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`

const StyledLink = styled(Link)`
  text-decoration: none;

  color: #0f172a;

  padding: 14px 16px;

  border-radius: 10px;

  font-weight: bold;

  transition: 0.2s;

  &:hover {
    background-color: #e2e8f0;
  }
`