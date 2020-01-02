
const DisplayReducer = (state = false, action) => {
    if (action.type === "SET_DISPLAY") {
        return state = !state
    }
    else
        return state
}
export default DisplayReducer