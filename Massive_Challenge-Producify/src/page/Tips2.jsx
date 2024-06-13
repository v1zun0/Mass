import React, { useState } from 'react';
import '../component/style.css';

export default function Tips2() {
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
      <div className="main d-flex flex-column flex-grow-1 p-3">
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          {/* <!-- Konten --> */}
          <div className="rounded-4 card" style={{ maxWidth: '900px' }}>
            <div className="card-body d-flex flex-column">
              <a href="/Tips1">
                <b>
                  <u>back</u>
                </b>
              </a>
              <h3 className="card-title text-center">Manage productivity even though you are busy with work?</h3>
              <div className="d-flex justify-content-center">
                <video controls className="mt-3 mb-0" style={{ width: '75%' }}>
                  <source src="../../public/video/Chat.mp4" type="video/mp4" />
                </video>
              </div>
              <p></p>
              <p className="card-text flex-grow-1">
                In this modern era, high work demands sometimes make us feel overwhelmed and find it difficult to balance it with our personal lives. However, that doesn't mean we can't be productive individuals in the midst of busy work.
                Here are some tips you can try:
              </p>
              <h5 className="card-title">Set Priorities and Create a To-Do List</h5>
              <p className="card-text flex-grow-1">
                The first step to increasing productivity is to set priorities and create a to-do list. This will help you to focus on the most important and urgent tasks, and avoid procrastination. Use methods like Time Blocking to divide
                your time more effectively. Allocate a certain amount of time for each task and stick to that schedule.
              </p>
              <h5 className="card-title">Avoid Distractions and Create a Conducive Work Environment</h5>
              <p className="card-text flex-grow-1">
                Distractions such as social media notifications, emails, and phone calls can hinder focus and decrease productivity. Turn off those notifications while you work or use a website blocking app. Create a conducive work
                environment by tidying up your work desk and ensuring adequate lighting.
              </p>
              <h5 className="card-title">Take time to rest and take care of your health</h5>
              <p className="card-text flex-grow-1">
                Working continuously without stopping is not only ineffective, but can also harm your physical and mental health. Take time to take a short break every few hours to stretch your body and clear your mind. Do activities you
                enjoy outside of work hours to maintain mental and physical health.
              </p>
              <p className="card-text flex-grow-1">
                By implementing the tips above, you can increase productivity amidst busy work and achieve balance between professional and personal life. Remember that the main key to becoming a productive individual is to be disciplined,
                focused and consistent in implementing the right strategy..
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Akhir Konten --> */}
      </div>
    </div>
  );
}
