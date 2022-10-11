
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

  
function Leaderboard () {

    var rendered = false;
    
    var texto = "";

    const callRestApi = async() =>{
        const response = await fetch("http://localhost:4000/testAPI/leaderboard");
        const jsonResponse = await response.json();
        var sortear = jsonResponse['entries'];
        sortear.sort(function(a,b){
            return b['leaguePoints'] - a['leaguePoints']; 
        })
        return sortear;
    }

    function CallApi(){

        const [board,updateBoard] = useState([]);

        useEffect(() => {
            callRestApi().then(result => {
                console.log(result);
                updateBoard(result)
            });

        },[]);
        return (
        <div>
            <ul>
                {board.map((data)=>
                <li key={data.summonerId}>
                    <Link to={`/${data.summonerId}`}>{data.summonerName} |  {data.leaguePoints} lp</Link>

                </li>
                )}
            </ul>
        </div>);
    }

    return(
        <div>
            <CallApi/>
        </div>
        
    )
}
export default Leaderboard;