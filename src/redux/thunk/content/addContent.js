import Swal from "sweetalert2"
import { add_content } from "../../action/postAction"

const addContent = (content)=>{
    return async(dispatch,getState)=>{
        const res = await fetch("https://cms-redux.up.railway.app/posts",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content),
        })
        const data = await res.json()
        if(data.insertedId){
            dispatch(add_content(content))
            Swal.fire({
                title:"Success",
                text:"Your post Submitted!",
                icon:"success"
            })
        }else{
            Swal.fire({
                title:"opps!",
                text:"Post Submit failed!",
                icon:"error"
            })
        }
       
        
    }
}
export default addContent