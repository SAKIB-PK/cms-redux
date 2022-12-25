import { edit_Content, error_content, loading_content } from "../../action/postAction"

const editContent = (id,product)=>{
    return async(dispatch,getState)=>{
        console.log(product)
        //when function call
        dispatch(loading_content())
        const res = await fetch(`http://localhost:5000/posts/${id}`,{
            method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
        })
        const post =await res.json().catch(()=>dispatch(error_content()))
        if(post.length){
            dispatch(edit_Content(post))
        }
    }
}
export default editContent