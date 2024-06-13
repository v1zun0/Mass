import React, { useState } from 'react';
import '../component/style.css';

export default function Tips1() {
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
      <div className="main p-3 flex-grow-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center flex-column align-items-center">
              {/* <!-- Tulisan di atas kartu --> */}
              <div className="text-center mb-3">
                <h2>Here’s tips for you</h2>
              </div>
              {/* <!-- Kartu 1 --> */}
              <div className="rounded-4 card mb-4">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="img/imagetips.png" className="rounded-4 card-img-top p-2" alt="Card Image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        <a href="/Tips2" className="card-title">
                          Manage productivity even though you are busy with work?
                        </a>
                      </h5>
                      <p></p>
                      <p className="card-text">In the current era of globalization, we are faced with the density of tasks in the places where we work, how do we stay productive when we have many tasks that need to be completed?</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Kartu 2 --> */}
              <div className="rounded-4 card mb-4">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="img/imagetips.png" className="rounded-4 card-img-top p-2" alt="Card Image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        <a href="tips2.html" className="card-title">
                          Manage productivity even though you are busy with work?
                        </a>
                      </h5>
                      <p></p>
                      <p className="card-text">In the current era of globalization, we are faced with the density of tasks in the places where we work, how do we stay productive when we have many tasks that need to be completed?</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Kartu 3 --> */}
              <div className="rounded-4 card mb-4">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="img/imagetips.png" className="rounded-4 card-img-top p-2" alt="Card Image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        <a href="tips2.html" className="card-title">
                          Manage productivity even though you are busy with work?
                        </a>
                      </h5>
                      <p></p>
                      <p className="card-text">In the current era of globalization, we are faced with the density of tasks in the places where we work, how do we stay productive when we have many tasks that need to be completed?</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Akhir Kartu --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
