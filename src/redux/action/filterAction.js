import { SORT_BY_KEYWORD, SORT_FIRST_UPLOAD, SORT_LAST_UPLOAD } from "../actionType/actionType"

export const sort_f_upload=(data)=>{
    return {
        type:SORT_FIRST_UPLOAD,
        payload:data
    }
}
export const sort_l_upload=(data)=>{
    return {
        type:SORT_LAST_UPLOAD,
        payload:data
    }
}
export const sort_by_keyword=(data)=>{
    return {
        type:SORT_BY_KEYWORD,
        payload:data
    }
}