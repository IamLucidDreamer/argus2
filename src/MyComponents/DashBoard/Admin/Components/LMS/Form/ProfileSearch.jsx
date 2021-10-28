import React, { useMemo, useState } from 'react';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import Table from '../../../../../../MyComponents/Components/reactTable';

const ProfileSearch = () => {
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

  const handleSearch = (e) => {
    e.preventDefault();
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
    console.log(query);
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
        setUser(res.data.data);
      })
      .catch((err) => {});
  };

  console.log(user);

  const headCells = [
    {
      id: 'Student ID',
      accessor: '_id',
      Header: 'Student ID',
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
  ];
  const columns = useMemo(() => headCells, []);

  return (
    <div>
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
      <Table data={user} columns={columns} justList={true} />
    </div>
  );
};

export default ProfileSearch;
