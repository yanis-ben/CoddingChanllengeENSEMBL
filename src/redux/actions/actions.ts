import {ActionType} from "../actions-type/actions-type";
import { StreamingDispatchType } from "../../interfaces/myInterface";
import { Dispatch } from "react";
import axios from "axios";

export const GetStreaming = () => async (dispatch: Dispatch<StreamingDispatchType>) => {
    try {
        // to Brahim: ActionType.LOADING en pemier parce que le LOADING se passe toujours en premier ????
        dispatch({
            type: ActionType.LOADING
        })

        const response = await axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json");

        dispatch({
            type: ActionType.GET_STREAMING_SUCCESS,
            payload: response.data
        })
        console.log(response)
    }catch{
        dispatch({
            type: ActionType.FAIL
        })
    }
}




