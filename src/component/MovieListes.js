import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
class MovieListes extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let item = { rating: this.props.rating, name: this.props.name, image: this.props.image, Description: this.props.desc}
        return (<div>       
           <div className="lists">
                {this.props.movie.filter(el => el.name.toUpperCase().includes(this.props.SearchName.toUpperCase())
                    && el.rating <= this.props.SearchStar).map(el => { console.log(el.name)        
                     return (      
                        <div className="movie" key={el.id}>
                            <img src={el.image} alt="im-movie" />
                            <p>{el.name}</p>
                            <span>{"".padEnd(el.rating, "★")}</span>
                            <div>
                                 <button type="button" className="btn btn-warning btn-description">
                                     <Link to="/Movie-Description" onClick={() => { this.props.Description(el.id) }}> Movie Description </Link>
                                 </button>
                                 </div>
                             <button className="btn btn-success btn-edit" onClick={()=>this.props.Edit(el.id)}>Edit</button>
                            <button className="btn btn-danger btn-delete" onClick={() => { this.props.Delete(el.id) }}>Remove</button>
                        </div>
                    )
                })}
                < div className="ajout" onClick={this.props.Display}>+</div>
                <div className="form">
                <div className={this.props.display ? 'display' : 'none'} >
                    <input placeholder="image" type="text"  onChange={(e) => {this.props.InputImage(e.target.value) }} />
                    <input type="text" placeholder="name" onChange={(e) => {this.props.InputName(e.target.value) }} />
                    <input type="number" placeholder="rating" onChange={(e) => {this.props.InputRating(e.target.value) }} />
                    <input type="text" placeholder="Description" onChange={(e) => { this.props.InputDescription(e.target.value) }} />

                    <button  className="btn btn-success btn-submit" onClick={() =>{this.props.Add(item) }}>Add</button>
                </div>
                </div>
            </div>
        </div>);
    }
}
const mapStateToProps = (state) => {
    return {
        movie: state.output,
        SearchName: state.SearchName,
        SearchStar: state.SearchStar,
        image:state.InputImage,
        name:state.InputName,
        rating:state.InputRating,
        display:state.Display,
        style: state.display,
        desc: state.description
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Description:(x)=>{
                dispatch({
                    type:"SET_DESCRIPTION",
                    payload:x
                    
                    
                })
        },
        Add: (item) => {
            dispatch({
                type: "ADD_MOVIE",
                payload: {
                    image:item.image,
                    name: item.name,
                    rating:item.rating,
                    Description: item.Description,
                    id: Math.random()
                }
            })
        },
        Edit: (x) => {
            dispatch({
                type: "EDIT_MOVIE",
                payload: {
                    image: prompt("Edit Movie URL"),
                    id: x,
                    name: prompt("Edit Movie Name"),
                    rating: prompt("Edit Movie Rating")
                }
              

            })
        },
        Delete: (x) => {
            dispatch({
                type: "DELETE_MOVIE",
                payload: x
            })
        },
        InputImage:(x)=>{
            dispatch({
                type:"SET_INPUT_IMAGE",
                payload:x
            })
        },
        InputDescription: (x) => {
            dispatch({
                type: "SET_DESCRIP",
                payload: x
            })
        },
        InputName: (y) => {
            dispatch({
                type: "SET_INPUT_NAME",
                payload: y
            })
        },
        InputRating: (z) => {
            dispatch({
                type: "SET_INPUT_RATING",
                payload: z
            })
        },
        Display: ()=>{
            dispatch({
                type:"SET_STYLE"
            })
        },
        DisplayReducer: () => {
            dispatch({
                type: "SET_DISPLAY"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieListes);
