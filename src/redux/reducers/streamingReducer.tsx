import { ActionType } from "../actions-type/actions-type"
import { StreamingType, StreamingDispatchType} from "../../interfaces/myInterface"



interface  IinitialeState {
    isLoading: boolean,
    streaming?:  StreamingType
}

const  defaultState : IinitialeState = {
    isLoading: false
}


const reducer = (state = defaultState, action: StreamingDispatchType) : IinitialeState =>{
    switch (action.type){
        case ActionType.FAIL:
            return {
                isLoading: false,
            }
        case ActionType.LOADING:
            return {
                isLoading: true,
            }
        case ActionType.GET_STREAMING_SUCCESS:
        return {
                isLoading: true,
                streaming: action.payload
        }
        default:
            return state;
    }
}

export default reducer;