import { remove_content } from "../../action/postAction"

const removeContent = (id)=>{
    return async(dispatch,getState)=>{
        const res = await fetch(`http://localhost:5000/posts/${id}`,{
            method: 'DELETE',
        })
        const data = await res.json()
        dispatch(remove_content(id))
    }
}
export default removeContent