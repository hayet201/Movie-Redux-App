
import React, { Component } from 'react'
import { connect } from 'react-redux';
// import {Link } from "react-router-dom";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="header">
            {/* <Link to="/Movie" > TO MOVIELIST </Link> */}
            <input type="text" onChange={(e) => { this.props.SearchName(e.target.value) }} />
            <span onClick={() => { this.props.SearchStar(1) }}>★</span>
            <span onClick={() => { this.props.SearchStar(2) }}>★</span>
            <span onClick={() => { this.props.SearchStar(3) }}>★</span>
            <span onClick={() => { this.props.SearchStar(4) }}>★</span>
            <span onClick={() => { this.props.SearchStar(5) }}>★</span>

        </div>);
    }
}
const mapStateToProps = (state) => {
    return {

        SearchName: state.SearchName,
        SearchStar: state.SearchStar


    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SearchName: (x) => {
            dispatch({
                type: "SEARCH_NAME",
                payload: x
            })
        },
        SearchStar: (x) => {
            dispatch({
                type: "SEARCH_STAR",
                payload: x
            })
        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
