import React, { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axiosInstance from '../../../../../helpers/axiosInstance';
import { docsName } from '../../DocsData';

const Tasks = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    setLoading(true);
    axiosInstance
      .get(`/docs2/getUserDocs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setDocs(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let arr = [];
    if (user?.employmentRecord?.length === 0) {
      arr.push(`Add employment record`);
    }
    if (!user?.jobSearch?.looking) {
      arr.push(`Add job search deatils`);
    }

    if (!user?.dateOfBirth) {
      arr.push(`Add personal details`);
    }
    if (!user?.hasCriminalRecord) {
      arr.push(`Add background details`);
    }
    if (!user?.street) {
      arr.push(`Add contact details`);
    }
    if (!user?.courses?.length === 0) {
      arr.push(`Buy a course`);
    }

    docsName.forEach((element) => {
      let doc = docs.filter((d) => d.name === element);
      if (doc.length !== 0) {
        if (doc[0].isApproved === false) {
          arr.push(`${element} doc disapproved upload again.`);
        }
      } else {
        if (element !== 'Additional Doc 1' && element !== 'Additional Doc 2')
          arr.push(`Upload ${element} doc.`);
      }
    });

    setTasks(arr);
  }, [docs, user]);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-box overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
              s
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h1 className="text-lg text-gray-3 font-bold mx-5">To Do</h1>
        </div>

        <div className="flex flex-col text-black font-bold">
          <div className="flex flex-wrap items-center border-b-2 border-black p-4">
            <h1 className="w-2/12">S. No. </h1>
            <p className=" pl-1">Name of the task.</p>
            {/* <div className="">Status</div> */}
          </div>
          {tasks?.map((t, index) => {
            return (
              <div className="flex flex-wrap  items-center border-b-2 border-black p-4">
                <h1 className="w-2/12">{index + 1}. </h1>
                <p className="text-gray-2  pl-1">{t}</p>
                {/* <div className="bg-green-1 text-white p-0.5 rounded-full">
                  <CheckCircleOutlineIcon />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
