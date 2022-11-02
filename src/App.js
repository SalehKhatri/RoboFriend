import React,{Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";





class App extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield:'',
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield:event.target.value});
        console.log(event.target.value);
       
        
    }

    render(){
        const filteredrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return(
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold my-3 underline underline-offset-4 ">RoboFriends</h1>
                <SearchBox seachchange={this.onSearchChange} />
                <CardList robots={filteredrobots} />
            </div>
        );
    }
}
    


export default App;