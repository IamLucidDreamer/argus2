import React from "react";
import ProfileBar from "./Components/ProfileBar";
import SideNav from "./Components/SideNav";

function ChangePassword() {
  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-52 md:w-72 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full">
        <ProfileBar />
        <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            CHANGE PASSWORD
          </h1>
          <form className="w-full md:w-1/2 mx-auto">
            <input
              className="w-full  py-5 px-4 border-4 focus:outline-none focus:ring-1 ring-red-1 rounded-lg my-3"
              type="name"
              placeholder="Enter Old Password"
            />
            <input
              className="w-full  py-5 px-4 border-4 focus:outline-none focus:ring-1 ring-red-1 rounded-lg my-3"
              type="name"
              placeholder="Enter New Password"
            />
            <input
              className="w-full  py-5 px-4 border-4 focus:outline-none focus:ring-1 ring-red-1 rounded-lg my-3"
              type="name"
              placeholder="Confirm New Password"
            />
            <button className="w-full mx-auto flex justify-center font-bold text-white bg-red-1 py-4 px-6 md:px-10 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl my-3 hover:shadow-button-inner-1">
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
