import React from 'react'
import BackgroundDetails from './Components/Forms/BackgroundDetails';
import CourseCompletion from './Components/Forms/CourseCompletion';
import JobHistory from './Components/Forms/JobHistory';
import PersonalDetails from './Components/Forms/PersonalDetails';
import ContactDetails from './Components/Forms/ContactDetails';
import JobSearch from './Components/Forms/JobSearch';
import { TopElementHome } from './Components/TopElementHome';

const Home = () => {
  return (
    <div>
      <TopElementHome />
      <div className="flex flex-wrap items-stretch w-full max-w-1366 mx-auto"> 
        <PersonalDetails />
        <CourseCompletion />
        <BackgroundDetails/>
        <JobHistory/>
        <ContactDetails />
        <JobSearch />
      </div>
    </div>
  )
}

export default Home;