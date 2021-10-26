import React from 'react';
import BackgroundDetails from './Components/Forms/BackgroundDetails';
import CourseCompletion from './Components/Forms/CourseCompletion';
import JobHistory from './Components/Forms/JobHistory';
import PersonalDetails from './Components/Forms/PersonalDetails';
import ContactDetails from './Components/Forms/ContactDetails';
import JobSearch from './Components/Forms/JobSearch';
import { TopElementHome } from './Components/TopElementHome';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="font-for-para">
      <div className="flex flex-wrap items-stretch w-full max-w-1366 mx-auto">
        {user.dateOfBirth ? null : <PersonalDetails />}
        {}
        <CourseCompletion />
        {user.hasCriminalRecord !== null ? null : <BackgroundDetails />}
        {user.companyName ? null : <JobHistory />}
        {user.country ? null : <ContactDetails />}

        <JobSearch />
      </div>
    </div>
  );
};

export default Home;
