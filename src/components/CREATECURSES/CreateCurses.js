import React, { useEffect, useState } from 'react'
import { Container, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap'
import { doc, setDoc } from "firebase/firestore";
import app from '../../firebase'
import { v4 as uuid } from 'uuid';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {Link} from 'react-router-dom'
function CreateCurses() {

    const db = getFirestore(app);
    const storage = getStorage(app);

    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState()
    const [isLoading, setLoading] = useState(false);
    const [ready, setReady] = useState(false)

    function addCurse() {
        setLoading(true)
        const unique_id = uuid();
        const storageRef = ref(storage, unique_id);
        const docData = {
            title: title,
            descripcion: descripcion,
            price: price,
            id: unique_id
        };
        setDoc(doc(db, "Curses", unique_id), docData).then(() => {
            uploadBytes(storageRef, file).then(() => {
                setReady(true)
                console.log('succes')
            });
        }
        ).catch((err) => console.log(err))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            //event
            if (isLoading === false) {
               
                addCurse()
            }
        }

        setValidated(true);

    };

    return (
        <div style={{ marginTop: '150px' }}>
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title of the curse</Form.Label>
                        <Form.Control required type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description of the curse</Form.Label>
                        <Form.Control required as="textarea" placeholder='Descripcion...' rows={3} onChange={(e) => setDescripcion(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Course video</Form.Label>
                        <Form.Control required type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </Form.Group>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Price of the curse</InputGroup.Text>
                        <InputGroup.Text>ETH</InputGroup.Text>
                        <FormControl required aria-label="Cost of the curse" onChange={(e) => setPrice(e.target.value)} />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
            {ready ?   <Link to={'/Home'}><Alert  variant={'success'}>
     Your curse was posted! {' '}
      <Alert.Link>Check it rigth now</Alert.Link> Thenk you for select us
      like.
    </Alert></Link> : <Button type="submit">  {isLoading ? 'Loading…' : 'Post Curse'}</Button> }
                    
                </Form>
            </Container>
        </div>
    )
}

export default CreateCurses