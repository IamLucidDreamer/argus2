import { Pagination } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasketList from './BasketList';
import Table from '../../../../../../Components/reactTable';
import SelectColumnFilter from '../../../../../../../helpers/TableFilter';
import axiosInstance from '../../../../../../../helpers/axiosInstance';
import Alert from '../../../../../../Components/Alert';

const Basket = () => {
  const [basket, setBasket] = useState(true);
  const [download, setDownload] = useState(false);
  const [page, setPage] = useState(1);
  const [downloadPage, setDownloadPage] = useState(1);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [addBasketRes, setAddBasketRes] = useState({
    value: null,
    show: false,
  });

  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    success: false,
  });

  const students = useSelector((state) => state.users.students);
  const basketData = useSelector((state) => state.basket.basket).filter(
    (f) => f?.status === 'PENDING',
  );
  const downloadedData = useSelector((state) => state.basket.basket).filter(
    (f) => f?.status === 'DOWNLOADED',
  );

  const addBasket = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('jwt'));
    const id = JSON.parse(localStorage.getItem('id'));
    axiosInstance
      .post(
        `/bucket/create/${id}`,
        { bucketName: `BUK${new Date().toISOString()}`, students: [] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setAddBasketRes({
          value: res.data.data,
          show: true,
        });
      });
  };

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

  return (
    <div>
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}

      <div className="flex flex-col sm:flex-row items-center justify-around text-red-1 text-lg">
        <button
          onClick={() => {
            setBasket(true);
            setDownload(false);
          }}
          className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/5 pt-4 pb-0.5 font-bold ${
            basket
              ? 'border-b-4 border-red-1 text-red-1'
              : 'border-b-4 border-white hover:border-gray-2 text-gray-2'
          }`}
        >
          MANAGE BASKETS
        </button>
        <button
          onClick={() => {
            setDownload(true);
            setBasket(false);
          }}
          className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/5 pt-4 pb-0.5 font-bold ${
            download
              ? 'border-b-4 border-red-1 text-red-1'
              : 'border-b-4 border-white hover:border-gray-2 text-gray-2'
          }`}
        >
          DOWNLOADED
        </button>
      </div>

      <div className={basket ? 'block my-6' : 'hidden'}>
        <Pagination
          className="p-1 mb-4"
          count={Math.ceil(basketData.length / 5)}
          shape="rounded"
          onChange={(event, value) => {
            setPage(value);
          }}
        />

        <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
          <h1 className="text-center w-full lg:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Select
          </h1>
          <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Basket ID
          </h1>
          <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Date Created
          </h1>
          <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Total Students
          </h1>
          <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Status
          </h1>
        </div>
        {basketData.slice((page - 1) * 5, page * 5).map((b, index) => {
          return <BasketList b={b} setShowAlert={setShowAlert} />;
        })}
        <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>

        <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
          <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
            DELETE BASKET
          </button>
          {/* <CSVLink filename="O4F.csv" data={downloadBasket()}> */}
          {/* <button
            onClick={(e) => downloadBasket(e)}
            className="my-8 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
          >
            DOWNLOAD
          </button> */}
          {/* </CSVLink> */}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
          <button
            onClick={(e) => addBasket(e)}
            className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
          >
            Add Basket
          </button>
        </div>
        <div className={`${addBasketRes.show ? 'block' : 'hidden'}`}>
          <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
            <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Basket ID
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Date Created
            </h1>
            <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Total Students
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Status
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
            <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
              <h1 className="font-bold">{addBasketRes.value?._id}</h1>
            </div>
            <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
              <h1 className="">
                {new Date(addBasketRes.value?.createdAt).toDateString()}
              </h1>
              <h1 className="font-bold">
                {new Date(addBasketRes.value?.createdAt).toLocaleString(
                  'en-US',
                  {
                    hour: '2-digit',
                    minute: '2-digit',
                  },
                )}
              </h1>
            </div>
            <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
              <h1 className="">{addBasketRes.value?.noOfStudents}</h1>
            </div>
            <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
              <h1 className="">{addBasketRes.value?.status}</h1>
            </div>
          </div>
          <div className="border-t-3 border-b-3 lg:border-none border-red-1 lg:shadow-cards rounded-2xl my-5 pt-4 lg:px-3">
            <div className="flex flex-col text-lg mb-2 rounded-xl shadow-cards lg:shadow-none relative">
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
                <button className="mx-auto mt-2 mb-4 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg">
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={download ? 'block my-6' : 'hidden'}>
        <Pagination
          className="p-1 mb-4"
          count={Math.ceil(downloadedData.length / 5)}
          shape="rounded"
          onChange={(event, value) => {
            setDownloadPage(value);
          }}
        />
        <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
          <h1 className="text-center w-full lg:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Select
          </h1>
          <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Basket ID
          </h1>
          <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Date Created
          </h1>
          <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Total Students
          </h1>
          <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Status
          </h1>
        </div>
        {downloadedData
          .slice((downloadPage - 1) * 5, downloadPage * 5)
          .map((b, index) => {
            return <BasketList b={b} setShowAlert={setShowAlert} />;
          })}

        <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
          <button className="my-8 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg">
            DOWNLOAD AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
