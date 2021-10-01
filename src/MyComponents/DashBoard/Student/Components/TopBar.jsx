import React from "react";
import ProfilePicture from "./../../../../argus website/PNG/IMG_0118.png";

export const TopBar = () => {
  return (
    <div className="sticky top-2 rounded-2xl bg-red-1 py-6 mx-2 mt-2">
      

      <div className="-mb-28 ">
        <img
          src={ProfilePicture}
          alt="Profile"
          className="w-20 h-20 m-1 rounded-full border-4 border-client mx-auto"
        />
        <div className="text-center">
          <h1 className="text-base font-bold text-gray-3">Name Here</h1>
          <p className="text-sm title-font text-gray-2">Profile ID</p>
        </div>
      </div>
      
      <div className="float-right -mt-10 flex">
        <img
          src={ProfilePicture}
          alt="Profile"
          className="w-12 h-12 mx-4 my-2 rounded-full"
        />
        <img
          src={ProfilePicture}
          alt="Profile"
          className="w-12 h-12 mx-4 my-2 rounded-full"
        />
        <img
          src={ProfilePicture}
          alt="Profile"
          className="w-12 h-12 mx-4 my-2 rounded-full"
        />
      </div>

    </div>
  );
};
