import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ethers } from "ethers";

const startPayment = async ({ setError, setTxs, ether, addr, setLoading }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    setLoading(false)
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
    setLoading(false)
  }
};

function ModalBuy(props) {


  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  console.log(error)
  const [txs, setTxs] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    setLoading(true)
    await startPayment({
      setLoading,
      setError,
      setTxs,
      ether: props.element.price,
      addr: 'some_address'
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lerning something
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.element.title}</h4>
        <p>
          {props.element.descripcion}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
        {loading ? <Button disabled>Loading...</Button> : <Button onClick={handleSubmit}>Buy for ⧫{props.element.price}</Button>}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBuy