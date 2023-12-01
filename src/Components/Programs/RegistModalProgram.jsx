import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function RegisterModal({ programDetails, onEventClick }) {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    const id = async () => { programDetails._id }
    const moduleId = programDetails.module[0].id
    
    const handleRegisterProgram = () => {
        // Handle registration logic here
        // You can perform any registration-related actions and then close the modal
        // For now, let's just close the modal
        onEventClick(id, moduleId);
        handleModalClose();
      }

    return (
        <>
            <button type="button" style={{backgroundColor:"#AB87FF"}} className="btn btn-primary" onClick={handleModalShow}>Daftar Program</button>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                <Modal.Title>Registration for {programDetails.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* Add any registration form or information here */}
                <p>Registration form or details go here...</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleRegisterProgram}>
                    Register
                </Button>
                </Modal.Footer>
        </Modal>
        </>
        
  );
}

export default RegisterModal;
