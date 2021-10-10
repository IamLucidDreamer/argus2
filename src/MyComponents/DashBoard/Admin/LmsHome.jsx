import React from 'react'
import SideNav from './Components/SideNav';
import ProfileBar from './Components/ProfileBar';


const LmsHome = () => {
    return (
        <div className="w-full flex flew-col md:flex-row">
      <div className="w-52 md:w-72 bg-red-1">
        <SideNav />
      </div>
        <div className="w-full">
          <ProfileBar />
          <div>
            
            
          </div>
        </div>
      </div>
    )
}

export default LmsHome;