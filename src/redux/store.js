import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import contentReducer from "./reducer/contentReducer"
const store =createStore(contentReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store