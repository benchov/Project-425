import React from "react";

const SearchBox = (props) => {

    return (
        <div className="pa3">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type={"search"}
                placeholder={"search robots"}
                onChange={props.searchOnChange}
            />
        </div>
    )
}

export default SearchBox;