import React, {useEffect, useState} from "react";
import './App.css';

import {Moviebox} from "./service/Moviebox";
import {API_URL} from "./service/urls";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res)=>res.json())
            .then(data=>{
                console.log(data);
                setMovies(data.results);
            })
    }, [])

    return (
        <div className="container">
            <div className="grid">
            {movies.map((movieReq) => <Moviebox key={movieReq.id} {...movieReq}/>)}
            </div>
        </div>
    );
}

export default App;
