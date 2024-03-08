import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backward from "../../assests/singleCard/backward.png";
import "./Dashboard.css";

export const Dashboard = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const ListAll = () => {
    navigate("/");
  };
  return (
    <>
      <div className="appTittleHead">
        {pathname !== '/' && <div  
        className="backward-button-head">
          <img
            className="backward-home-button"
            onClick={ListAll}
            src={backward}
            alt="<"

          /> 
        </div>}
        <h1 className="appTitle">The Rick and Morty</h1>
      </div>
    </>
  );
};
