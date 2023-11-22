import DoctorPofile from "./images/doctor-profile.jpg";
import { FaPhone, FaCircle, FaMessage } from "react-icons/fa6";

function DoctorCard() {
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
          <h6 className="card-title fw-bold">
            Dr. Tegar Simanjuntak Sp.THT-KL
          </h6>
          <p className="card-subtitle text-body-secondary small mb-2 ">
            Dokter Umum
          </p>
          <p className="card-text m-0">
            <small className="text-body-secondary rounded-1 bg-dark-subtle p-2 position-absolute top-0 start-0 ">
              <FaCircle
                style={{
                  fontSize: "0.5rem",
                  marginRight: "3px",
                  marginBottom: "3px",
                  verticalAlign: "middle",
                }}
              />
              Offline
            </small>
          </p>
          {/* <p className="card-text text-white">
            <small className="text-white rounded bg-success p-2 position-absolute top-0 start-0 ">
              <FaCircle
                style={{  
                  fontSize: "0.5rem",
                  marginRight: "3px",
                  marginBottom: "3px",
                  verticalAlign: "middle",
                }}
              />
              Online
            </small>
          </p> */}

          <p className="card-text bg-warning rounded bg-opacity-50 m-0">
            <small className="text-body-secondary">
              Tersedia Kembali
              <span className="fw-bold"> Sn, 13 Nov 08:00 - 11:00</span>
            </small>
          </p>
          <div className="m-2">
            <p className="card-text fs-6 fw-bold m-0">
              Chat : <span className="">Rp.25.000</span> | Call :{" "}
              <span className="">Rp.50.000</span>
            </p>
            {/* <p className="card-text text-decoration-line-through m-0">
              Chat : Rp.50.000 | Call : Rp.150.000
            </p> */}
          </div>
          {/* button */}
          <div className="d-flex">
            <button className="btn btn-primary w-50 me-1">
              <FaMessage style={{ fontSize: "1.5rem", marginRight: "12px" }} />
              Chat
            </button>
            <button className="btn btn-secondary w-50 ms-1">
              <FaPhone style={{ fontSize: "1.5rem", marginRight: "12px" }} />
              Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorCard;
