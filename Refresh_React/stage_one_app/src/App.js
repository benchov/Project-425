import React, {useState, useEffect} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./app.css";



const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [robots, setRobots] = useState([])
    const [filteredRobots, setFilteredRobots] = useState(robots)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => setRobots(users));
    })

    const handleFilter = () => {
        searchValue.length > 1 ? setFilteredRobots(robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchValue.toLowerCase())
        })) : setFilteredRobots(robots)
    }
    const handleSearch = (e) => {
        setSearchValue(e)
        handleFilter()
    }

    return (
        <div className="tc shadow-5">
            <h1 className="tc ">RobotFriends</h1>
            <SearchBox searchOnChange={(e) => handleSearch(e.target.value)} />
            <CardList robots={filteredRobots}/>
        </div>
    )
}

export default App;