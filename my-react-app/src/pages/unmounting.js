import React from "react";
import { ReactDOM } from 'react';

class UnMounting extends React.Component{
     constructor(props){
         super(props);
         this.state = {show: true}
     }

     delHeader = () => {
         this.setState({show: false})
     }
      
     render(){
         let myHeader;
         if(this.state.show){
             myHeader = <Child />
         }
         return(
             <div>
               {myHeader}
               <button type="button" onClick={this.delHeader}>Delete Header</button>
             </div>
         );
     }
}

export default UnMounting;

class Child extends React.Component{

    componentWillUnmount(){
        alert("The component named Header is about to be unmounted.")
    }
    render(){
        return(
           <h4>Hello world!</h4>
        );
    }
}

