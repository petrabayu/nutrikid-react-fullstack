import DoctorPofile from "./images/doctor-profile.jpg";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { FaPhone, FaMessage } from "react-icons/fa6";
import OfflineStatus from "./OfflineStatus";
import OnlineStatus from "./OnlineStatus";
import PaymentDetailCard from "./PaymentDetailCard";

function DoctorCard({ doctor }) {
  const { username, price, spesialist, activeStatus } = doctor;

  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [selectedService, setSelectedService] = useState("");

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

  // const handlePaymentSuccess = () => {
  //   history("/payment");
  // };

  return (
    <>
      <div className="card m-1 my-2 text-center" style={{ maxWidth: "22rem" }}>
        <div>
          <img
            src={DoctorPofile}
            className="card-img-top rounded-circle mt-2 mx-auto"
            alt="Doctor's Profile"
            style={{ width: "9rem" }}
          />
        </div>
        <div className="card-body ">
          <h6 className="card-title fw-bold">{username}</h6>
          <p className="card-subtitle text-body-secondary small mb-2 ">
            {spesialist}
          </p>

          {/* staus online offline */}
          {activeStatus ? <OnlineStatus /> : <OfflineStatus />}
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
              disabled={!activeStatus}
              onClick={handleChatClick}
            >
              <FaMessage style={{ fontSize: "1.5rem", marginRight: "12px" }} />
              Chat
            </button>
            <button
              className="btn btn-secondary w-50 ms-1"
              disabled={!activeStatus}
              onClick={handleCallClick}
            >
              <FaPhone style={{ fontSize: "1.5rem", marginRight: "12px" }} />
              Call
            </button>
          </div>

          {showPaymentDetails && (
            <PaymentDetailCard
              doctorName={username}
              service={selectedService}
              price={selectedService === "Chat" ? price.chat : price.call}
              onClose={handleClosePaymentDetails}
              // onPaymentSuccess={handlePaymentSuccess}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default DoctorCard;
