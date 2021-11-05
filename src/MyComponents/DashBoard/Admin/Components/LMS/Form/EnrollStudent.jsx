import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import SelectColumnFilter from '../../../../../../helpers/TableFilter';
import Table from '../../../../../Components/reactTable';
import Select from 'react-select';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import Alert from '../../../../../Components/Alert';

const EnrollStudent = () => {
  const students = useSelector((state) => state.users.students);
  const classList = useSelector((state) => state.class.class);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  let options = [];
  classList.forEach((element) => {
    options.push({
      value: element._id,
      label: element.classname + '(' + element._id + ')',
    });
  });

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);

  students.forEach((element) => {
    for (const key in element) {
      if (element[key] === null) {
        element[key] = '';
      }
    }
  });

  const headCells = [
    {
      id: 'Student ID',
      accessor: '_id',
      Header: 'Student ID',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      accessor: 'name',
      Header: 'Student Name',
    },
    {
      accessor: 'phone',
      Header: 'Phone No.',
    },
    {
      id: 'Registration',
      accessor: 'createdAt',
      Header: 'Registration',
    },
    {
      id: 'City',
      accessor: 'city',
      Header: 'City',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Country',
      accessor: 'country',
      Header: 'Country',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Province',
      accessor: 'province',
      Header: 'Province',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Gender',
      accessor: 'gender',
      Header: 'Gender',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
  ];
  const columns = useMemo(() => headCells, []);

  const token = JSON.parse(localStorage.getItem('jwt'));

  const enroll = (e) => {
    e.preventDefault();
    axiosInstance
      .put(
        `/class/enroll/${selectedClass.value}`,
        { students: selected },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setSelectedClass(null);
        setShowAlert({
          show: true,
          message: 'Students enrolled successfully',
          success: true,
        });
      })
      .catch((err) => {
        setShowAlert({
          show: true,
          message: 'Students enrolled failed',
          success: false,
        });
      });
  };

  return (
    <div>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
        {showAlert.show ? (
          <Alert alert={showAlert} rmAlert={setShowAlert} />
        ) : null}
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <Select
            placeholder="Select Class"
            className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            options={options}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'lightgray',
                primary: '#BA0913',
              },
            })}
            value={selectedClass}
            onChange={(selectedOption) => {
              setSelectedClass(selectedOption);
            }}
          />
        </div>
      </form>
      <div className="relative">
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
        >
          Filter
        </button>
        <Table
          data={students}
          columns={columns}
          show={show}
          setShow={setShow}
          justList={false}
          setSelected={setSelected}
        />
        <div className="flex">
          <button
            onClick={(e) => {
              if (selectedClass) {
                enroll(e);
              } else {
                setShowAlert({
                  show: true,
                  message: 'Select a class',
                  success: false,
                });
              }
            }}
            className="mx-auto my-6 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          >
            ENROLL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollStudent;
