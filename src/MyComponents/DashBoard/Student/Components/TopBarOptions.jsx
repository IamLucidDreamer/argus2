import React from 'react';
import { useHistory } from 'react-router';
import { signout } from '../../../../helpers/auth';

function TopBarOptions({ options }) {
  const history = useHistory();
  return (
    <div
      className={`absolute right-28 top-20 ${
        options
          ? 'transition-all duration-300 opacity-100 inline-block'
          : 'transition-all duration-300 opacity-0 invisible'
      }`}
    >
      <div className="flex items-center p-4 hover:bg-red-1 hover:text-white cursor-pointer w-64 h-12 mt-2 filter drop-shadow-sm rounded-xl bg-white">
        My Purchases
      </div>
      <div className="flex items-center p-4 hover:bg-red-1 hover:text-white cursor-pointer w-64 h-12 mt-2 filter drop-shadow-sm rounded-xl bg-white">
        My Transcripts
      </div>
      <div className="flex items-center p-4 hover:bg-red-1 hover:text-white cursor-pointer w-64 h-12 mt-2 filter drop-shadow-sm rounded-xl bg-white">
        Upload Documents
      </div>
      <div className="flex items-center p-4 hover:bg-red-1 hover:text-white cursor-pointer w-64 h-12 mt-2 filter drop-shadow-sm rounded-xl bg-white">
        Change Password
      </div>
      <div
        onClick={() => {
          history.push('/');
          signout();
        }}
        className="flex items-center p-4 hover:bg-red-1 hover:text-white cursor-pointer w-64 h-12 mt-2 filter drop-shadow-sm rounded-xl bg-white"
      >
        Logout
      </div>
    </div>
  );
}

export default TopBarOptions;
