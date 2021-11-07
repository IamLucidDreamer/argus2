import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ClassList from './ClassList';
import { Pagination } from '@mui/material';
import Loader from 'react-loader-spinner';
import AddClass from './AddClass';
import EditClass from './EditClass';
import Alert from '../../../../../../Components/Alert';
const ClassOverview = () => {
  const [newclass, setnewclass] = useState(false);
  const classList = useSelector((state) => state.class.class);
  const loading = useSelector((state) => state.class.loading);
  const [page, setPage] = useState(1);
  const [pageData, setpageData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  useEffect(() => {
    setpageData(classList.slice((page - 1) * 5, page * 5));
  }, [page, classList]);

  return (
    <div>
      {loading ? (
        <>
          <div className="w-full flex items-center justify-center">
            <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
          </div>
        </>
      ) : (
        <>
          <div className="px-1">
            {showAlert.show ? (
              <Alert alert={showAlert} rmAlert={setShowAlert} />
            ) : null}
          </div>

          <Pagination
            className="p-1 mb-4"
            count={Math.ceil(classList.length / 5)}
            shape="rounded"
            onChange={(event, value) => {
              setPage(value);
            }}
          />

          <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
            <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Class
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Date
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Enrolled
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Location
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Instructor
            </h1>
            <h1 className="text-center lg:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Edit
            </h1>
          </div>
          {pageData.map((c) => {
            return (
              <>
                <ClassList
                  c={c}
                  editclass={setEdit}
                  selectedClass={setSelectedClass}
                />
              </>
            );
          })}
        </>
      )}

      <div className="flex">
        <button
          onClick={() => setnewclass(!newclass)}
          className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          NEW CLASS
        </button>
      </div>
      {newclass ? <AddClass /> : null}
      {edit ? (
        <EditClass
          selectedClass={selectedClass}
          setEdit={setEdit}
          setShowAlert={setShowAlert}
        />
      ) : null}
    </div>
  );
};

export default ClassOverview;
