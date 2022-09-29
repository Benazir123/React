import React from "react";

class Logical extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const Cars = ["Ford", "Ferrari", "Lambhorghini", "Rolls Royce"]
        return(
            <div>
                <h1>Inline if with Logical operator</h1>
                  {Cars.length > 0 && <h4>I have a {Cars.length} cars</h4>} 
            </div>
        );
    }
}

export default Logical;