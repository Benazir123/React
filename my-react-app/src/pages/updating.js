import React from 'react';
import { ReactDOM } from 'react';

class Updating extends React.Component{
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

      changeColor = () => {
        this.setState({favouriteColor: "blue"});
      }

      shouldComponentUpdate(){
          return true
      }

      getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "Before the update, the favorite was " + prevState.favouriteColor;
      }

      componentDidUpdate(){
        document.getElementById("div2").innerHTML = "After the update, the favorite was " + this.state.favouriteColor;
        document.getElementById("mydiv").innerHTML = "The updated favourite is " + this.state.favouriteColor;

      }

    render(){
       return(
           <>

            <h3>1. getDerivedStateFromProps Method</h3>
            <p>My Favourite Color is {this.state.favouriteColor}<span> ---&gt; this method called right before rendering elements</span></p>
            <button type="button" onClick={this.changeColor}>Change color</button>
            <hr/>

            <h3>2..shouldComponentUpdate Method</h3>
            <p>My Favourite Color is {this.state.favouriteColor}<span> ---&gt; this method called right before its mounted</span></p>
            <button type="button" onClick={this.changeColor}>Change color</button>
            <hr/>

            <h3>3. Render Method</h3>
            <p>This is the content of the render method<span> ---&gt; this method called when component mounted</span></p>
            <hr/>

            <h3>4. getSnapShotbeforeUpdate Method</h3>
            <p>My Favourite Color is {this.state.favouriteColor}<span> ---&gt; this method called after a component is mounted</span></p>
            <div id="div1"></div>
            <div id="div2"></div>
            <hr/>

            <h3>5. ComponentDidUpdate Method</h3>
            <p>My Favourite Color is {this.state.favouriteColor}<span> ---&gt; this method called after a component is mounted</span></p>
            <div id="mydiv"></div>
            <hr/>

           </>
        );
    }
}

export default Updating;