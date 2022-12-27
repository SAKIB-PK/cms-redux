import { remove_content } from "../../action/postAction"

const removeContent = (id)=>{
    return async(dispatch,getState)=>{
        const res = await fetch(`https://cms-redux.up.railway.app/posts/${id}`,{
            method: 'DELETE',
        })
        const data = await res.json()
        dispatch(remove_content(id))
    }
}
export default removeContent