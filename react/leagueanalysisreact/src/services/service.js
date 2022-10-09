import React, { useEffect, useState } from "react";

function Service(props){
    const [state,setState] = useState({apiResponse:""});
    function callApi(){
        fetch("http://localhost:4000/testAPI").then(res => res.text()).then(res => setState({apiResponse:res}))
    }
    var rendered = false;

    useEffect(() => {
        const abortController = new AbortController();
        callApi();
    },[]);
    return <p>{state.apiResponse}</p>;
}

export default Service;
