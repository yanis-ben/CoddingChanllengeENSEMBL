import { ActionType } from "../redux/actions-type/actions-type"

export type StreamingType = {
    isLoading: false,
    Entries: Entries[]
}

export type Entries = {
    title: string,
    programmetype: string,
    images: Images[]
}

export type Images = {
    posterArt: {
        url: string,
    }
}

export interface Loading {
    type: typeof ActionType.LOADING
}

export interface Fail {
    type: typeof ActionType.FAIL
}

export interface GetStreamingSuccess {
    type: typeof ActionType.GET_STREAMING_SUCCESS,
    payload: StreamingType
}


export type StreamingDispatchType = Loading | Fail | GetStreamingSuccess