import React from 'react'
import styled from "styled-components"


const Title = styled.div`
color: white;
`;

const HeaderStyled = styled.div`
  background-color: royalblue;
  box-shadow: inset 0px -5px 10px -4px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  height: 60px;
`;

const Connection = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px;
`;

const Button = styled.button`
  color: white;
  background-color: rgb(56, 53, 53);
  margin-top:15px;
  margin-bottom:15px;
  margin-left: 20px;
`;

export const Header = () => {
    return (
        <HeaderStyled>
            <HeaderTop>

                <Title>
                    <h1>DEMO Streaming</h1>
                </Title>

                <Connection>
                    <p>Log in</p>
                    <Button>Start your free trial</Button>
                </Connection>

            </HeaderTop> 
        </HeaderStyled>
    )
}
