import React, { useState } from 'react';
import '../component/style.css';

export default function Todo() {
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
        <div className="d-flex justify-content-between">
          <div className="text-left">
            <p>My Project #1</p>
            <p className="desk">Let's make your day more productive by using <br />Producify!</p>
          </div>
          <div className="date">
            <p>1 Januari 2025</p>
          </div>
        </div>
          
        <div className="line"></div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary"><i className="fi fi-rr-bars-sort"></i></button>
          <button type="button" className="btn btn-primary"><i className="fi fi-rr-table"></i></button>
          <button type="button" className="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false" style={{borderTopRightRadius: "8px", borderBottomRightRadius: "8px"}}><i className="fi fi-rr-picture"></i></button>
          
          <ul className="dropdown-menu mt-2 ms-2" style={{backgroundColor: "#006E92", position: "relative"}}>
            <button type="button" className="btn-close" aria-label="Close"></button>
            <li><a className="dropdown-item text-white" href="#">Uploud a photo</a></li>
            <li><a className="dropdown-item text-white" href="#">Take a photo</a></li>
          </ul>
        </div>
        <div className="my-text">
          <p>My Text</p>
          <ul className="icon">
            <a href="#" className="icon-link">
              <i className="lni lni-plus"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="lni lni-trash-can"></i>
            </a> &nbsp;

            <div className="dropdown">
              <button className="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Calibri (Body)
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button">Calibri Light</button></li>
                <li><button className="dropdown-item" type="button">Poppins</button></li>
                <li><button className="dropdown-item" type="button">Times New Roman</button></li>
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                11
              </button> &nbsp;
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button">8</button></li>
                <li><button className="dropdown-item" type="button">9</button></li>
                <li><button className="dropdown-item" type="button">10</button></li>
                <li><button className="dropdown-item" type="button">11</button></li>
                <li><button className="dropdown-item" type="button">12</button></li>
                <li><button className="dropdown-item" type="button">13</button></li>
              </ul>
            </div>

            <a href="#" className="icon-link">
              <i className="lni lni-bold"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="lni lni-italic"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="lni lni-underline"></i>
            </a> &nbsp;

            <a href="#" className="icon-link">
              <i className="fi fi-rr-align-left"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fi fi-rr-align-center"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fi fi-rr-symbol"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fi fi-rr-align-justify"></i>
            </a> &nbsp;

            <a href="#" className="icon-link">
              <i className="fi fi-rr-list"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fi fi-rr-list"></i>
            </a>
          </ul>

          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
        </div>

        <div className="my-table">
          <p>My Table</p>
          <p className="desk">Let's make your day more productive by using Producify!</p>
          <div className="d-flex justify-content-evenly"> 
            <ul className="icon1">
              <a href="#" className="icon-link">
                <i className="lni lni-plus"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="lni lni-trash-can"></i>
              </a> &nbsp;

              <div className="dropdown">
                <button className="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Calibri (Body)
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="button">Calibri Light</button></li>
                  <li><button className="dropdown-item" type="button">Poppins</button></li>
                  <li><button className="dropdown-item" type="button">Times New Roman</button></li>
                </ul>
              </div>

              <div className="dropdown">
                <button className="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  11
                </button> &nbsp;
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="button">8</button></li>
                  <li><button className="dropdown-item" type="button">9</button></li>
                  <li><button className="dropdown-item" type="button">10</button></li>
                  <li><button className="dropdown-item" type="button">11</button></li>
                  <li><button className="dropdown-item" type="button">12</button></li>
                  <li><button className="dropdown-item" type="button">13</button></li>
                </ul>
              </div>

              <a href="#" className="icon-link">
                <i className="lni lni-bold"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="lni lni-italic"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="lni lni-underline"></i>
              </a> &nbsp;

              <a href="#" className="icon-link">
                <i className="fi fi-rr-align-left"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fi fi-rr-align-center"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fi fi-rr-symbol"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="fi fi-rr-align-justify"></i>
              </a> &nbsp;
            </ul>

            <div className="write">
              <span className="round-text">Aa</span>
                <span className="text-small">By Text</span>
              <span className="round-text">T</span>
                <span className="text-small">By Type</span>
              <span className="round-text"><i className="lni lni-calendar"></i></span>
                <span className="text-small">By Date</span>
            </div>
          </div>

          <table className="wide-table">
            <tr>
              <td>
                <button type="button" className="btn btn-primary circle-btn" data-bs-toggle="dropdown" aria-expanded="false" style={{display: "inline-block", margin: "auto auto auto 20px"}}>Aa</button>
                <span style={{fontSize: "20px", color: "#A8A8A8"}}>Text</span>
                <ul className="dropdown-menu mt-2 ms-2" style={{backgroundColor: "#006E92", position: "relative"}}>
                  <li style={{display: "flex", alignItems: "left"}}>
                    <span className="round-text" style={{backgroundColor: "white", color: "#006E92", marginLeft: "15px", marginBottom: "8px", width: "58px", height: "33px", borderRadius: "50%", display: "inline-block", textAlign: "center"}}>T</span>
                    <a className="dropdown-item text-white" href="#">Type</a>
                  </li>
                  <li style={{display: "flex", alignItems: "center"}}>
                    <span className="round-text" style={{backgroundColor: "white", color: "#006E92", marginLeft: "15px", width: "58px", height: "33px", borderRadius: "50%", display: "inline-block", textAlign: "center"}}><i className="fi fi-rr-calendar"></i></span>
                    <a className="dropdown-item text-white" href="#">Date</a>
                  </li>
                </ul>
              </td>
              <td>
                <button type="button" className="btn btn-primary circle-btn" data-bs-toggle="dropdown" aria-expanded="false" style={{display: "inline-block", margin: "auto auto auto 20px"}}>Aa</button>
                <span style={{fontSize: "20px", color: "#A8A8A8"}}>Text</span>
                <ul className="dropdown-menu mt-2 ms-2" style={{backgroundColor: "#006E92", position: "relative"}}>
                  <li style={{display: "flex", alignItems: "left"}}>
                    <span className="round-text" style={{backgroundColor: "white", color: "#006E92", marginLeft: "15px", marginBottom: "8px", width: "58px", height: "33px", borderRadius: "50%", display: "inline-block", textAlign: "center"}}>T</span>
                    <a className="dropdown-item text-white" href="#">Type</a>
                  </li>
                  <li style={{display: "flex", alignItems: "center"}}>
                    <span className="round-text" style={{backgroundColor: "white", color: "#006E92", marginLeft: "15px", width: "58px", height: "33px", borderRadius: "50%", display: "inline-block", textAlign: "center"}}><i className="fi fi-rr-calendar"></i></span>
                    <a className="dropdown-item text-white" href="#">Date</a>
                  </li>
                </ul>
              </td>
              <td>
                <button type="button" className="btn btn-primary circle-btn" data-bs-toggle="dropdown" aria-expanded="false" style={{display: "inline-block", margin: "auto auto auto 20px"}}>Aa</button>
                <span style={{fontSize: "20px", color: "#A8A8A8"}}>Text</span>
                <ul className="dropdown-menu mt-2 ms-2" style={{backgroundColor: "#006E92", position: "relative"}}>
                  <li style={{display: "flex", alignItems: "left"}}>
                    <span className="round-text" style={{backgroundColor: "white", color: "#006E92", marginLeft: "15px", marginBottom: "8px", width: "58px", height: "33px", borderRadius: "50%", display: "inline-block", textAlign: "center"}}>T</span>
                    <a className="dropdown-item text-white" href="#">Type</a>
                  </li>
                  <li style={{display: "flex", alignItems: "center"}}>
                    <span className="round-text" style={{backgroundColor: "white", color: "#006E92", marginLeft: "15px", width: "58px", height: "33px", borderRadius: "50%", display: "inline-block", textAlign: "center"}}><i className="fi fi-rr-calendar"></i></span>
                    <a className="dropdown-item text-white" href="#">Date</a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
