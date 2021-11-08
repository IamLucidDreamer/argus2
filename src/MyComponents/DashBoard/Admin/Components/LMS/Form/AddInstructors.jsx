import React, { useMemo, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../../../../context/actions/lmsActions/userAction';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import InsTable from '../../../../../../MyComponents/Components/insTable';
import Alert from '../../../../../Components/Alert';

const AddInstructors = () => {
  const [searchParams, setSearchParams] = useState({
    _id: '',
    createdAt: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    city: '',
  });
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });
  const token = JSON.parse(localStorage.getItem('jwt'));

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    const query = {};
    for (let key in searchParams) {
      if (searchParams[key] !== '') {
        if (key === 'createdAt') {
          query[key] = new Date(searchParams[key]).toISOString();
        } else {
          query[key] = searchParams[key];
        }
      }
    }
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .post(
        `/user/get-user`,
        { query: query },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setUser(res?.data?.data?.filter((f) => f.role !== 4));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const headCells = [
    {
      id: 'User ID',
      accessor: '_id',
      Header: 'User ID',
    },
    {
      accessor: 'name',
      Header: 'User Name',
    },
    {
      accessor: 'phone',
      Header: 'Phone No.',
    },
    {
      id: 'Email',
      accessor: 'email',
      Header: 'Email',
    },
    {
      id: 'City',
      accessor: 'city',
      Header: 'City',
    },
    {
      id: 'Country',
      accessor: 'country',
      Header: 'Country',
    },
    {
      id: 'Province',
      accessor: 'province',
      Header: 'Province',
    },
    {
      id: 'Gender',
      accessor: 'gender',
      Header: 'Gender',
    },
    {
      id: 'Action',
      accessor: 'Action',
      Header: 'Action',
    },
  ];
  const columns = useMemo(() => headCells, []);

  return (
    <div>
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <input
            type="date"
            placeholder="Name of the student"
            value={searchParams.createdAt}
            onChange={(e) =>
              setSearchParams({ ...searchParams, createdAt: e.target.value })
            }
            className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
          <input
            type="text"
            placeholder="Student ID"
            value={searchParams._id}
            onChange={(e) =>
              setSearchParams({ ...searchParams, _id: e.target.value })
            }
            className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <input
            type="text"
            placeholder="First Name"
            value={searchParams.name}
            onChange={(e) =>
              setSearchParams({ ...searchParams, name: e.target.value })
            }
            className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={searchParams.lastname}
            onChange={(e) =>
              setSearchParams({ ...searchParams, lastname: e.target.value })
            }
            className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <input
            type="email"
            placeholder="Email"
            value={searchParams.email}
            onChange={(e) =>
              setSearchParams({ ...searchParams, email: e.target.value })
            }
            className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
          <input
            type="text"
            placeholder="Course DropDown"
            className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
          <input
            type="number"
            placeholder="Phone Number"
            value={searchParams.phone}
            onChange={(e) =>
              setSearchParams({ ...searchParams, phone: e.target.value })
            }
            className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
          <input
            type="text"
            placeholder="City"
            value={searchParams.city}
            onChange={(e) =>
              setSearchParams({ ...searchParams, city: e.target.value })
            }
            className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
        </div>
        <button
          onClick={(e) => handleSearch(e)}
          className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          SEARCH
        </button>
      </form>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {user.length !== 0 ? (
            <>
              <InsTable
                data={user}
                columns={columns}
                show={show}
                setShow={setShow}
                justList={true}
                setSelected={setSelected}
                func={(userId) => {
                  axiosInstance
                    .put(
                      `/user/updateRole/${userId}`,
                      { role: 4 },
                      {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      },
                    )
                    .then(() => {
                      setShowAlert({
                        show: true,
                        message: 'Added Successfully',
                        success: true,
                      });
                      dispatch(getUsers());
                    })
                    .catch((err) => {
                      setShowAlert({
                        show: true,
                        message: 'Error adding instructor',
                        success: false,
                      });
                    });
                }}
                text="ADD"
              />
            </>
          ) : (
            <p className="w-full text-center text-xl font-bold text-gray-400">
              No user
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default AddInstructors;
