import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Constants/Constant";
import headerImg from "../img/headerImg.png";
import CardList from "./CardList";

function HomePage() {
  const [values, setValues] = useState([]);
  console.log(values);

  useEffect(() => {
    axios
      .get(`${baseUrl}/nearestgym?lat=30.325488815850512&long=78.0042384802231`)
      .then(function (response) {
        console.log(response);
        setValues([...response.data["data"]]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-16">
          <img
            src={headerImg}
            alt="dsd"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4" style={{ color: "white", padding: "10px" }}>
          <h2>Filters</h2>
        </div>
        <div
          className="col-8"
          style={{
            overflowX: "none",
            overflowY: "scroll",
            height: "50vh",
            textAlign: "justify",
            scrollbarColor: "red yellow",
          }}
        >
          {values?.map((ele) => {
            return (
              <div key={ele.user_id}>
                <CardList data={ele} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
