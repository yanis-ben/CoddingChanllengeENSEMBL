import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import { GetStreaming } from '../redux/actions/streamingActions'
import { IEntries } from '../interfaces/StreamingItf'
import styled from 'styled-components';

const Title = styled.div`
  color: white;
  background-color: rgb(56, 53, 53);
  align-items: center;
  justify-content: center;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  padding-left: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min-content;
  margin-right: 20px;
  margin-bottom: 15px;
`;

const IImage = styled.img`
  width: 150px;
`

const  Series = () => {

    const dispatch = useDispatch()
    const streaming = useSelector((state: State) => state.streaming.streaming)//(state.reducerName.dataName)
    const isLoading = useSelector((state: State) => state.streaming.isLoading)
    const error = useSelector((state: State) => state.streaming.error)

    useEffect(() => {
        dispatch(GetStreaming())
    }, [dispatch])

    console.log("streaming=", streaming)

    const displaySeries = (
        <div className="div">
            <Title>Popular series</Title>
            <Content > 
                {streaming && streaming.entries && streaming.entries.length ? (
                streaming.entries
                .sort((a,b) => a.title.localeCompare(b.title))
                .filter((el) => el.programType === "series" && el.releaseYear >= 2010)
                .slice(0, 21)
                .map((el: IEntries, index) => (
                    <Wrapper key={`serie-${index}`}>
                        <IImage src={el.images["Poster Art"].url} />
                        {el.title}
                    </Wrapper>
                ))
            ): (
                <div>no series</div> )}
            </Content>                
        </div>
    )

    return isLoading ? (
        <div className="div">Loading...</div>
    ) : error ? (
        <div className="div">Oops, something went wrong...</div>
    ) : (
        displaySeries
    )
}

export default Series;