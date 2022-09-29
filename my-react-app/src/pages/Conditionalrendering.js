import React from "react";

class UserGreeting extends  React.Component{
      render(){
          return(
              <h3>Welcome Back</h3>
          );
      }
}

class GuestGreeting extends  React.Component{
    render(){
        return(
            <h3>Please Sign Up</h3>
        );
    }
}

class LoginButton extends React.Component{
      constructor(props){
         super(props)
      }
    render(){
        return(
            <>
             <h4>Using Button(Login)</h4>
             <button type="button" onClick={this.props.onClick}>Login</button>
            </>
        );
    }
}

class LogoutButton extends React.Component{
       constructor(props){
          super(props)
       }
    render(){
        return(
            <>
             <h4>Using Button(Logout)</h4>
             <button type="button" onClick={this.props.onClick}>Logout</button>
            </>
        );
    }
}

class Greeting extends React.Component{

    constructor(props){
        super(props);
          props = {
              isLoggedin: true
          }
    }
    render(){
        const isLoggedin = this.props.isLoggedin
         let myGreeting;
          if(isLoggedin){
             myGreeting = <UserGreeting />
          }
          else{
            myGreeting = <GuestGreeting/>
          }
        return(
             <div>
                 <h1>Conditional Rendering Using Class Component</h1>
                 <h3>{myGreeting}</h3>
             </div>
        );
    }
     
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedin: false}
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }
     
    handleLoginClick(){
        this.setState({isLoggedin: true})
    }
      
    handleLogoutClick(){
        this.setState({isLoggedin: false})
    }

    render(){
        const isLoggedin = this.state.isLoggedin
          let myButton;
          if(isLoggedin){
              myButton = <LogoutButton onClick={this.handleLogoutClick}/>
          }else{
              myButton = <LoginButton onClick={this.handleLoginClick}/>
          }
        return(
            <>
             <Greeting isLoggedin={isLoggedin}/>
             {myButton}
            </>  
        );
    }
}

export default LoginControl;
