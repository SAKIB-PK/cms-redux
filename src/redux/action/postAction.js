import { ADD_CONTENT, DELETE_CONTENT, ERROR_CONTENT, GET_CONTENT, LOADING_CONTENT } from "../actionType/actionType"

export const loading_content =()=>{
    return {
        type:LOADING_CONTENT,
    }
}
export const get_content =(data)=>{
    return {
        type:GET_CONTENT,
        payload:data
    }
}
export const error_content =()=>{
    return {
        type:ERROR_CONTENT,
    }
}
export const add_content =(data)=>{
    return {
        type:ADD_CONTENT,
        payload:data
    }
}
export const remove_content =(data)=>{
    return {
        type:DELETE_CONTENT,
        payload:data
    }
}