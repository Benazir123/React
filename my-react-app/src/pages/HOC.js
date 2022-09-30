import React from "react";
import EnhancedComponent from "./Name";

class HOC extends React.Component{
    render(){
        return <h3>{this.props.name}</h3>
    }
}

export default EnhancedComponent(HOC);