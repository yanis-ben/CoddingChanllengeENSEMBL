import { ActionType } from "../actions-type/actions-type"
import { StreamingDispatchType, IStreamingState} from "../../interfaces/StreamingItf"




const  InitialeState : IStreamingState = {
    isLoading: false,
    streaming: { 
        entries:[],
        total: 0
    },
    error: null,
}


const reducer = (state = InitialeState, action: StreamingDispatchType) : IStreamingState =>{
    switch (action.type){
        case ActionType.GET_STREAMING_LOADING:
            return {
                ...state,
                isLoading: true,
            } 
        case ActionType.GET_STREAMING_SUCCESS:
            return {
                ...state,
                    isLoading: false,
                    streaming: action.payload
            }
        case ActionType.GET_STREAMING_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;