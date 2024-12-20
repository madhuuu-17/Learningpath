import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Markdetails = () => {
  return (
    <div>
      <div class="bio-items bnav">
        <div className="bionav-item itemb1">
          <Link to="/biodata">BioData</Link>
        </div>
        <div className="bionav-item itemb2">
          <Link to="/timetable">TimeTable</Link>
        </div>
        <div className="bionav-item itemb3">
          <Link to="/markdetails">Markdetails</Link>
        </div>
        <div className="bionav-item itemb4">
          <Link to="/attendancedetails.">Attendance Details</Link>
        </div>
        <div className="bionav-item itemb5">
          <Link to="/result">Result</Link>
        </div>
        <div className="bionav-item itemb6">
          <Link to="/generalDetails">GeneralDetails</Link>
        </div>
        <div className="bionav-item itemb7">
          <Link to="/feedback">Feedback</Link>
        </div>
      </div>

      <div className="mark-container">
        <div className="mark-items sem1">
          <br></br>
          <br></br>
          <h2>
            <strong>SEMESTER 1</strong>
          </h2>
          <br></br>
          <label for="ms1">GPA: </label>
          &emsp;
          <input type="number" id="ms1" />
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="mark-items sem2">
          <h2>
            <strong>SEMESTER 2</strong>
          </h2>
          <br></br>
          <label for="ms2">GPA: </label>
          &emsp;
          <input type="number" id="ms2" />
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="mark-items sem3">
          <h2>
            <strong>SEMESTER 3</strong>
          </h2>
          <br></br>
          <label for="ms3">GPA: </label>
          &emsp;
          <input type="number" id="ms3" />
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="mark-items sem4">
          <h2>
            <strong>SEMESTER 4</strong>
          </h2>
          <br></br>
          <label for="ms4">GPA: </label>
          &emsp;
          <input type="number" id="ms4" />
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="mark-items sem5">
          <h2>
            <strong>SEMESTER 5</strong>
          </h2>
          <br></br>
          <label for="ms5">GPA: </label>
          &emsp;
          <input type="number" id="ms5" />
          <br></br>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
      </div>
      <Outlet />
    </div>
  );
};

export default Markdetails;
