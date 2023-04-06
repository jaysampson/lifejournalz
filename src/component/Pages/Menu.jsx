import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faBriefcase,
  faClock,
  faFolderMinus,
  faHouse,
  faStar,
  faTag,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ icon, label, isSelected, onClick, num, update }) => {
  const isGrayLabel = (label) =>
    ["Shared", "Recently added", "Storage"].includes(label);

  return (
    <div className={isSelected ? "icon2" : "icon"} onClick={onClick}>
      <FontAwesomeIcon
        icon={icon}
        style={isGrayLabel(label) ? { color: "gray" } : null}
      />
      <span style={isGrayLabel(label) ? { color: "gray" } : null}>{label}</span>
      {/* {num && (
          <span
            style={{
              height: "20px",
              width: "30px",
              borderRadius: "10px",
              backgroundColor: "gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              marginLeft: "79px",
            }}
          >
            {num}
          </span>
        )}
        {update && (
          <span
            style={{
              height: "20px",
              width: "40px",
              borderRadius: "10px",
              backgroundColor: "#c3e4d9",
              display: "flex",
              color: "#10B982",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "73px",
            }}
          >
            {update}
          </span>
        )} */}
    </div>
  );
};

const Menu = ({
  activeComponent,
  setActiveComponent,
  selected,
  setSelected,
}) => {
  const toggleMenu = (index) => {
    setSelected(index);
  };
  return (
    <div>
      <div className="menu">
        <MenuItem
          icon={faHouse}
          label="Dashboard"
          isSelected={selected === 0}
          onClick={() => {
            toggleMenu(0);
            setActiveComponent("Component1");
          }}
        />
        <MenuItem
          icon={faList}
          label="Categories"
          isSelected={selected === 1}
          onClick={() => {
            toggleMenu(1);
            setActiveComponent("Component2");
          }}
        />
        <MenuItem
          icon={faStar}
          label="Favourites"
          isSelected={selected === 2}
          onClick={() => {
            toggleMenu(2);
            setActiveComponent("Component3");
          }}
        />
        <MenuItem
          icon={faArrowUpFromBracket}
          label="Shared"
          num="24"
          isSelected={selected === 3}
          // onClick={() => {
          //   toggleMenu(3);
          //   setActiveComponent("Component4");
          // }}
        />
        <MenuItem
          icon={faClock}
          label="Recently added"
          isSelected={selected === 4}
          num="59"
          // onClick={() => {
          //   toggleMenu(4);
          //   setActiveComponent("Component5");
          // }}
        />
        <MenuItem
          icon={faFolderMinus}
          label="Storage"
          isSelected={selected === 5}
          // onClick={() => {
          //   toggleMenu(5);
          //   setActiveComponent("Component6");
          // }}
        />
        <MenuItem
          icon={faTag}
          label="Pricing"
          update="New"
          isSelected={selected === 6}
          onClick={() => {
            toggleMenu(6);
            setActiveComponent("Component7");
          }}
        />
        <MenuItem
          icon={faBriefcase}
          label="Terms Service"
          isSelected={selected === 7}
          onClick={() => {
            toggleMenu(7);
            setActiveComponent("Component8");
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
