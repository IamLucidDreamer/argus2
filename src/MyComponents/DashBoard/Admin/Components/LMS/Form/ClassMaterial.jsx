import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axiosInstance from "../../../../../../helpers/axiosInstance";
import AddChapter from "./Course/AddChapter";
import AddCourse from "./Course/AddCourse";
import AddModule from "./Course/AddModule";
import AddSlide from "./Course/AddSlide";

export const ClassMaterial = () => {
  const [button, setButton] = useState({
    course: false,
    module: false,
    chapter: false,
    slide: false,
  });
  const token = JSON.parse(localStorage.getItem("jwt"));
  const [course, setCourse] = useState([]);
  const [courseRefresh, setCourseRefresh] = useState(null);

  const history = useHistory();

  useEffect(() => {
    axiosInstance
      .get("/material/getAllCourses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCourse(res.data.data);
      })
      .catch();
  }, [token, courseRefresh]);

  return (
    <div>
      <div className="w-full flex justify-evenly">
        <button
          onClick={() =>
            setButton({
              course: !button.course,
              module: false,
              chapter: false,
              slide: false,
            })
          }
          className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD COURSE
        </button>
        <button
          onClick={() =>
            setButton({
              course: false,
              module: !button.module,
              chapter: false,
              slide: false,
            })
          }
          className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD MODULE
        </button>
        <button
          onClick={() =>
            setButton({
              course: false,
              module: false,
              chapter: !button.chapter,
              slide: false,
            })
          }
          className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD CHAPTER
        </button>
        <button
          onClick={() =>
            setButton({
              course: false,
              module: false,
              chapter: false,
              slide: !button.slide,
            })
          }
          className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          ADD SLIDE
        </button>
      </div>
      <AddCourse
        button={button.course}
        setButton={setButton}
        setCourseRefresh={setCourseRefresh}
      />
      <AddModule button={button.module} setButton={setButton} course={course} />
      <AddChapter
        button={button.chapter}
        setButton={setButton}
        course={course}
      />
      <AddSlide button={button.slide} setButton={setButton} course={course} />
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Course
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Duration
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Course Description
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Created
        </h1>
      </div>
      {course?.map((c) => {
        return (
          <>
            <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl border-2 lg:border-none border-red-1">
              <h1
                onClick={() => {
                  history.push(`/dashboard/admin/lms/course/${c._id}`);
                }}
                className="lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0 hover:bg-red-1 hover:text-white font-bold cursor-pointer"
              >
                {c?.name}
              </h1>
              <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                <h1 className="font-bold">{c?.duration} min</h1>
              </div>
              <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
                <h1 className="">{c?.description}</h1>
              </div>
              <div className="flex flow-col items-center justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
                <h1>{new Date(c?.createdAt).toLocaleString("en-Us")}</h1>
              </div>
            </div>
          </>
        );
      })}
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
    </div>
  );
};

export default ClassMaterial;
