import React, { useState } from "react";
import "../component/style.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/Todo");
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
          <div className="rounded-4 card login-form rounded" style={{ height: "auto", backgroundColor: "#006E92" }}>
            <div className="card-body">
              <h1 className="card-title text-center" style={{ color: "white" }}>
                Producify
              </h1>
            </div>

            <div className="card-text">
              <form onSubmit={Auth}>
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
                {msg && <div className="alert alert-danger">{msg}</div>}
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Log in
                </button>
              </form>
            </div>

            <div className="d-flex align-items-center mt-3">
              <hr className="hr-light flex-grow-1" />
              <p className="mx-3" style={{ color: "white", fontSize: "20px" }}>
                Or
              </p>
              <hr className="hr-light flex-grow-1" />
            </div>

            <div className="d-grid gap-3 col-6 mx-auto" style={{ marginTop: "10px" }}>
              <button className="btn btn-light">
                <img src="icon/google.png" alt="Google logo" className="rounded float-start" />
                <span style={{ fontWeight: "600", fontSize: "20px" }}>Sign in with Google</span>
              </button>
              <button className="btn btn-light">
                <img src="icon/facebook.png" alt="Facebook logo" className="rounded float-start" />
                <span style={{ fontWeight: "600", fontSize: "20px" }}>Sign in with Facebook</span>
              </button>
              <button className="btn btn-light">
                <img src="icon/apple.png" alt="Apple ID logo" className="rounded float-start" />
                <span style={{ fontWeight: "600", fontSize: "20px" }}>Sign in with Apple ID</span>
              </button>
            </div>

            <hr className="hr-light" style={{ marginTop: "40px" }} />

            <div className="signinhere" style={{ fontSize: "20px", color: "white", textAlign: "center", marginTop: "10px" }}>
              <p style={{ display: "inline-block" }}>Don't have an account?</p>
              <nav style={{ color: "white", display: "inline-block" }} className="breadcrumb">
                <a href="/Register">Sign up here!</a>
              </nav>
            </div>
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </div>
    </>
  );
}
