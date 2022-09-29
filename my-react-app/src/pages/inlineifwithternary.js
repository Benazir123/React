import React from "react";

class Warning extends React.Component{
     constructor(props){
         super(props);
     }
     render(){
         if(!this.props.warn){
             return null
         }
         return(
             <div className="warning">Warning !!!</div>
         );
     }
}

class Ternary extends React.Component{
   constructor(props){
     super(props);
     this.state = {shoWarning: true}
     this.handleToggleClick = this.handleToggleClick.bind(this)
   }

   handleToggleClick(){
       this.setState(state => ({
           shoWarning: !state.shoWarning
       }))
   }

   render(){    
       return(
           <div>
               <Warning warn={this.state.shoWarning}/>
               <button type="button" onClick={this.handleToggleClick}>{this.state.shoWarning ? 'Hide' : 'Show'}</button>
           </div>
       );
   }

}

export default Ternary;