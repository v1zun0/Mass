import React, { useState } from 'react';
import '../component/style.css';

export default function UpgradeYearly() {
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
        <div>
          <section style={{ backgroundColor: '#e7f9ff' }} className="mt-5">
            <div className="container">
              <div className="col mb-5 d-flex justify-content-center">
                <div className="card shadow" style={{ width: '60%', height: '60%', borderRadius: '15px', backgroundColor: '#9BD5E9' }}>
                  <div className="card-body">
                    <h1 className="text-center">Billing cycle</h1>
                    <div className="d-flex justify-content-center">
                      <a href="/UpgradeMonthly" className="btn m-1" style={{ borderRadius: '20px', width: '100%', backgroundColor: '#2193b9', color: 'white' }}>
                        monthly
                      </a>
                      <a href="/UpgradeYearly" className="btn m-1" style={{ borderRadius: '20px', width: '100%', backgroundColor: 'whitesmoke', color: 'black' }}>
                        Yearly
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col mb-5 d-flex justify-content-center">
                  <div className="card shadow" style={{ width: '60%', borderRadius: '15px' }}>
                    <div className="card-body d-flex flex-column" style={{ height: '100%' }}>
                      <div className="row flex-grow-1">
                        <div className="col-5 d-flex flex-column justify-content-between">
                          <div>
                            <h3>Free</h3>
                            <p>Start manage you life for free</p>
                            <h3>Rp. 0</h3>
                          </div>
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
                <div className="col mb-5 d-flex justify-content-center">
                  <div className="card shadow" style={{ width: '60%', borderRadius: '15px' }}>
                    <div className="card-body d-flex flex-column" style={{ height: '100%' }}>
                      <div className="row flex-grow-1">
                        <div className="col-5 d-flex flex-column justify-content-between">
                          <div>
                            <h3>Free</h3>
                            <p>Start manage you life for free</p>
                            <h3>Rp. 499.000</h3>
                          </div>
                          <div>
                            <a href="/MetoMerah" className="btn btn-primary warna-bt">
                              Start for free
                            </a>
                          </div>
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
                <div className="col mb-5 d-flex justify-content-center">
                  <div className="card shadow" style={{ width: '60%', borderRadius: '15px' }}>
                    <div className="card-body d-flex flex-column" style={{ height: '100%' }}>
                      <div className="row flex-grow-1">
                        <div className="col-5 d-flex flex-column justify-content-between">
                          <div>
                            <h3>Free</h3>
                            <p>Start manage you life for free</p>
                            <h3>Rp. 999.000</h3>
                          </div>
                          <div>
                            <a href="/MetoMerah" className="btn btn-primary warna-bt">
                              Start for free
                            </a>
                          </div>
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
        </div>
      </div>
    </div>
  );
}
