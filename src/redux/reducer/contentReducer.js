import { ERROR_CONTENT, GET_CONTENT, LOADING_CONTENT } from "../actionType/actionType";

const initialState = {
    loading:false,
    posts:[],
    error:false
}
const contentReducer=(state = initialState,action)=>{
    switch (action.type) {
        case LOADING_CONTENT:
            return {
                ...state,
                loading:true
            }
    
        case GET_CONTENT:
            return {
                ...state,
                loading:false,
                posts:action.payload
            }
            
        case ERROR_CONTENT:
            return {
                ...state,
                error:true,
            }
            
        default:
            return state
    }
}
export default contentReducer