import React, { useState } from "react";
import '../styles/home.css';
  
function Home (props){
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
    <form className="player-search" onSubmit={handleSubmit} >
        <input input="text" name='text' value={name} onChange={handleChange} placeholder="Search for Player"/>
        <button type="submit">Search</button>
    </form>
    )
}
  
export default Home;