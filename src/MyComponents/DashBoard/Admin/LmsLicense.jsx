import React, {useState} from 'react'
import Basket from './Components/LMS/Form/Basket';
import DocumentApproval from './Components/LMS/Form/DocumentApproval';
import LicensedEmployee from './Components/LMS/Form/LicensedEmployee';
import NavLms from './Components/LMS/NavLms';
import ProfileBar from './Components/ProfileBar';
import SideNav from './Components/SideNav';

export const LmsLicense = () => {

    const [show , setShow] = useState(1);

    return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-36 md:w-72 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full">
        <ProfileBar />
        <NavLms />
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-14 text-gray-3">License Management</h1>
        <div className="bg-white shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto my-6 rounded-2xl">
          <nav className="flex flex-col md:flex-row text-gray-3 text-lg items-center">
            <button onClick={() =>setShow(1)} className={`w-full md:w-1/4 py-4 rounded-2xl font-bold md:-mt-8 bg-white hover:shadow-none ${show ===1 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Document Approval</button>
            <button onClick={() =>setShow(2)} className={`w-full md:w-1/4 py-4 rounded-2xl font-bold md:-mt-8 bg-white hover:shadow-none ${show ===2 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Basket Management</button>
            <button onClick={() =>setShow(3)} className={`w-full md:w-1/4 py-4 rounded-2xl font-bold md:-mt-8 bg-white hover:shadow-none ${show ===3 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Licensed</button>
            <button onClick={() =>setShow(4)} className={`w-full md:w-1/4 py-4 rounded-2xl font-bold md:-mt-8 bg-white hover:shadow-none ${show ===4 ? 'shadow-none' : "shadow-button-shadow-2"}`}>Training Number</button>
          </nav>
          <div className="p-4">
            <div className={show === 1 ? "block" : "hidden"}>
              <DocumentApproval />
            </div>
            <div className={show === 2 ? "block" : "hidden"}>
              <Basket />
            </div>
            <div className={show === 3 ? "block" : "hidden"}>
              <LicensedEmployee />
            </div>
            <div className={show === 4 ? "block" : "hidden"}>
              <h1 className="text-5xl">Link to the Ministries Website</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LmsLicense;