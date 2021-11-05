import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import SelectColumnFilter from '../../../../../../../helpers/TableFilter';
import Table from '../../../../../../Components/reactTable';

const BasketStudents = ({ b }) => {
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const [show, setShow] = useState(false);

  const students = useSelector((state) => state.users.students);
  const token = JSON.parse(localStorage.getItem('jwt'));

  useEffect(() => {
    axiosInstance
      .get(`/bucket/get/${b._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(
          students.filter(({ _id: id1 }) =>
            res.data.data.students.some(({ studentId: id2 }) => id2 === id1),
          ),
        );
      });
  }, [b._id, students, token, refresh]);

  //   const removeStudents = (e) => {
  //     e.preventDefault();
  //     let rm = [];
  //     selected.forEach((element) => {
  //       rm.push(element.studentId);
  //     });
  //     axiosInstance
  //       .put(
  //         `/class/remove-student/${b._id}`,
  //         { students: rm },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         },
  //       )
  //       .then((res) => {
  //         setRefresh(res);
  //       })
  //       .catch();
  //   };

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
  const studentColumn = useMemo(() => headCells, []);

  return (
    <>
      {data.length === 0 ? (
        <p className="text-gray-2 text-center text-xl pb-4 font-semibold">
          No students enroll first
        </p>
      ) : (
        <>
          {' '}
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
              data={data}
              columns={studentColumn}
              show={show}
              setShow={setShow}
              justList={false}
              setSelected={setSelected}
            />
          </div>
          <div className="flex">
            <button
              //   onClick={(e) => removeStudents(e)}
              className="mx-auto mt-2 mb-4 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
            >
              REMOVE
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default BasketStudents;
