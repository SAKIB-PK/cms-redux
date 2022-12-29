import { ADD_CONTENT, ADD_HISTORY, DELETE_CONTENT, ERROR_CONTENT, GET_CONTENT, LOADING_CONTENT, UPDATE_CONTENT } from "../actionType/actionType";

const initialState = {
    loading:false,
    posts:[],
    error:false,
    history:[]
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
        case ADD_HISTORY:
            if(state.history.includes(action.payload)){
                return {
                    ...state,
                    history:[...state.history]
                }
            }
            return {
                ...state,
                history:[...state.history,action.payload]
            }
        case ADD_CONTENT:
            return {
                ...state,
                posts:[...state.posts,action.payload]
            }
            
        case DELETE_CONTENT:
            return {
                ...state,
                posts:state.posts.filter(post => post._id !== action.payload)
            }
            
        case UPDATE_CONTENT:
            return {
                ...state,
                posts:[...state.posts,action.payload]
            }
            
        default:
            return state
    }
}
export default contentReducer