//MASIH BROKIN (TAPI BISA DIJALANKAN DI LAPTOP NYA VHI ENTAH KENAPA)

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../component/homestyle.css";
import PostCard from "../component/postcard"; // Import komponen PostCard
import ProfilePopup from "../component/ProfilePopup"; // Import ProfilePopup
import ProjectPopup from "../component/ProjectPopup"; // Import ProjectPopup
import gojoImage from "../assets/gojo.png";
import addProjectImage from "../assets/addproject.png";

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isProjectPopupOpen, setIsProjectPopupOpen] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleProfilePopup = () => {
    setIsProfilePopupOpen(!isProfilePopupOpen);
  };

  const toggleProjectPopup = () => {
    setIsProjectPopupOpen(!isProjectPopupOpen);
  };

  return (
    <div className={`wrapper ${isExpanded ? "sidebar-expanded" : ""}`}>
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
        <div className="d-flex align-items-center justify-content-between p-3">
          {isExpanded && (
            <>
              <div className="user-img">
                <img src={gojoImage} alt="User" />
              </div>
              <div className="sidebar-logo">
                <a href="#" onClick={toggleProfilePopup}>
                  Satoru Gojo
                </a>
                <span>@satorugojo</span>
              </div>
            </>
          )}
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
        </div>
        {isProfilePopupOpen && <ProfilePopup onClose={toggleProfilePopup} />}
        {isProjectPopupOpen && <ProjectPopup onClose={toggleProjectPopup} />}
        <hr className="divider" />
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="bi bi-house-door-fill"></i>
              <span className="icon-text">Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="bi bi-person-fill"></i>
              <span className="icon-text">Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="bi bi-folder-fill"></i>
              <span className="icon-text">Projects</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="bi bi-chat-fill"></i>
              <span className="icon-text">Chat</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="bi bi-lightbulb-fill"></i>
              <span className="icon-text">Tips</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="bi bi-search"></i>
              <span className="icon-text">Search</span>
            </a>
          </li>
        </ul>
        <hr className="divider" />
        <div className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="bi bi-question-circle-fill"></i>
            <span className="icon-text">Help</span>
          </a>
        </div>
        <hr className="divider" />
        <div className="sidebar-footer">
          <a href="#" className="sidebar-link">
            <i className="bi bi-gem"></i>
            <span className="icon-text">Upgrade your plan</span>
          </a>
        </div>
      </aside>
      <div className="main p-3">
        <div className="atas" style={{ display: "flex", alignItems: "center" }}>
          <div className="text-left">
            <p>What is happening?</p>
            <p className="desk">
              Let's make your day more productive by using <br />
              Producify!
            </p>
          </div>
          <div className="teksproject" style={{ display: "flex", flexDirection: "column", marginLeft: "50px" }}>
            <label
              className="btn btn-primary"
              style={{ borderRadius: "50%", padding: "5px", backgroundColor: "#023C50", width: "90px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center" }}
              onClick={toggleProjectPopup}
            >
              <img src={addProjectImage} alt="uploadicon" className="button-icon" style={{ padding: "5px" }} />
            </label>
            <p style={{ fontWeight: "600", color: "#023c50", marginTop: "12px" }}>New Project</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="teksfyp" style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
          <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "30px", paddingRight: "40px", fontSize: "22px" }} className="teksheaderhalamancard hover-effect">
            For You
          </p>
          <div className="vertical-line"></div>
          <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "30px", paddingLeft: "40px", fontSize: "22px" }} className="teksheaderhalamancard hover-effect">
            Following
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <PostCard title="novel favorit gua" content="halo teman-teman! butuh rekomendasi novel? kalian bisa liat list novel-novel favoritku ya! " image="https://via.placeholder.com/300" />
        </div>
      </div>
    </div>
  );
}

export default Home;