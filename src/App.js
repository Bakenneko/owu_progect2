import React, {useEffect, useState} from "react";
import './App.css';

import {Moviebox} from "./service/Moviebox";
import {API_URL} from "./service/urls";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";



function App() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results);
            })
    }, [])

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=49bb727c6d14e22517b2c64de2f7b553&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results)
        } catch (e) {
            console.log(e);
        }
    }

    const changeHandler=(e)=>{
        setQuery(e.target.value);
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/home">Головна</Navbar.Brand>
                    <Navbar.Brand href="/home">Популярне кіно</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-3"
                            style={{maxHeight: `100px`}}
                            navbarScroll></Nav>

                        <Form className="d-flex" onSubmit={searchMovie}>
                            <FormControl
                                type="search"
                                placeholder="Пошук кіно"
                                className="me-2"
                                aria-label="search"
                                name=""
                                value={query} onChange={changeHandler}></FormControl>
                            <Button variant="secondary" type="submit">Пошук</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                {movies.length > 0 ?(


            <div className="container">
                <div className="grid">
                    {movies.map((movieReq) =>
                        <Moviebox key={movieReq.id} {...movieReq}/>)}
                </div>
            </div>
                ):(
                    <h2>Вибачте! Кіно з такою назвою відсутнє</h2>
                )}
            </div>
        </>
    );
}

export default App;
