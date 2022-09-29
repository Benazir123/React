import React from "react";
import { ReactDOM } from "react";

 class Stateandprops extends React.Component{
       constructor(props){
           super(props);
           this.state = {
               model:"A1",
               brand: "Lambhorgini",
               color: "matte-black"
           }
       }

       changeColor = () => {
           this.setState({color: "blue"})
       }
       render(){
           return(
                <div>
                    <h3>1. State Object</h3>
                    <p>My car is {this.state.brand} and it is {this.state.model} Model</p>
                    <p>My car is {this.state.color} color</p>

                    <div>
                        <h3>2. Change State Object</h3>
                        <p>My Car is {this.state.color}</p>
                        <button type="button" onClick={this.changeColor}>Change Color</button>
                    </div>
                </div>
           );
       }
 }

 export default Stateandprops;