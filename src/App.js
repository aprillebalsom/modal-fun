import React, { useState } from 'react'; 
import Modal from './Modal';
import './App.css';

function App() {

  //setting the default state to be false therefore hiding the modal
  const [showModal, setShowModal] = useState(false);

  // function is called on click of button
  // updates the state to the be the opposite boolean value
  const toggleModal = () => {

    //update the state of the modal
    setShowModal(!showModal);
  }

  return (
    <div className="app">
      <button className='main-btn' onClick={toggleModal}>Click me</button>

      <Modal 
        shouldShow={showModal}
        closeModal={toggleModal}
      />
    </div>
  );
}

export default App;
