import React, {Component} from 'react';

class Hello extends Component
{
    render(){
        return (
            <div>
             <h1>Hello React</h1> 
        <p>{this.props.greeting}</p>
            </div>
             
             )
    }
}
// function Hello(){
//     return <h1>Hello Guys</h1>
// }
export default Hello;