// import DoctorPofile from "./images/doctor-profile.jpg";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import { FaPhone, FaMessage } from "react-icons/fa6";
import OfflineStatus from "./OfflineStatus";
import OnlineStatus from "./OnlineStatus";
import PaymentDetailCard from "./PaymentDetailCard";

function DoctorCard({ doctor }) {
  const { firstname, lastname, price, specialist, isOnline, image } = doctor;

  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const fullname = firstname + " " + lastname;

  // const history = useNavigate();

  const handleChatClick = () => {
    setShowPaymentDetails(true);
    setSelectedService("Chat");
  };

  const handleCallClick = () => {
    setShowPaymentDetails(true);
    setSelectedService("Call");
  };

  const handleClosePaymentDetails = () => {
    setShowPaymentDetails(false);
    setSelectedService("");
  };

  return (
    <>
      <div className="card m-1 my-2 text-center" style={{ maxWidth: "22rem" }}>
        <div>
          <img
            src={image}
            className="card-img-top rounded-circle mt-2 mx-auto"
            alt="Doctor's Profile"
            style={{ width: "9rem" }}
          />
        </div>
        <div className="card-body ">
          <h6 className="card-title fw-bold">{fullname}</h6>
          <p className="card-subtitle text-body-secondary small mb-2 ">
            {specialist}
          </p>

          {/* staus online offline */}
          {isOnline ? <OnlineStatus /> : <OfflineStatus />}
          {/* 
          <p className="card-text bg-warning rounded bg-opacity-50 m-0">
            <small className="text-body-secondary">
              Tersedia Kembali
              <span className="fw-bold"> Sn, 13 Nov 08:00 - 11:00</span>
            </small>
          </p> */}
          <div className="m-2">
            <p className="card-text fs-6 fw-bold m-0">
              Chat : <span className="">Rp.{price.chat}</span> | Call :
              <span className="">Rp.{price.call}</span>
            </p>
            {/* <p className="card-text text-decoration-line-through m-0">
              Chat : Rp.50.000 | Call : Rp.150.000
            </p> */}
          </div>
          {/* button */}
          <div className="d-flex">
            <button
              className="btn btn-primary w-50 me-1"
              disabled={!isOnline}
              onClick={handleChatClick}
            >
              <FaMessage style={{ fontSize: "1.5rem", marginRight: "12px" }} />
              Chat
            </button>
            <button
              className="btn btn-secondary w-50 ms-1"
              disabled={!isOnline}
              onClick={handleCallClick}
            >
              <FaPhone style={{ fontSize: "1.5rem", marginRight: "12px" }} />
              Call
            </button>
          </div>

          {/* {showPaymentDetails && (
            <PaymentDetailCard
              doctorName={firstname,lastname}
              service={selectedService}
              price={selectedService === "Chat" ? price.chat : price.call}
              onClose={handleClosePaymentDetails}
              // onPaymentSuccess={handlePaymentSuccess}
            />
          )} */}

          <Modal show={showPaymentDetails} onHide={handleClosePaymentDetails}>
            <Modal.Header className="bg-info" closeButton>
              <Modal.Title className="fw-bold">Detail Pembayaran</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PaymentDetailCard
                doctorName={fullname}
                image={image}
                specialist={specialist}
                service={selectedService}
                price={selectedService === "Chat" ? price.chat : price.call}
              />
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClosePaymentDetails}>
                Tutup
              </Button> */}
              <Button variant="primary" onClick={handleClosePaymentDetails}>
                Lanjutkan Pembayaran
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    price: PropTypes.shape({
      chat: PropTypes.number.isRequired,
      call: PropTypes.number.isRequired,
    }).isRequired,
    specialist: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
