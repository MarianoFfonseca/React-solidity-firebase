import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import ModalBuy from '../MODALBUY/ModalBuy'
import app from '../../firebase';

function Curses() {
  const db = getFirestore(app);
  const storage = getStorage(app);
  const [allCurses, setAllCurses] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [element, setElement] = useState([]);
  const GetCurses = async () => {
    const querySnapshot = await getDocs(collection(db, "Curses"));
    querySnapshot.forEach((doc) => {
      console.log('h')
      getDownloadURL(ref(storage, doc.data().id))
        .then((url) => {
          var data = doc.data()
          data.imgUrl = url;
          setAllCurses(oldCurses => [...oldCurses, data]);
        })
        .catch((error) => {
        });

    });
  }
  useEffect(() => {
    GetCurses()
    
  }, [])
  return (
    <div style={{ marginTop: '50px', marginBottom: '50px' }}>
       <ModalBuy
        show={modalShow}
        onHide={() => setModalShow(false)}
        element={element}
      />
      <Row xs={1} md={4} className="g-4">
        {allCurses ? allCurses.map((element) =>  (

              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img card-img variant="top" src={element.imgUrl} />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>
                      {element.descripcion}
                    </Card.Text>
                    <Button onClick={()=>{setModalShow(true);setElement(element)}} variant="primary">⧫{element.price}</Button>
                  </Card.Body>
                </Card>

              </Col>
            )

        ) : 'Loading...'}
      </Row>
    </div>
  )
}

export default Curses