import React, { useState } from "react";
import "./homestyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineCalendarMonth } from "react-icons/md";

function ProjectPopup({ onClose }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // Logic to handle save action
    console.log("Project Name:", projectName);
    console.log("Description:", description);
    onClose();
  };

  return (
    <div className="project-popup">
      <div style={{ color: "white" }} className="project-popup-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h1 style={{ fontWeight: "bold", fontSize: "0px" }}>New Project</h1>
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            style={{ backgroundColor: "#006E92", border: "none", borderBottom: "1px solid #fff", borderRadius: "0px", color: "white" }}
            type="text"
            id="projectName"
            className="form-control"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            style={{ backgroundColor: "#006E92", border: "none", borderBottom: "1px solid #fff", borderRadius: "0px", color: "white" }}
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button style={{ gap: "5px", width: "35%", height: "50px", borderRadius: "10px" }} className="callenderbutton">
            <MdOutlineCalendarMonth size={30} />
            Due date
          </button>
        </div>
        <div className="popup-buttons">
          <button className="cancelprojectbutton" onClick={onClose}>
            Cancel
          </button>
          <button className="saveprojectbutton" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
