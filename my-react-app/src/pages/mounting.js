import React from 'react';
import { ReactDOM } from 'react';

class Mounting extends React.Component{
    constructor(props){
       super(props);
       this.state = { favouriteColor: "red" }
    }

    // static getDerivedStateFromProps(props, state){
    //     return {favouriteColor: "yellow"}
    // }

    componentDidMount() {
        setTimeout(() => {
          this.setState({favouriteColor: "green"})
        }, 1000)
      }

    render(){
       return(
           <>
            <h3>1.Constructor Method</h3>
            <p>My Favourite Color is {this.state.favouriteColor}<span> ---&gt; this method called right before its mounted</span></p>
            <hr/>

            <h3>2. getDerivedStateFromProps Method</h3>
            <p>Now, My Favourite Color is {this.state.favouriteColor}<span> ---&gt; this method called right before rendering elements</span></p>
            <hr/>

            <h3>3. Render Method</h3>
            <p>This is the content of the render method<span> ---&gt; this method called when component mounted</span></p>
            <hr/>

            <h3>4. ComponentDidMount Method</h3>
            <p>My Favourite Color is {this.state.favouriteColor}<span> ---&gt; this method called after a component is mounted</span></p>
            <hr/>

           </>
        );
    }
}

export default Mounting;