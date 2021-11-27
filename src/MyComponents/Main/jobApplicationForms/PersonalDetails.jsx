// We missed a page in the Apply now form.

import React from "react";
import Select from "react-select";

const PersonalDetails = ({ setFormNo, formNo, formData, setFormData }) => {
  return (
    <div className="p-2">
      <div className="w-full h-96 overflow-y-scroll ">
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">
              <span className="text-red-1">*</span>First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {!formData.name ? (
              <div className="w-full text-xs text-red-1 mt-1">*Required</div>
            ) : null}
          </div>
          <div className="w-full lg:ml-2">
            <label className="text-gray-400">Last Name</label>
            <input
              type="email"
              placeholder="Doe"
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2  rounded-lg"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {!formData.email ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">Phone Number</label>
            <input
              type="number"
              placeholder="6472891070"
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {!formData.name ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
          <div className="w-full lg:ml-2">
            <label className="text-gray-400">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2  rounded-lg"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {!formData.email ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">Country</label>
            <input
              type="Country"
              placeholder="Canada"
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {!formData.name ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
          <div className="w-full lg:ml-2">
            <label className="text-gray-400">State/Province</label>
            <input
              type="email"
              placeholder="Ontario"
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2  rounded-lg"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {!formData.email ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">Address</label>
            <input
              type="address"
              placeholder="350 Rutherford Road South Brampton ON L6W-4N6 Suite 210 Plaza 2"
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {!formData.name ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full px-10 flex my-0.5 lg:my-6 ">
          <button className="flex-1 invisible mr-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl  hover:shadow-button-inner-1">
            BACK
          </button>
          <button
            onClick={() => setFormNo(3)}
            className="flex-1 ml-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl  hover:shadow-button-inner-1"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
