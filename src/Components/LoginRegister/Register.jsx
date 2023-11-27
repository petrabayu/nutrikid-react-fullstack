import Media from "react-media";
import RegisterImage from "./Images/background-item-signup.png";
import NutrikidLogo from "../../../public/nutrikid-logo/nutrikid-text-only-blue-svg.svg";
import LeftBox from "./LeftBox";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Register() {
  const history = useNavigate();

  const apiRegister = "http://localhost:3000/register";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password dan Konfirmasi Password harus sama");
      return;
    }

    try {
      const response = await axios.post(apiRegister, {
        username,
        password,
        email,
      });

      console.log("Registration Successful:", response.data);
      history("/login");
    } catch (error) {
      console.error("Registration Failed:", error.message);
      // Mungkin tambahkan logika untuk menampilkan pesan kesalahan kepada pengguna
    }
  };
  return (
    <>
      {/* --------------------- MAIN CONTAINER --------------------- */}
      <div className="container d-flex justify-content-center align-items-center min- vh-100">
        {/*  --------------------- REGISTER CONTAINER--------------------- */}
        <div className="row border rounded-5 p-4 mx-2 bg-white shadow box-area">
          {/*  --------------------- LEFT BOX --------------------- */}

          <Media
            query="(min-width: 768px)"
            render={() => <LeftBox image={RegisterImage} />}
          />

          {/*  --------------------- RIGHT BOX ---------------------  */}
          <div className="col-md rounded-4 mx-2 vh-50">
            <div className="">
              <form
                method="POST"
                id="login-form"
                action="index.html"
                className=""
              >
                <img
                  src={NutrikidLogo}
                  alt=""
                  width="192"
                  className="mx-auto my-2 d-block"
                />
                <h1 className="text-center fs-2">Sign Up</h1>
                <div className="row mt-2 mb-2">
                  <div className="col-6">
                    <label className="form-label">Nama Depan</label>
                    <input
                      id="fistname"
                      type="text"
                      name="firstname"
                      className="form-control border-success p-2"
                      placeholder="Nama Depan"
                      value={firstName}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Nama Belakang</label>
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      className="form-control border-success p-2"
                      placeholder="Nama Belakang"
                      value={lastName}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control border-success"
                    id="email"
                    placeholder="Masukkan Email Anda"
                    pattern=".+[a-zA-Z].+@.+\..{3}"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control border-success"
                    id="password"
                    placeholder="Buat Password Anda"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Verifikasi Password</label>
                  <input
                    type="password"
                    className="form-control border-success"
                    id="password"
                    placeholder="Konfirmasi Password Anda"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button
                  className="btn btn-primary w-100 py-2  mt-2"
                  id="login-btn"
                  type="submit"
                  onClick={handleRegistration}
                >
                  Sign Up
                </button>
                <div className="my-2 text-center">
                  <p>
                    Sudah memiliki akun? <a href="login">Login</a>
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
