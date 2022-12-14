import { add_content } from "../../action/postAction"

const addContent = (content)=>{
    return async(dispatch,getState)=>{
        const res = await fetch("http://localhost:5000/posts",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content),
        })
        const data = await res.json()
        dispatch(add_content(content))
    }
}
export default addContent