import { IconButton } from '@mui/material';
import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const ShowDoc = ({ show, setShow, data }) => {
  console.log(data);
  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white rounded-lg w-3/5">
        <div className="w-full flex justify-end p-4">
          <IconButton onClick={() => setShow(false)}>
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 h-96"></div>
          <div className="w-1/2">
            <div className="p-2 mb-4">
              <h1 className="text-2xl text-gray-2 ">
                Student Id:
                <span className="font-bold ml-3">{data?.userId}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Student Name:
                <span className="font-bold ml-3">{data?.username}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Document Name:
                <span className="font-bold ml-3">{data?.name}</span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Created At:
                <span className="font-bold ml-3">
                  {new Date(data?.createdAt).toDateString()}
                </span>
              </h1>
              <h1 className="text-2xl text-gray-2">
                Document Status:
                <span className="font-bold ml-3">
                  {data?.isApproved === '' ? 'No Action Taken' : null}
                  {data?.isApproved === true ? 'Approved' : null}
                  {data?.isApproved === false ? 'Disapproved' : null}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDoc;
