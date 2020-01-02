import { createStore, combineReducers } from "redux";
import Listes from './Reducers/Listes'
import SearchName from './Reducers/SearchName.js'
import SearchStar from './Reducers/SearchStar.js'
import InputImage from './Reducers/InputImage'
import InputName from './Reducers/InputName'
import InputRating from './Reducers/InputRating'
import Display from './Reducers/Display'
import DisplayReducer from './Reducers/DisplayReducer'
import InputDescription from "./Reducers/InputDescription";



const store = createStore(combineReducers({

    output: Listes,
    SearchName: SearchName,
    SearchStar: SearchStar,
    InputImage:InputImage,
    InputName: InputName,
    InputRating: InputRating,
    Display: Display,
    display:DisplayReducer,
     description: InputDescription


}))
export default store;