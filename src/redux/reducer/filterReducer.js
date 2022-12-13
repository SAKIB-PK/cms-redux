import { SORT_FIRST_UPLOAD, SORT_LAST_UPLOAD } from "../actionType/actionType";

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
                content:{
                    ...state.content,
                    posts:action.payload.sort((a,b)=>a.date_time -b.date_time)
                },
                filter:{
                    sort_first_upload:true,
                    sort_last_upload:false
                }
            }
        case SORT_LAST_UPLOAD:
            return {
                ...state,
                content:{
                    ...state.content,
                    posts:action.payload.sort((a,b)=>b.date_time -a.date_time)
                },
                filter:{
                    sort_last_upload:true,
                    sort_first_upload:false
                }
            }
    
        default:
            return state
    }
}
export default filterReducer