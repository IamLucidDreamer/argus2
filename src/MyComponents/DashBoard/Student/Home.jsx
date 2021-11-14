import React, { useEffect } from "react";
import Tasks from "./Components/Forms/Tasks";
import JobHistory from "./Components/Forms/JobHistory";
import PersonalDetails from "./Components/Forms/PersonalDetails";
import ContactDetails from "./Components/Forms/ContactDetails";
import JobSearch from "./Components/Forms/JobSearch";
import { useSelector } from "react-redux";
import BackgroundDetails from "./Components/Forms/BackgroundDetails";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="font-for-para">
      <div className="flex flex-wrap items-stretch w-full max-w-1366 mx-auto">
        <PersonalDetails user={user} />
        <Tasks user={user} />
        <BackgroundDetails user={user} />
        <JobHistory user={user} />
        <ContactDetails user={user} />
        <JobSearch user={user} />
      </div>
    </div>
  );
};

export default Home;
