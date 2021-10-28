import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import ProfilePicture from './../../../../../../argus website/PNG/IMG_0118.png';

const Message = () => {
  const [messageInput, setMessageInput] = useState(false);
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .get(`/message/get-all?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setNoOfPages(res?.data?.data?.pageCount);
        setMessages(res?.data?.data?.messages);
      });
  }, [page]);

  return (
    <div>
      <div className="flex">
        <button
          onClick={() => setMessageInput(!messageInput)}
          className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          NEW MESSAGE
        </button>
      </div>
      <div className={messageInput ? 'block' : 'hidden'}>
        <form className="flex flex-wrap justify-center items-center text-lg font-bold">
          <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
            <input
              type="text"
              placeholder="Name Autofill"
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
            <input
              type="date"
              placeholder="AUtofill the Date"
              className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
          </div>
          <input
            type="text"
            placeholder="Subject Line"
            className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:my-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
          <textarea
            type="textarea"
            placeholder="Message"
            className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:mt-4 h-80 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
          />
          <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
            ADD DELAY of 60 sec SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="flex justify-between w-full">
        <h1 className="text-xl font-bold my-4">Message Board</h1>
        <Pagination
          count={noOfPages}
          shape="rounded"
          onChange={(event, value) => {
            setPage(value);
          }}
        />
      </div>
      {messages.map((m) => {
        return (
          <div className="border-b-3 border-client text-lg py-2 px-4 leading-snug text-gray-2 mb-4">
            <div className="flex my-2">
              <img
                className="w-12 h-12 mr-3 rounded-lg"
                src={ProfilePicture}
                alt=""
              />
              <div className="border-3 border-white px-2 w-full rounded-lg">
                <div className="block mb-1 font-bold">{m.userName}</div>
                {/* <div className="block mb-1 text-xs">CEO</div> */}
              </div>
            </div>
            <div className="font-bold mt-4 mb-1.5">
              Subject : Lorem ipsum, dolor sit amet.
            </div>
            {m.message}
            <div className="block mb-1 text-xs font-bold text-right mt-1">
              {new Date(m?.createdAt).toLocaleDateString()}
              {new Date(m?.createdAt).toLocaleTimeString()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Message;
