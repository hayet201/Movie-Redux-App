const InputIName = (state = "", action) => {
    if (action.type === "SET_INPUT_NAME") {
        return action.payload 
    }
    else
        return state
}
export default InputIName