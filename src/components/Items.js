import React from "react";
const styleObj = {
  border: "1px solid",
  width: "200px",
  textAlign: "center",
  margin: "15px",
  float: "left",
};
const Items = ({ menuData }) => {
  console.log("menuData", menuData);
  return (
    <>
      {menuData.map((item) => {
        const { id, heading, label, category, description } = item;
        return (
          <div key={id} style={styleObj}>
            <h1>{heading}</h1>
            <h2>{label}</h2>
            <p>{category}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Items;
