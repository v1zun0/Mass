import React, { useState } from "react";
import "../component/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notelp, setNotelp] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        notelp: notelp,
        confPassword: confPassword,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#E7F9FF", minHeight: "100vh" }}>
        <div className="global-container">
          <div className="card login-form" style={{ height: "auto", backgroundColor: "#006E92" }}>
            <div className="card-body">
              <h1 className="card-title text-center">Producify</h1>
            </div>

            <div className="card-text">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputUsername" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" id="inputUsername" placeholder="Enter your username..." value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Enter your phone number..." value={notelp} onChange={(e) => setNotelp(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="inputPassword" placeholder="Enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputConfPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input type="password" className="form-control" id="inputConfPassword" placeholder="Confirm your password..." value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                </div>
                {msg && <div className="alert alert-danger">{msg}</div>}
                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
              </form>
            </div>
            {/* Other UI elements */}
          </div>
        </div>

        {/* <!-- Bootstrap JS --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        <script src="script.js"></script>
      </div>
    </>
  );
}
