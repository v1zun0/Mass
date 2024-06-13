import React from 'react';
import Footer from '../component/Footer';
import '../component/style.css';

export default function PricingYearly() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar fixed-top" style={{ backgroundColor: '#0496C7' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Producify
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link pe-4" href="/">
                Home
              </a>
              <a className="nav-link pe-4 active" aria-current="page" href="/pricingMonthly">
                Pricing
              </a>
              <a className="nav-link pe-4" href="/aboutus">
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
      <body style={{ backgroundColor: '#e7f9ff' }}>
        {/* <!-- Konten 2 --> */}
        <section style={{ backgroundColor: '#e7f9ff' }} className="d-md-flex mx-5 mt-5">
          <div className="container">
            <div className="mb-3 mt-5">
              <div className="card shadow " style={{ width: '100%', height: '100%', borderRadius: '15px', backgroundColor: '#9BD5E9' }}>
                <div className="card-body">
                  <div className="d-grid justify-content-center">
                    <a href="login.html" className="btn btn-primary warna-bt">
                      Start for free
                    </a>
                  </div>
                  <hr />
                  <h5>Billing cycle</h5>
                  <div className="d-flex justify-content-center">
                    <a href="/pricingMonthly" className="btn btn-light m-1" style={{ borderRadius: '20px', width: '100%' }}>
                      monthly
                    </a>
                    <a href="/pricingYearly" className="btn btn-primary m-1" style={{ borderRadius: '20px', width: '100%', backgroundColor: '#2193B9' }}>
                      Yearly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="col mt-5">
              {/* <!-- ganti "col" jika ingin posisi card horizontal--> */}
              <div className="col mb-5">
                <div className="card shadow" style={{ width: '100%', borderRadius: '15px' }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <h3>Free</h3>
                        <p>Start manage you life for free</p>
                        <h3>Rp. 0</h3>
                        <a href="#" className="btn btn-primary warna-bt">
                          Start for free
                        </a>
                      </div>
                      <div className="vl col"></div>
                      <div className="col-6">
                        <h5>Feature:</h5>
                        <ul className="jarak">
                          <li>20 personal project</li>
                          <li>Smart quick add</li>
                          <li>Flexible list & board layout</li>
                          <li>10 filter view</li>
                          <li>1 month activity history</li>
                          <li>intergrate calendar, email, and more</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card shadow" style={{ width: '100%', borderRadius: '15px' }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <h3>Pro</h3>
                        <p>Stay on top of all your tasks and goals, at work and at home</p>
                        <h3>Rp. 499.000</h3>
                        <a href="#" className="btn btn-primary warna-bt">
                          Start for free
                        </a>
                      </div>
                      <div className="vl col"></div>
                      <div className="col-6">
                        <h5>Feature:</h5>
                        <ul className="jarak">
                          <li>200 personal project</li>
                          <li>Smart quick add</li>
                          <li>Task reminder & Duration</li>
                          <li>25 filter view</li>
                          <li>1 year activity history</li>
                          <li>intergrate calendar, email, and more</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card shadow" style={{ width: '100%', borderRadius: '15px' }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <h3>Starlight</h3>
                        <p>Stay on top of all your tasks and goals, at work and at home</p>
                        <h3>Rp. 999.000</h3>
                        <a href="#" className="btn btn-primary warna-bt">
                          Start for free
                        </a>
                      </div>
                      <div className="vl col"></div>
                      <div className="col-6">
                        <h5>Feature:</h5>
                        <ul className="jarak">
                          <li>Infinite personal project</li>
                          <li>Smart quick add</li>
                          <li>Flexible list & board layout</li>
                          <li>50 filter view</li>
                          <li>5 year activity history</li>
                          <li>intergrate calendar, email, and more</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Akhir Konten 2 --> */}

        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    </>
  );
}
