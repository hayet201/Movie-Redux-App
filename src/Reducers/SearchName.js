
const SearchName = (state = "", action) => {
    if (action.type === "SEARCH_NAME") {
        return action.payload
    }
    else
        return state
}
export default SearchName