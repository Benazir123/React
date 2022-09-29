import React from 'react';
import { ReactDOM } from 'react';

class JSX extends React.Component{
      
    render(){
        const withJSX = <h4>This element is used With JSX</h4>
        const withoutJSx = React.createElement(
            'h4',
            {},
            'This element is used Without JSX'
        )
        const htmlElement = (
            <ul>
                <li>Apple</li>
                <li>Orange</li>
                <li>Bananna</li>
            </ul>
        )

        const x = 5;
        let text = 'Hello';
        if(x < 10){
            text = 'Greeting';
        }
        const ifElement = <p style={{color: 'red'}}>{text}</p>
        return(
           <div>
               <h3>1. With JSX</h3>
               {withJSX}<br/>

               <h3>2. Without JSX</h3>
               {withoutJSx}<br/>
                
               <h3>3. Expression in Curly braces</h3>
               <p>{ 5 + 5 } is greater than { 5 + 2 }</p><br/>

               <h3>4. Inserting a large block of html</h3>
               <p>{htmlElement}</p><br/>

               <h3>5. One Top level element</h3>
               <p>If we want to use two paragaraph,should add the parent element like 'div'</p>
               <div>
                   <p style={{color: 'green'}}>This is the first paragaraph</p>
                   <p style={{color: 'green'}}>This is the second paragaraph</p>
               </div>
               
                <p>Otherwise, we should use 'fragment' which means empty html tag</p>
                <>
                    <p style={{color: 'green'}}>This is the first fragment paragaraph</p>
                    <p style={{color: 'green'}}>This is the second fragment paragaraph</p>
                </><br/>

                <h3>6. Condition if Statement</h3>
                <p>This method of if statement is outside the jsx code</p>
                {ifElement}

                <p>If we want to use if statement inide the jsx, then one option is there which is "Ternary"</p>
                <p style={{color: 'red'}}>{(x) < 10 ? 'Hello' : 'Greeting'}</p>

           </div> 
        );
    }
    
}

export default JSX;