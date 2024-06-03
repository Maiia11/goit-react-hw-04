
import Modal from 'react-modal';


Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, url }) => {

  return (
     <Modal
                
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={onClose}
            shouldCloseOnEsc={true}
      >
          <img  src={url} alt='photo' />   
      </Modal>
      
  )
}


export default ImageModal