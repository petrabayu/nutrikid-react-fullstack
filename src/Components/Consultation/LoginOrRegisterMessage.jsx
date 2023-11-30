// src/Components/Consultation/LoginOrRegisterMessage.jsx

import React from "react";
import { Link } from "react-router-dom";
import { setLastVisitedPath } from "../../Routes/visitedPath";

function LoginOrRegisterMessage() {
  const handleRedirectToLogin = () => {
    // Simpan path terakhir sebelum menuju halaman login
    setLastVisitedPath("/konsultasi");
  };

  return (
    <>
      <div className="my-5 p-5">
        <div className="col-md-6 offset-md-3 text-center ">
          <h3>Silakan login atau registrasi untuk melihat daftar dokter.</h3>
          <div className="mt-3">
            <Link
              to="/login"
              className="btn btn-primary mx-2 my-2"
              onClick={handleRedirectToLogin}
            >
              Login
            </Link>
            <Link to="/signup" className="btn btn-success mx-2 my-2">
              Registrasi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginOrRegisterMessage;
