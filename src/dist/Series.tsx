import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import { GetStreaming } from '../redux/actions/actions'


export default function Series() {

    const streaming = useSelector((state: State) => state.streaming)

    // dispatch va généer l'action qu'on veut exécuter
    const dispatch = useDispatch()


    const displayData = () => dispatch(GetStreaming())

    useEffect(() => {
        displayData();
    }, [])

    console.log("streaming=", streaming)

    return (
        <div className="tata" >
            <h1>My Series</h1>
                {streaming.streaming && (
                    <div>
                        {streaming.streaming.Entries.map((entries) => {
                            return <p>{entries.title}</p>
                        })}
                    </div>
                )}
            
        </div>
    )
}
