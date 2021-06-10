import React from "react";
import "./style.css";

const Search = (props) => {
    // console.log(props)
    return (

        <form className="form-group mb-3"> 
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Employee First or Last Name Here" 
                    id="search-name"
                />
        </form>
        
    );
    
}

export default Search;