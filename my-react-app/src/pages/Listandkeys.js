import React from "react";

class  Car extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
              <li>I have a {this.props.brand} car</li>
            </>  
        );
    }
}

class ListandKeys extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const cars =[
            {id: 1, brand:'Maruti'},
            {id: 2, brand:'Swift'},
            {id: 3, brand:'Audi'},
            {id: 4, brand:'BMW'}
        ];
        return(
            <>
            <ul>
              {cars.map(car => <Car key={car.id} brand={car.brand}/>)}
              <p>key is used to avoid the warning messege and if we wanted to update add or remove item ,only that item will re-rendered instead of entire list.</p>
            </ul>
            </>    
        );
    }
   
}

export default ListandKeys;