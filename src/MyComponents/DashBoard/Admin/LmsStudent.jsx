import React, {useState} from 'react'
import Attendance from './Components/LMS/Form/Attendance';
import CurrentStudens from './Components/LMS/Form/CurrentStudens';
import HistoryLMS from './Components/LMS/Form/HistoryLMS';
import ProfileSearch from './Components/LMS/Form/ProfileSearch';
import NavLms from './Components/LMS/NavLms';
import ProfileBar from './Components/ProfileBar';
import SideNav from './Components/SideNav';

const LmsStudent = () => {

    const [show , setShow] = useState(1);

    return (
        <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-36 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav />
      </div>
      <div className="w-9/12 sm:w-10/12">
        <ProfileBar />
        <NavLms />
        <div className="bg-white shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-72 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <nav className="flex flex-col md:flex-row text-gray-3 text-lg items-center">
            <button onClick={() =>setShow(1)} className={`w-full md:w-1/4 py-4 rounded-2xl font-bold -mt-64 md:-mt-8 bg-white hover:shadow-none ${show ===1 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Profile Search</button>
            <button onClick={() =>setShow(2)} className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-none ${show ===2 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Current Students</button>
            <button onClick={() =>setShow(3)} className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-none ${show ===3 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Attendance</button>
            <button onClick={() =>setShow(4)} className={`w-full md:w-1/4 py-4 rounded-2xl font-bold mt-4 md:-mt-8 bg-white hover:shadow-none ${show ===4 ? 'shadow-none' : "shadow-button-shadow-2"}`}>History</button>
          </nav>
          <div className="p-4">
            <div className={show === 1 ? "block" : "hidden"}>
              <ProfileSearch />
            </div>
            <div className={show === 2 ? "block" : "hidden"}>
              <CurrentStudens />
            </div>
            <div className={show === 3 ? "block" : "hidden"}>
              <Attendance />
            </div>
            <div className={show === 4 ? "block" : "hidden"}>
              <HistoryLMS />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LmsStudent;