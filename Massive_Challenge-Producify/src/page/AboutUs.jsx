import React from "react";
import Footer from "../component/Footer";
import "../component/style.css";

export default function AboutUs() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar fixed-top" style={{ backgroundColor: "#0496C7" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Producify
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link pe-4 " href="/">
                Home
              </a>
              <a className="nav-link pe-4" href="/PricingMonthly">
                Pricing
              </a>
              <a className="nav-link pe-4 active" aria-current="page" href="/aboutus">
                About Us
              </a>
              <a type="button" className="btn warna-bt" style={{color: "white"}} href="/Login">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Akhir Navigation Bar */}

      {/* <!-- Konten 1 --> */}
      <section className="warna-bg">
        <div className="container mb-5 pb-5 pt-5">
          <div className="row justify-content-evenly fs-5">
            <div className="col-sm mt-5">
              <img src="img/AboutUSDesc.png" alt="" />
            </div>
            <div className="col mt-5 ms-5">
              <h4>Producify</h4>
              <h3>
                <b>Activity management platform</b>
              </h3>
              <p align="justify">
                This platform provides tools and features that enable users to schedule, assign tasks and monitor activity progress efficiently. By using this activity management platform, organizations can increase efficiency, reduce the
                risk of errors, and ensure that all activities proceed as planned. It is highly beneficial for companies, educational institutions, non-profit organizations, and even individuals who need tools to manage projects and daily
                activities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Konten 1 --> */}

      {/* <!-- Konten 2 --> */}
      <section id="project">
        <div className="container">
          <div className="row text-center">
            <div className="col mb-5 mt-5">
              <h2>
                <b>Our Teams</b>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="card" style={{ borderRadius: "25px", backgroundColor: "#9BD5E9" }}>
                <img src="img/Fauzan.png" className="card-img-top p-2" alt="Gambar project 1" style={{ borderRadius: "25px" }} />
                <div className="card-body">
                  <h5 className="card-text text-center">Fauzan Ahmad Al Anshori</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card" style={{ borderRadius: "25px", backgroundColor: "#9BD5E9" }}>
                <img src="img/Arkan.png" className="card-img-top p-2" alt="Gambar project 2" style={{ borderRadius: "25px" }} />
                <div className="card-body">
                  <h5 className="card-text text-center">Muhammad Arkananta Althaf</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card" style={{ borderRadius: "25px", backgroundColor: "#9BD5E9" }}>
                <img src="img/Dhika.png" className="card-img-top p-2" alt="Gambar project 3" style={{ borderRadius: "25px" }} />
                <div className="card-body">
                  <h5 className="card-text text-center">Andhika Ihza Ardiansyah</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card" style={{ borderRadius: "25px", backgroundColor: "#9BD5E9" }}>
                <img src="img/Vhi.png" className="card-img-top p-2" alt="Gambar project 1" style={{ borderRadius: "25px" }} />
                <div className="card-body">
                  <h5 className="card-text text-center">Vhi Andra Pijar Zuliano</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card" style={{ borderRadius: "25px", backgroundColor: "#9BD5E9" }}>
                <img src="img/Rendra.jpg" className="card-img-top p-2" alt="Gambar project 2" style={{ borderRadius: "25px" }} />
                <div className="card-body">
                  <h5 className="card-text text-center">Marendra Iqbal Maulana</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card" style={{ borderRadius: "25px", backgroundColor: "#9BD5E9" }}>
                <img src="img/widya.jpg" className="card-img-top p-2" alt="Gambar project 3" style={{ borderRadius: "25px" }} />
                <div className="card-body">
                  <h5 className="card-text text-center">Maulidya Widyastuti</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Konten 2 --> */}

      <Footer />
    </>
  );
}
