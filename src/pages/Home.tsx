import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import backGroundstreaming from "./../assets/placeholder.png";

const Title = styled.div`
  color: white;
  background-color: rgb(56, 53, 53);
  align-items: center;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  padding-left: 100px;
`;

const Wrapper = styled.div`
display: flex;
margin-left: 10rem;
margin-top: 3rem;`

const Serie = styled.div`
  position: absolute;
  color: white;
  font-size: x-large;
  font-weight: bold;
  top: 280px;
  left: 200px;
`;

const Movie = styled.div`
  position: absolute;
  color: white;
  font-size: x-large;
  font-weight: bold;
  top: 280px;
  left: 370px;
`;

const ContainerImg = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;

const Image = styled.img`
background-color: black;
width: 10rem;
height: 16rem;
`
const Description = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Home = () => {
    const history = useHistory();

    return (
        <div >
            <Title>Popular Title</Title>
            <Wrapper>
                <ContainerImg onClick={() => history.push("/series")}>
                    <Serie>SERIE</Serie>
                    <Image src={backGroundstreaming} alt="series"/>
                    <Description>popular Series</Description>
                </ContainerImg>

                <ContainerImg onClick={() => history.push("/movies")}>
                    <Movie>MOVIE</Movie>
                    <Image src={backGroundstreaming} alt="movies"/>
                    <Description>popular Movies</Description>
                </ContainerImg>

            </Wrapper>
        </div>
    )
}

export default Home;