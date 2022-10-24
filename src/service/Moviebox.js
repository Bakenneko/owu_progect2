import React, {useState} from 'react'
import {Modal,Button} from "react-bootstrap";
import {API_IMG} from "./urls";



const Moviebox = ({title, poster_path, vote_average, release_date, overview}) => {

    const [show,setShow] = useState(false)
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG + poster_path}/>
                <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={handleShow}>Детальніше</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Опис фільму</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" style={{width:'14rem'}} src={API_IMG + poster_path}/>
                            <h3>{title}</h3>
                            <h4>Оцінка: {vote_average}</h4>
                            <h5>Дата релізу: {release_date}</h5>
                            <br></br>
                            <h6>Огляд</h6>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button varient="secondary" onClick={handleClose}>Закрити</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export  {Moviebox} ;
