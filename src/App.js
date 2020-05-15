import React, {Component} from 'react' 
import CardList from './CardList'
import {robots} from './Robots'
import SearchBox from './SearchBox'

const state = {
    robots: robots, 
    searchfield : ''
}
// const App = () => {
//     // Props are things that come out of state.
//     // Props cannot be changed in your app
//     //State describes your application. 
//     return (
//         <div className='tc'>
//             <h1>Robo Friends</h1>
//             <SearchBox /> 
//             <CardList robots = {robots}/>

//         </div>
        
//     )
   
    
// }
class App extends Component{
    constructor(){
        super();
        this.state = state;
    }

 onSearchChange = (event)=>{
        this.setState({searchfield:event.target.value})
   
        
    }

    render(){
        const filteredRobots = this.state.robots.filter(
            (robot) => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        )
        return (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange} /> 
                <CardList robots = {filteredRobots}/>
    
            </div>
            
        )
    }
 
}
export default App;