import Modal from "react-modal";
import { useState } from "react";
export default function Functions(props) {
  const [first, setFirst] = useState(false);
  const [counter, setCounter] = useState(0);
  const aaa=(event)=>{
    console.log(event.target.value);
  }
  return (
    <div className="div">
      <h2>{props.jill}</h2>
      <button className="btn" onClick={() => setFirst(true)}>Open modal</button>
      <button className="btn" onClick={() => setFirst(true)}>1</button>
      <button className="btn" onClick={() => setFirst(true)}>2</button>
      <button className="btn" onClick={() => setFirst(true)}>3</button>
      <button className="btn" onClick={() => setFirst(true)}>4</button>
      <button className="btn" onClick={() => setFirst(true)}>5</button>
      <Modal isOpen={first} className="modal" onRequestClose={() => setFirst(false)}
      ><h1> Hello, I´m a modal</h1>
        <input onChange={aaa}></input>
        <h1>{counter}</h1>
        <div>
          <button className="btnx" onClick={() => setFirst(false)}>X</button>
          </div>
        <button className="btn" onClick={() => setCounter(counter + 1)}>Nº ORDERS</button>
        <button  className="btn" onClick={() => setCounter(0)}>RESET</button>
      </Modal>
    </div>
  );
}
