import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ProgramEventPayDetail from "./ProgramEventPayDetail";

function EventModalPayment({event, selectedService}) {
  const navigate = useNavigate();
  const handleProgramDetail = (programId) => {
    // Navigate to the event detail page with the specified event ID
    navigate(`/program/${programId}`);
  };

  const paymentLink = `/${selectedService}/${event._id}/payment`
return(
  <>

      <Modal.Header className="bg-info" closeButton>
          <Modal.Title className="fw-bold">Detail Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgramEventPayDetail
            programName={event.title}
            image={event.image}
            service={selectedService}
            price={event.price}
          />
        </Modal.Body>
        <Modal.Footer>
          <Link to={paymentLink}>
            <Button variant="primary">
              Lanjutkan Pembayaran
            </Button>
          </Link>
        </Modal.Footer>
  </>
)
}


export default EventModalPayment