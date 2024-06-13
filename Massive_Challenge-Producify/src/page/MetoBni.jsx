import React, { useState } from "react";
import "../component/style.css";
import footer from "../component/Sidebar";
import CopyAccountNumber from "../component/CopyAccountNumber.jsx";

export default function MetoBni() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="wrapper">
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
        {/* Isi Sidebar */}
        <div className="d-flex">
          <div className="user-img">
            <a data-bs-toggle="dropdown" aria-expanded="false">
              <img src="img/gojo.png" alt="me" />
            </a>
            <ul className="rounded-4 dropdown-menu mt-5 ms-2 me-2 pe-2 ps-2" style={{ backgroundColor: "#006E92", width: "25%" }}>
              <div className="dropdown-item d-flex gap-1">
                <img src="img/gojo.png" alt="me" />
                <div className="mt-3 text-white">
                  <h3>Satoru Gojo</h3>
                  <div className="d-flex justify-content-between">
                    <span>@satorugojo</span>
                    <span>Free</span>
                  </div>
                </div>
              </div>
              <li>
                <hr style={{ width: "auto", color: "white", height: "2px", border: "none", backgroundColor: "white" }} />
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Setting
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr style={{ width: "auto", color: "white", height: "2px", border: "none", backgroundColor: "white" }} />
              </li>
              <li>
                <a className="dropdown-item text-white" href="/">
                  logout
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-logo text-white">
            <a>Satoru Gojo</a>
            <div>
              <span>@satorugojo</span>
            </div>
          </div>
          <div className="logo">
            <div className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="fi fi-rr-bell"></i>
              </a>
            </div>
            <button className="toggle-btn" type="button" onClick={handleToggle}>
              <i className="fi fi-rr-sidebar"></i>
            </button>
          </div>
        </div>

        <hr style={{ width: "auto", color: "white", height: "2px", border: "none", backgroundColor: "white" }} />

        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-user"></i>
              <span>Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/Todo" className="sidebar-link">
              <i className="fi fi-rr-clipboard-list"></i>
              <span>Projects</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-bubble"></i>
              <span>Chat</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/Tips1" className="sidebar-link">
              <i className="fi fi-rr-bulb"></i>
              <span>Tips</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="fi fi-rr-search"></i>
              <span>Search</span>
            </a>
          </li>
        </ul>

        <hr style={{ width: "auto", color: "white", height: "2px", border: "none", backgroundColor: "white" }} />

        <div className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="fi fi-rr-interrogation"></i>
            <span>Help</span>
          </a>
        </div>

        <hr style={{ width: "auto", color: "white", height: "2px", border: "none", backgroundColor: "white" }} />

        <div className="sidebar-item">
          <a href="/UpgradeMonthly" className="sidebar-link">
            <i className="lni lni-diamond-alt"></i>
            <span>Upgrade your plan</span>
          </a>
        </div>
      </aside>
      <div className="main p-3">
        <div className="text-center">
          {/* <!-- Konten --> */}
          <section>
            <div className="container">
              <div className="text-center mt-2">
                <div className="col mt-3">
                  <h3 className="text-black">Choose your payment method</h3>
                </div>
              </div>
              <div className="card-bni mt-3">
                <div className="bank-details d-flex align-items">
                  <img src="icon/bni.png" alt="BNI Mobile Banking" className="bank-logo me-3" style={{ float: "left" }} />
                  <div>
                    <span>BNI Bank</span>
                    <div>
                      <p>Virtual Account Number:</p>
                      <p className="account-number">
                        8807 0857 0432 2222 <CopyAccountNumber />
                      </p>
                      <p class="note">Enter the virtual account number within 10 minutes</p>
                      <p>Pay the order to the Virtual Account above before making another order with the Virtual Account so that the number remains the same.</p>
                      <p>Only accept from BNI bank</p>
                      <p>Inter-bank transfer fees and transfer limitations may apply if you transfer from a bank other than BNI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="back-arrow mt-3">
                <a href="/MetoMerahHijau">
                  <img src="icon/Arrow back.png" alt="back" style={{ height: "35px" }} />
                </a>
              </div>
            </div>
          </section>
          {/* <!-- Akhir Konten --> */}
        </div>
      </div>
    </div>
  );
}
