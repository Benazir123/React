import React from "react";
import EnhancedComponent from "./Count";

class HOCcount extends React.Component{
    render(){
        const {show, handleClick} = this.props
        return (
            <button onClick={handleClick}>{show}</button>
        );
    }
}

export default EnhancedComponent(HOCcount);