import React from "react";
import ReactStars from "react-stars";

function CardList({ data }) {
  return (
    <div
      className="card"
      style={{
        width: "auto",
        height: "40vh",
        backgroundImage: "linear-gradient(to right, #1D1D1D, #131313)",
        margin: "10px",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="card-body">
        <h5 className="card-title" style={{ color: "white" }}>
          {data.gym_name}
        </h5>
        <h5 className="card-title">
          <ReactStars
            count={5}
            size={24}
            color2={"white"}
            value={data.rating}
            edit={false}
          />
        </h5>
        <p className="card-text">{`${data.address1} | ${data.address2}`}</p>
      </div>
    </div>
  );
}

export default CardList;
