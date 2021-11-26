import React from "react";

const WorkStatus = ({ setFormNo, formNo, formData, setFormData }) => {
  return (
    <div className="p-2">
      <div className="w-full h-96 overflow-y-scroll ">
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 text-base lg:text-base">
          <div className="w-full lg:mr-2">
            <label className="text-gray-400">Enter your name</label>
            <input
              type="text"
              placeholder="Name"
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
            <label className="text-gray-400">Enter your email</label>
            <input
              type="email"
              placeholder="Email"
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
        <div className="w-full flex flex-col px-2 lg:px-10 mt-6">
          <label className="text-gray-400">
            Are you Eligible to Work in Canada?
          </label>
          <div className="flex">
            <div
              onClick={() =>
                setFormData({ ...formData, elegibleToWorkInCanada: true })
              }
              className={`${
                formData.elegibleToWorkInCanada
                  ? "bg-red-1 text-white"
                  : "bg-white text-gray-400"
              }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-2 lg:p-5 mr-2 mt-2 w-full rounded-lg`}
            >
              YES
            </div>
            <div
              onClick={() =>
                setFormData({ ...formData, elegibleToWorkInCanada: false })
              }
              className={`${
                formData.elegibleToWorkInCanada === false
                  ? "bg-red-1 text-white"
                  : "bg-white text-gray-400"
              }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-2 lg:p-5 ml-2 mt-2 w-full rounded-lg`}
            >
              NO
            </div>
          </div>
          {!formData.elegibleToWorkInCanada ? (
            <div className="w-full text-xs text-red-400 mt-1">*Required</div>
          ) : null}
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 mt-6">
          <div className="mr-2 flex-1">
            <label className="text-base text-gray-400">
              Type of Eligibility
            </label>
            <select
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.eligibilityType}
              onChange={(e) =>
                setFormData({ ...formData, eligibilityType: e.target.value })
              }
            >
              <option selected disabled value={null}>
                Select eligibility
              </option>
              <option value="Eligibility 1">Eligibility 1</option>
              <option value="Eligibility 2">Eligibility 2</option>
            </select>
            {!formData.eligibilityType ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
          <div className="flex flex-col flex-1 ml-2">
            <label className="text-base text-gray-400">
              Are you Eligible to Work in Canada?
            </label>
            <div className="flex">
              <div
                onClick={() =>
                  setFormData({ ...formData, validSecurityGuardLicence: true })
                }
                className={`${
                  formData.validSecurityGuardLicence
                    ? "bg-red-1 text-white"
                    : "bg-white text-gray-400"
                }  cursor-pointer hover:bg-red-1 hover:text-white text-center p-2 lg:p-5 mr-2 mt-2 w-full rounded-lg`}
              >
                YES
              </div>
              <div
                onClick={() =>
                  setFormData({ ...formData, validSecurityGuardLicence: false })
                }
                className={`${
                  formData.validSecurityGuardLicence === false
                    ? "bg-red-1 text-white"
                    : "bg-white text-gray-400"
                }  cursor-pointer hover:bg-red-1 hover:text-white text-center p-2 lg:p-5 ml-2 mt-2 w-full rounded-lg`}
              >
                NO
              </div>
            </div>
            {formData.validSecurityGuardLicence === null ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row px-2 lg:px-10 mt-6">
          <div className="mr-2 flex-1">
            <label className="text-base text-gray-400">
              Security Guard License Number
            </label>
            <input
              type="text"
              placeholder="License number"
              className="p-2 lg:p-5 mt-2 w-full focus:outline-none ring-2 ring-white focus:ring-gray-2 rounded-lg"
              value={formData.licenceNo}
              onChange={(e) =>
                setFormData({ ...formData, licenceNo: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col flex-1 ml-2">
            <label className="text-base text-gray-400">Do you drive?</label>
            <div className="flex">
              <div
                onClick={() => setFormData({ ...formData, canDrive: true })}
                className={`${
                  formData.canDrive
                    ? "bg-red-1 text-white"
                    : "bg-white text-gray-400"
                }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-2 lg:p-5 mr-2 mt-2 w-full rounded-lg`}
              >
                YES
              </div>
              <div
                onClick={() => setFormData({ ...formData, canDrive: false })}
                className={`${
                  formData.canDrive === false
                    ? "bg-red-1 text-white"
                    : "bg-white text-gray-400"
                }  cursor-pointer hover:bg-red-1 hover:text-white text-md text-center p-2  lg:p-5 ml-2 mt-2 w-full rounded-lg`}
              >
                NO
              </div>
            </div>
            {formData.canDrive === null ? (
              <div className="w-full text-xs text-red-400 mt-1">*Required</div>
            ) : null}
          </div>
        </div>
        <div className="w-full px-10 flex my-6 ">
          <button className="flex-1 invisible mr-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner">
            BACK
          </button>
          <button
            onClick={() => setFormNo(2)}
            className="flex-1 ml-2 font-bold text-white bg-red-1 py-2 lg:py-4 px-3 md:px-8 lg::px-16 rounded-lg hover:bg-white border-4 border-double  border-red-1 hover:text-red-1  text-2xl mt-6 sm:mt-0 mb-10 md:mb-0 hover:shadow-button-inner"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkStatus;
