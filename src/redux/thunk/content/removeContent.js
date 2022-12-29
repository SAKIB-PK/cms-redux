import Swal from "sweetalert2"
import { remove_content } from "../../action/postAction"

const removeContent = (id)=>{
    return async(dispatch,getState)=>{
        const res = await fetch(`https://cms-redux.up.railway.app/posts/${id}`,{
            method: 'DELETE',
        })
        const data = await res.json()
        if(data.acknowledged){
            Swal.fire({
                title:"Success",
                text:"Post Delete Successfully!",
                icon:"success"
            })
            dispatch(remove_content(id))
        }else{
            Swal.fire({
                title:"Oops",
                text:"Post Delete Failed!",
                icon:"error"
            })
        }
    }
}
export default removeContent