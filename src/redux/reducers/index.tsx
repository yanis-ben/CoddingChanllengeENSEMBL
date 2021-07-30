import { combineReducers } from "redux"; 
import streamingReducer from "./streamingReducer";

const reducers = combineReducers({
    //create reducer key 
    streaming: streamingReducer
})

export default reducers
export type State = ReturnType<typeof reducers>