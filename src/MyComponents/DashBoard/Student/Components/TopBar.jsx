import React, { useState } from 'react';
import ProfilePicture from './../../../../argus website/PNG/IMG_0118.png';
import TopBarOptions from './TopBarOptions';
import Notify from './Notify';
import { useSelector } from 'react-redux';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const TopBar = () => {
  const [topbarOptions, setTopbarOptions] = useState(false);
  const [notify, setNotify] = useState(false);
  const user = useSelector((state) => state.user.user);

  return (
    <div className="max-w-1200 mx-auto">
      <div className="pt-3 flex flex-row justify-between items-center">
        <h1 className="ml-9 text-2xl text-gray-3 font-bold font-for-para">
          Hii,
          {user?.name ? (
            <span>
              ,{' '}
              <span className="text-red-1">
                {user?.name + ' ' + (user?.lastname ? user?.lastname : '')}
              </span>
            </span>
          ) : null}
        </h1>
        <div className="ml-auto flex justify-around items-center">
          <div className="text-xl mx-1 sm:mr-4 text-gray-3">
            {new Date().toLocaleDateString('en-GB')}
          </div>

          <button
            onClick={() => {
              setNotify(!notify);
              setTopbarOptions(false);
            }}
            className="inline-block mx-2 md:mx-4 bg-gray-200 hover:bg-red-1 rounded-xl p-2 text-gray-2 hover:text-white"
          >
            <NotificationsOutlinedIcon fontSize="large" />
          </button>
          <button
            onClick={() => {
              setTopbarOptions(!topbarOptions);
              setNotify(false);
            }}
            className="inline-block mx-2 sm:mx-8 2xl:mr-0 md:ml-4 bg-gray-200 hover:bg-red-1 rounded-xl p-2 text-gray-2 hover:text-white"
          >
            <PersonOutlineOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>
      <TopBarOptions options={topbarOptions} />
      <Notify notify={notify} />
    </div>
  );
};
