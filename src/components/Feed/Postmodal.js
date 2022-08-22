 import React from 'react'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Postmodal.css'
import Firebase from '../../firebase'




function MyVerticallyCenteredModal(props) {
  var del = {
    tweetId : props.tweetId
  }

  function deleteTweetHelper(){
    Firebase.db.collection('posts').doc(this.tweetId).delete();
  }

  var delTweet = deleteTweetHelper.bind(del)


  
  return (
    
    <Modal id='modal'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div onClick={delTweet}
          className='modal-options'
          id='delete-tweet'>
          Delete Tweet
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Postmodal({tweetId}) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <MoreHorizIcon onClick={() => setModalShow(true)}>
      </MoreHorizIcon>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        tweetId={tweetId}
      /> 
    </>
  );
}

export default Postmodal;