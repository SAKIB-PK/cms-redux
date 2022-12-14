import { ADD_HISTORY, SORT_BY_KEYWORD, SORT_FIRST_UPLOAD, SORT_LAST_UPLOAD } from "../actionType/actionType"

export const sort_f_upload=()=>{
    return {
        type:SORT_FIRST_UPLOAD,
    }
}
export const sort_l_upload=()=>{
    return {
        type:SORT_LAST_UPLOAD,
    }
}
export const sort_by_keyword=(data)=>{
    return {
        type:SORT_BY_KEYWORD,
        payload:data
    }
}
export const add_history=(id)=>{
    return {
        type:ADD_HISTORY,
        payload:id
    }
}
