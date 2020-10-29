import React from 'react';

const Modal = (props) => {
    return(
        // if the modal state is updated to true
        // display the modal
        props.shouldShow === true 
        ?   <div className= 'modal'>
                <div className='modal-content'>
                    <h1>Hello World!</h1>
                    <p>I built this using react hooks!</p>
                    <div className='close-modal'>
                    <button onClick={props.closeModal}>x</button>
                    </div>
                </div>   
            </div>
            // if the modal state is updated to false
            // hide it
            : <div className='modal' style={{ display: 'none' }}></div>
    )
}

export default Modal;
