import React, { useContext } from "react";
import RCRHeader from "./RCRHeader";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

// const {showPage} = useContext(BlogStore)
  return (
    <div>
      <RCRHeader />
      <div className="d-flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
