import PropTypes from "prop-types";
import { rupiah } from "../../Services/programService";

export default function ProgramEventPayDetail({
  programName,
  image,
  price,
  service,

}) {
  return (
    <>
      <div className="card-body">
        <div className=" d-flex justify-content-start align-items-center">
          <div>
            <img
              src={image}
              className="rounded"
              alt="Program Image"
              style={{ width: "5rem" }}
            />
          </div>
          <div className="ms-4">
            <h5 className="card-title fw-bold">{programName}</h5>
          </div>
        </div>

        <div className="my-4">
          <p className="card-text my-1 d-flex justify-content-between">
            
            <span>
              Harga {service} :
            </span><span>
              <strong>{rupiah(price)}</strong>
            </span>
            
          </p>
          <p className="card-text my-1 d-flex justify-content-between">
            <span>Biaya Layanan</span>
            <span>
              <strong>{ price === 0 ? "FREE" : rupiah(1000)}</strong>
            </span>
          </p>
          <p className="card-text my-1 d-flex justify-content-between fs-4">
            <span>
              <strong>Total Pembayaran</strong>
            </span>
            <span>
              <strong>{price === 0 ? "FREE" : rupiah(price + 1000)}</strong>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

ProgramEventPayDetail.propTypes = {
  programName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
