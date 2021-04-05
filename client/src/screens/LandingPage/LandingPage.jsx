import React from "react";
import { Link } from "react-router-dom";

function LandingPage(props) {
  return (
    <div className="landing-container">
      <h1>Digital ToolBelt</h1>
      <p>
        Digital Toolbelt is designed to be another tool in a contractors tool
        belt to help manage the business. The software will help keep track of
        materials and time for a project, and keep a running total so that it is
        simple to see if a project is coming in at or under budget. This will
        help lead to more accurate bids in the future and a lead to a more
        profitable business.
      </p>
      <Link to="sign-up">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
