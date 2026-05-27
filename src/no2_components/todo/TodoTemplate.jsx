import React from 'react'
import styled from 'styled-components'

const TodoTemplate = ({children}) => {
  return (
    <Container>
        <Title>일정관리</Title>

        <Content>
            {children}
        </Content>
    </Container>
  )
}

export default TodoTemplate


const Container = styled.div`
    width: 500px;
    margin: 50px auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    background: white;
`

const Title = styled.div`
    background: #7950f2;
    color: white;
    font-size: 28px;
    font-weight: bold;
    padding: 24px;
    text-align: center;
`

const Content = styled.div`
    padding: 20px;
`