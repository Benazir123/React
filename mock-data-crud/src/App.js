import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todo from './Todo';
import Employee from './employee';

class App extends React.Component{
     constructor(props){
       super(props)
       this.state = {
         show: false
       }
     }

     render(){
       return(
         <>
          <div className="App"> 
            {/* <Todo/> */}
            <Employee />
          </div>
         </>  
       );
     }
}

export default  App;