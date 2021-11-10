import React, { useEffect, useState } from "react";
import ProfileBar from "../../../ProfileBar";
import SideNav from "../../../SideNav";

const ManageCoupons = () => {
  const [addCoupon, setAddCoupon] = useState(false);

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-36 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav />
      </div>
      <div className="w-9/12 sm:w-10/12">
        <ProfileBar />
        <div className="bg-white px-4 pb-10 shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-36 md:mt-0 mb-10 md:my-16 rounded-2xl">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            COUPONS
          </h1>
          <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
            <h1 className="text-center w-full lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Coupon ID
            </h1>
            <h1 className="text-center w-full lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Coupon Code
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Validity
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Usage
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Discount
            </h1>
            <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Delete
            </h1>
          </div>
          <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
          <div className="flex">
            <button
              onClick={() => setAddCoupon(!addCoupon)}
              className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
            >
              NEW COUPON
            </button>
          </div>
          <div className={addCoupon ? "block" : "hidden"}>
            <form className="flex flex-wrap justify-center items-center text-lg font-bold text-gray-3">
              <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <div className="w-full lg:w-5/12">
                  <input
                    type="text"
                    placeholder="Coupon ID Pre-fetched"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  />
                </div>
                <div className="w-full lg:w-5/12">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <div className="w-full lg:w-5/12">
                  <input
                    type="datetime-local"
                    placeholder="Validity"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  />
                </div>
                <div className="w-full lg:w-5/12">
                  <input
                    type="Number"
                    placeholder="Usage"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
                <div className="w-full lg:w-5/12">
                  <input
                    type="Number"
                    placeholder="Discount Percentage"
                    className="bg-client p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  />
                </div>
                <div className="w-full lg:w-5/12">
                  <input
                    type="Number"
                    placeholder="Discount Percentage"
                    className="bg-client invisible p-5 w-full rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="my-8 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
              >
                ADD COUPON
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;
