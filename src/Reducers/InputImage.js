
const InputImage =(state="",action)=>{
    if (action.type === "SET_INPUT_IMAGE")
    {
        return action.payload
    }
    else
    return state
}
export default InputImage