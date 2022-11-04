import React,{Component} from "react";
import CardList from "../Components/CardList";
import { robots } from "../Components/robots";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll"




class App extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield:'',
        }
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response=>{
            return Response.json();
        })
        .then(users=>{
            this.setState({robots:robots})
            console.log("json");
        });
        
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
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold my-3 underline underline-offset-4 ">RoboFriends</h1>
                <SearchBox seachchange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredrobots} />
                </Scroll>
            </div>
        );
    }
}
    


export default App;