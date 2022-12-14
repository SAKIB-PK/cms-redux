import { error_content, get_content, loading_content } from "../../action/postAction"

const getContent = ()=>{
    return async(dispatch,getState)=>{
        //when function call
        dispatch(loading_content())
        const res = await fetch("https://cms-redux.up.railway.app/posts")
        const post =await res.json().catch(()=>dispatch(error_content()))
        if(post.length){
            dispatch(get_content(post))
        }
    }
}
export default getContent