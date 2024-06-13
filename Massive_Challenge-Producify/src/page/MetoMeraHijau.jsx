import React, { useState } from 'react';
import '../component/style.css';

export default function MetoMerahhijau() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="wrapper">
      <aside id="sidebar" className={isExpanded ? 'expand' : ''}>
        {/* Isi Sidebar */}
        <div className="d-flex">
          <div className="user-img">
            <a data-bs-toggle="dropdown" aria-expanded="false">
              <img src="img/gojo.png" alt="me" />
            </a>
            <ul className="rounded-4 dropdown-menu mt-5 ms-2 me-2 pe-2 ps-2" style={{ backgroundColor: '#006E92', width: '25%' }}>
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
                <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />
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
                <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />
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

        <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />

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

        <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />

        <div className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="fi fi-rr-interrogation"></i>
            <span>Help</span>
          </a>
        </div>

        <hr style={{ width: 'auto', color: 'white', height: '2px', border: 'none', backgroundColor: 'white' }} />

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
            <div className="text-center mt-2">
              <div className="col mt-3">
                <h3 className="text-black">Choose your payment method</h3>
              </div>
            </div>
            <div className="row justify-content-center pb-5 pt-3 ps-5 px-5">
              <div className="p-2">
                <div className="rounded-4 card p-4 shadow">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="icon/bitcoin-cash-money.256x223.png" alt="m-banking" width="5%" />
                    <p className="ms-3 pt-3">M-Banking :</p>
                    <div className="position-absolute top-50 end-0 translate-middle-y pe-4">
                      <a href="/MetoBni" type="button" className="btn text-black" style={{ height: '35px', width: '150px', borderRadius: '50px', backgroundColor: '#01ff3c' }}>
                        Pay Now
                      </a>
                      <a href="/Mbanking" type="button" className="btn text-black ms-2 text-white" style={{ height: '35px', width: '150px', borderRadius: '50px', backgroundColor: '#006E92' }}>
                        Change
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="rounded-4 card p-4 shadow">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="icon/wallet.256x192.png" alt="m-banking" width="5%" />
                    <p className="ms-3 pt-3">E-Wallet :</p>
                    <div className="position-absolute top-50 end-0 translate-middle-y pe-4">
                      <a href="/Ewallet" type="button" className="btn d-grid text-white ms-auto" style={{ height: '35px', width: '150px', borderRadius: '50px', backgroundColor: '#cf0000' }}>
                        Connect
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="back-arrow mt-3">
              <a href="/UpgradeMonthly">
                <img src="icon/Arrow back.png" alt="back" style={{ height: '35px' }} />
              </a>
            </div>
          </section>
          {/* <!-- Akhir Konten --> */}
        </div>
      </div>
    </div>
  );
}
