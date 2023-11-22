import PropTypes from "prop-types";
import BackgroundLoginRegister from "./Images/background-item-login-register.png";

export default function LeftBox({ image }) {
  return (
    <>
      <div className="col-md rounded-4 mx-2 d-flex justify-content-center align-items-center flex-column nutrikid-display nutrikid-bg-primary">
        <div className="d-block">
          <img
            src={BackgroundLoginRegister}
            className="img-fluid"
            alt="bulb image"
          />
        </div>
        <div className="d-block position-absolute">
          <img
            className="img-fluid"
            src={image}
            alt="image"
            style={{ width: "20rem" }}
          />
        </div>
      </div>
    </>
  );
}

LeftBox.propTypes = {
  image: PropTypes.any,
};
