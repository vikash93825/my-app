import React from "react";
import { Link } from "react-router-dom";

function NavLink() {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div
          class="navbar-header"
          style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
        >
          WTF
        </div>
        <ul
          class="nav navbar-nav navbar-right"
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            className="nav-link"
            aria-current="page"
            to="/"
            style={{ paddingLeft: "10px", color: "white" }}
          >
            Fitness
          </Link>

          <Link
            className="nav-link"
            to="/"
            style={{ paddingLeft: "10px", color: "white" }}
          >
            Nutrition
          </Link>

          <Link
            className="nav-link"
            to="/"
            style={{ paddingLeft: "10px", color: "white" }}
          >
            Gyms
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavLink;
