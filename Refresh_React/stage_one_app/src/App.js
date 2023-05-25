import React, {useState} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";



const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredRobots, setFilteredRobots] = useState(robots)

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
        <div>
            <h1>RobotFriends</h1>
            <SearchBox searchOnChange={(e) => handleSearch(e.target.value)} />
            <CardList robots={filteredRobots}/>
        </div>
    )
}

export default App;