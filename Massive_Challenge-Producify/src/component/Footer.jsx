import React from "react";

export default function Footer() {
  return (
    <>
      <div className="blockcode">
        <footer className="shadow" style={{ backgroundColor: "#0496C7" }}>
          <div className="d-flex justify-content-between align-items-center mx-auto p-3 flex-wrap" style={{ width: "95%" }}>
            <p className="text-white m-1">&copy; KONSULIT, 2024. ALL RIGHTS RESERVED</p>
            <div className="d-flex align-items-center">
              <b className="text-white m-1">Follow Us:</b>
              <button className="btn btn-flat p-2">
                <img src="icon/instagram.png" alt="instagram" height="20" />
              </button>
              <button className="btn btn-flat p-2">
                <img src="icon/facebook-bw.png" alt="instagram" height="20" />
              </button>
              <button className="btn btn-flat p-2">
                <img src="icon/youtube.png" alt="instagram" height="20" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
