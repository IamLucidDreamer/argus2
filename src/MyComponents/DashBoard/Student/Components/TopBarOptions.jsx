import React from 'react';
import { useHistory } from 'react-router';
import { signout } from '../../../../helpers/auth';

function TopBarOptions({ options }) {
  const history = useHistory();
  return (
    <div
      className={`z-50 w-56 sm:w-64 absolute right-4 sm:right-10 md:right-4 top-17 font-medium text-gray-3 bg-bg-card shadow-button-shadow-2 rounded-2xl ${
        options
          ? 'transition-all duration-300 opacity-100 inline-block'
          : 'transition-all duration-300 opacity-0 invisible'
      }`}
    >
      <div className="p-5 bg-white rounded-2xl rounded-br-full">
        <div className="flex items-center pl-6 py-3.5 hover:bg-red-1 hover:text-white cursor-pointer shadow-button-inner-1 rounded-xl bg-gray-200">
          My Purchases
        </div>
        <div className="flex items-center pl-6 py-3.5 hover:bg-red-1 hover:text-white cursor-pointer shadow-button-inner-1 rounded-xl bg-gray-200 mt-3">
          My Transcripts
        </div>
        <div className="flex items-center pl-6 py-3.5 hover:bg-red-1 hover:text-white cursor-pointer shadow-button-inner-1 rounded-xl bg-gray-200 mt-3">
          Upload Documents
        </div>
        <div className="flex items-center pl-6 py-3.5 hover:bg-red-1 hover:text-white cursor-pointer shadow-button-inner-1 rounded-xl bg-gray-200 mt-3">
          Change Password
        </div>
        <div
          onClick={() => {
            history.push('/');
            signout();
          }}
          className="flex items-center pl-6 py-3.5 hover:bg-red-1 hover:text-white cursor-pointer shadow-button-inner-1 rounded-xl bg-gray-200 mt-3"
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default TopBarOptions;