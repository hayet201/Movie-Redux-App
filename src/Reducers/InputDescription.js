
const InputDescription =(state="", action)=>{
    if (action.type ==="SET_DESCRIP")
    {
        return action.payload
    }
    else
    return state
}
export default InputDescription


