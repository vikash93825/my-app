import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, cityList } from "../Constants/Constant";
import headerImg from "../img/headerImg.png";
import CardList from "./CardList";

function HomePage() {
  const [values, setValues] = useState([]);
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);

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

  const handleCity = (value) => {
    // console.log(value);
    setCity(value);
    axios
      .get(`${baseUrl}/places`)
      .then(function (response) {
        setCityData([...response.data["data"]]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          <div>
            <input label="Location" name="location" placeholder="Location" />
          </div>
          <div>
            {/* <input type="text" name="cities" placeholder="City" /> */}
            <select
              name="city"
              id="city"
              onChange={(e) => handleCity(e.target.value)}
            >
              {cityList.map((ele, index) => {
                return <option value={ele}>{ele}</option>;
              })}
            </select>
          </div>
          <div>
            <ul>
              {cityData?.filter((ele) => {
                console.log(ele);
                if (ele.city === city) {
                  return <li>{`${ele.address1} ${ele.address2}`}</li>;
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        </div>
        <div
          className="col-8"
          style={{
            overflowX: "none",
            overflowY: "scroll",
            height: "60vh",
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
