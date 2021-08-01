import {ActionType} from "../actions-type/actions-type";
import { StreamingDispatchType } from "../../interfaces/StreamingItf";
import { Dispatch } from "react";
import axios from "axios";

export const GetStreaming = () => async (dispatch: Dispatch<StreamingDispatchType>) => {
    try {
        dispatch({
            type: ActionType.GET_STREAMING_LOADING
        })

        const response = await axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json") ;

        dispatch({
            type: ActionType.GET_STREAMING_SUCCESS,
            payload: response.data
        })
        console.log(response)
    }catch (error){
        dispatch({
            type: ActionType.GET_STREAMING_FAIL,
            error
        })
    }
}




