import Media from "react-media";
import LoginImage from "./Images/background-item-login.png";
import NutrikidLogo from "../../../public/nutrikid-logo/nutrikid-text-only-blue-svg.svg";
import LeftBox from "./LeftBox";
import "./login.css";

export default function Login() {
  return (
    <>
      {/* --------------------- MAIN CONTAINER --------------------- */}
      <div className="container d-flex justify-content-center align-items-center min- vh-100">
        {/*  --------------------- LOGIN CONTAINER --------------------- */}
        <div className="row border rounded-5 p-4 mx-2 bg-white shadow box-area">
          {/*  --------------------- LEFT BOX --------------------- */}
          <Media
            query="(min-width: 768px)"
            render={() => <LeftBox image={LoginImage} />}
          />
          {/*  --------------------- RIGHT BOX ---------------------  */}
          <div className="col-md rounded-4 mx-2 vh-50">
            <div className="">
              <form id="login-form" action="index.html" className="">
                <img
                  src={NutrikidLogo}
                  alt=""
                  width="192"
                  className="mx-auto my-2 d-block logo-custom"
                />
                <h1 className="text-center fs-2">Login</h1>
                <p className="text-center">Selamat datang kembali</p>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control border-success"
                    id="email"
                    placeholder="Masukkan Email Anda"
                    pattern=".+[a-zA-Z].+@.+\..{3}"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control border-success"
                    id="password"
                    placeholder="Masukkan Password Anda"
                    required
                  />
                </div>

                <button
                  className="btn btn-primary w-100 py-2"
                  id="login-btn"
                  type="submit"
                >
                  Login
                </button>
                <div className="my-2 text-center">
                  <p>
                    Belum memiliki akun? <a href="signup">Sign Up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
