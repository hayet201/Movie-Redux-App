const InputIRating = (state =0, action) => {
    if (action.type === "SET_INPUT_RATING") {
        return action.payload
    }
    else
        return state
}
export default InputIRating