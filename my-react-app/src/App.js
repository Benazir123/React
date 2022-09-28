import React from 'react';
import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';

class App extends React.Component{
   render(){
     return(
       <>
        <Header />
        <hr/>
        <Main />
       </> 
     );
   }
}

export default App;
