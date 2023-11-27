import DoctorPofile from "./images/doctor-profile.jpg";

export default function PaymentDetailCard({
  doctorName,
  service,
  price,
  onClose,
}) {
  return (
    <>
      <div className="card col-md-6 mx-auto my-auto mt-4">
        <h4 className="card-header fw-bolder text-center bg-info">
          Detail Pembayaran
        </h4>
        <div className="card-body">
          <div className=" d-flex justify-content-start align-items-center">
            <div>
              <img
                src={DoctorPofile}
                className="rounded"
                alt="Doctor's Profile"
                style={{ width: "5rem" }}
              />
            </div>
            <div className="ms-4">
              <h5 className="card-title fw-bold">{doctorName}</h5>
              <h5 className="card-title"> Dokter Umum</h5>
            </div>
          </div>

          <div className="my-4">
            <p className="card-text my-1 d-flex justify-content-between">
              <span>
                Biaya Konsultasi : <strong>{service} 30 Menit</strong>
              </span>
              <span>
                <strong>Rp.{price}</strong>
              </span>
            </p>
            <p className="card-text my-1 d-flex justify-content-between">
              <span>Biaya Layanan</span>
              <span>
                <strong>Rp.1.000</strong>
              </span>
            </p>
            <p className="card-text my-1 d-flex justify-content-between fs-4">
              <span>
                <strong>Total Pembayaran</strong>
              </span>
              <span>
                <strong>Rp.51.000</strong>
              </span>
            </p>
          </div>

          <div className="d-grid">
            <button className="btn btn-secondary" onClick={onClose}>
              Tutup
            </button>
            <button className="btn btn-primary d-grid">
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
