import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Singin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    let navigate = useNavigate();
const [LoggedIn, setLoggedIn] = useState(false)

    function HandleSubmit(e) {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setLoggedIn(true)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    useEffect(() => {
        if (LoggedIn){
           return navigate("/Home");
        }
     },[LoggedIn]);

    return (
        <div style={{ marginTop: '150px' }}>
            <Container>
                

                <Button onClick={HandleSubmit} variant="primary" size="lg">
  Log in with Google
  </Button>
            </Container></div>
    )
}

export default Singin