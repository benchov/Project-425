import React, {useState, useEffect} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./app.css";



const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [robots, setRobots] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => setRobots(users));
    })

    const filteredRobots = (robots.filter((robot) => {
        const name_split = robot.name.split(' ')
        return (
            name_split[0].slice(0,3).toLowerCase().startsWith(searchValue.toLowerCase()) 
            ||        
            name_split[1].slice(0,3).toLowerCase().startsWith(searchValue.toLowerCase()) 
            )
    }))


    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="tc shadow-5">
            <h1 className="tc ">RobotFriends</h1>
            <SearchBox searchOnChange={handleSearch} />
            <CardList robots={filteredRobots}/>
        </div>
    )
}

export default App;