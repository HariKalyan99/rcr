import React from "react";
import RCRHeader from "./RCRHeader";
import Sidebar from "./Sidebar";
import Viewblogs from "./Viewblogs";
import Createblogs from "./Createblogs";

const Dashboard = ({blogsList, handlePageShowcase, showPage, addBlogs}) => {


  return (
    <div>
      <RCRHeader />
      <div className="d-flex">
        <Sidebar handlePageShowcase={handlePageShowcase} showPage={showPage}/>
        {showPage === "createBlogs" ?
        <Createblogs addBlogs={addBlogs}/> :  <Viewblogs blogsList={blogsList} />}
      </div>
    </div>
  );
};

export default Dashboard;
