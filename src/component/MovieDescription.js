import React, { Component } from 'react';
import { connect } from 'react-redux';
class MovieDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let item = { rating: this.props.rating, name: this.props.name, image: this.props.image, Description: this.props.desc }
        console.log(item.Description)
        return ( <div>
            
            {this.props.movie.map(el => {
                 
                    return (
                        <div className="Description-movie" key={el.id}>
                            <p>TITLE: {el.name}</p>
                            <span className="star">{"".padEnd(el.rating, "★")}</span>
                           
                            <div className="description"><h1>Description:</h1><br />{el.Description}
                            </div>
                           
                        </div>
                    )
                })}


                
                <div className="footer"><p>copyright</p></div>
                 </div> );
    }
}
const mapStateToProps =(state)=>{
    return{
        movie:state.output,
        desc: state.description
    }

}
export default connect(mapStateToProps ) (MovieDescription);