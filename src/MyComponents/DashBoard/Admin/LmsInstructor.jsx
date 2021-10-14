import React, {useState} from "react";
import AddInstructors from "./Components/LMS/Form/AddInstructors";
import CurrentInstructor from "./Components/LMS/Form/CurrentInstructor";
import NavLms from "./Components/LMS/NavLms";
import ProfileBar from "./Components/ProfileBar";
import SideNav from "./Components/SideNav";

const LmsInstructor = () => {

  const [show , setShow] = useState(1);

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-36 md:w-72 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full">
        <ProfileBar />
        <NavLms />
        <div className="bg-white shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-36 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <nav className="flex flex-col md:flex-row text-gray-3 text-lg items-center">
            <button onClick={() =>setShow(1)} className={`w-full md:w-1/2 py-4 rounded-2xl font-bold -mt-28 md:-mt-8 bg-white hover:shadow-none ${show ===1 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Current Instructor</button>
            <button onClick={() =>setShow(2)} className={`w-full md:w-1/2 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-none ${show ===2 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Add New Instructor</button>
          </nav>
          <div className="p-4">
            <div className={show === 1 ? "block" : "hidden"}>
              <CurrentInstructor/>
            </div>
            <div className={show === 2 ? "block" : "hidden"}>
              <AddInstructors />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LmsInstructor;
