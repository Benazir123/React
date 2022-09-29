import React from "react";
import { ReactDOM } from "react";

function Car(props){
    //    props = {
    //        brand: "Ford"
    //    }
    return(
        <>
            <h3>Pass Data</h3>
            <p>I have a {props.brand}</p>
            <p>I have a {props.model}</p>
            <p>My car is {props.color} color</p>
            <p>I bought my car on {props.car.year}</p>
        </>   
    )
}

function Garage(){
    const carColor = "Black";
    const carInfo = { type: 'FourWheeler', year:2000 }
    return(
        <>
            <h3>Functional Components</h3>
            <Car brand="Ford" model="A1" color={carColor} car={carInfo} />
        </> 
    )
    
}

export default Garage;
