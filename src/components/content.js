import React, { useState } from "react";
import Menu from "../cards";
import Items from "./Items";
import Navbar from "./Navbar";

const categoriesList = [
  ...new Set(
    Menu.map((curItem) => {
      return curItem.category;
    })
  ),
  "All",
];
console.log("categoriesList", categoriesList);
const Content = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuItems, setMenuItems] = useState(categoriesList);
  const filterItems = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updItems = Menu.filter((curItem) => {
      return curItem.category === category;
    });
    setMenuData(updItems);
  };
  return (
    <>
      <Navbar filterItems={filterItems} menuItems={menuItems} />
      <Items menuData={menuData} />
    </>
  );
};
export default Content;
