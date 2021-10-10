import React from 'react'
import CourseCompletion from './Components/Forms/CourseCompletion';
import PersonalDetails from './Components/Forms/PersonalDetails';
import { TopElementHome } from './Components/TopElementHome';

const Home = () => {
  return (
    <div>
      <TopElementHome />
      <div className="flex flex-wrap items-stretch w-full max-w-1200 mx-auto"> 
        <PersonalDetails />
        <CourseCompletion />
      </div>
    </div>
  )
}

export default Home;