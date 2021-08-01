import { ActionType } from "../redux/actions-type/actions-type"

export interface IStreamingType {
    entries: IEntries[];
    total: number;
}

export interface IEntries {
    title: string;
    description:string;
    programType: string;
    images: IImages;
    releaseYear: number;
}

export interface IImages {
    "Poster Art": {
        url: string;
        width: number;
        height: number;
    }
}

export interface IGetStreamingLoading {
    type: typeof ActionType.GET_STREAMING_LOADING
}

export interface IGetStreamingFail {
    type: typeof ActionType.GET_STREAMING_FAIL, 
    error: any
}

export interface IGetStreamingSuccess {
    type: typeof ActionType.GET_STREAMING_SUCCESS,
    payload: IStreamingType
}

export type StreamingDispatchType = IGetStreamingLoading | IGetStreamingFail | IGetStreamingSuccess


export interface  IStreamingState {
    isLoading: boolean;
    streaming?:  IStreamingType;
    error: any;
}
