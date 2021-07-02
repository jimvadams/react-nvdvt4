import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div onClick={props.onCloseCart} className={classes.backdrop}></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalEllement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal( <Backdrop onCloseCart={props.onCloseCart} /> , portalEllement  ) }
      {ReactDOM.createPortal( <ModalOverlay> {props.children}</ModalOverlay> , portalEllement  ) }
    </Fragment>
  )
} 

export default Modal;