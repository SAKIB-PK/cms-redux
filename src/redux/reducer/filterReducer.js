import { SORT_BY_KEYWORD, SORT_FIRST_UPLOAD, SORT_LAST_UPLOAD } from "../actionType/actionType";

const initialState = {
    sort_first_upload:false,
    sort_last_upload:false,
    keyword:[]
}
const filterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SORT_FIRST_UPLOAD:
            return {
                ...state,
                sort_first_upload:true,
                sort_last_upload:false
            }
        case SORT_LAST_UPLOAD:
            return {
                ...state,
                sort_last_upload:true,
                sort_first_upload:false
            }
        case SORT_BY_KEYWORD:
            // if select tag is already inside in keyword array then leave otherwise add this tag
            if(state.keyword.includes(action.payload)){
                return {
                    ...state,
                    sort_last_upload:false,
                    sort_first_upload:false,
                    keyword:[...state.keyword]
                }    
            }
            return {
                ...state,
                sort_last_upload:false,
                sort_first_upload:false,
                keyword:[...state.keyword,action.payload]
            }
    
        default:
            return state
    } 
}
export default filterReducer