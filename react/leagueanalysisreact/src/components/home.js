import React, { useState } from "react";
import Service from "../services/service";

import '../styles/home.css';
  
function Home (props){
    const [name, setName] = useState("");

    var testing = <p></p>;

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
    <div>
        <form className="player-search" onSubmit={handleSubmit} >
            <input input="text" name='text' value={name} onChange={handleChange} placeholder="Search for Player"/>
            <button type="submit">Search</button>
        </form>
        <Service></Service>
    </div>

    )
}
  
export default Home;