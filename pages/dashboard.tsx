import React from "react";
import Sidebar from "../components/Sidebar";
import MyCourses from "../components/MyCourses";
import Navbar from "../components/Navbar";

function Dashboard() {
  const user = {
    firstName: "Tom",
    lastName: "Smith",
    email: "tomsmith@email.com",
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <MyCourses />
      </div>
    </div>
  );
}

export default Dashboard;
