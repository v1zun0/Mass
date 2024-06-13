import React from "react";
import "./homestyle.css";

const images = require.context("../img", true);

const ProfilePopup = ({ onClose }) => {
  return (
    <div className="profile-popup">
      <div className="profile-popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="profile-header">
          <img src={images("./gojo.png")} alt="User" className="profile-img" />
          <div className="profile-info">
            <h4>Satoru Gojo</h4>
            <p>@satorugojo • Free Plan</p>
          </div>
        </div>
        <ul className="popup-menu">
          <li>
            <a href="#">Edit profile</a>
          </li>
          <li>
            <a href="#">Change account</a>
          </li>
          <li>
            <a href="#">Add another account</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePopup;
