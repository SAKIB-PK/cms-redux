import { combineReducers } from "redux"
import contentReducer from "./contentReducer"
import filterReducer from "./filterReducer"

const rootReducer =combineReducers({
    filter:filterReducer,
    content:contentReducer
})
export default rootReducer