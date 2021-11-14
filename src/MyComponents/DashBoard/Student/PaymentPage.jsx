import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getUser } from '../../../context/actions/authActions/getUserAction';
import axiosInstance from '../../../helpers/axiosInstance';
import SideLine from '../../Components/SideLine';
import PayPal from './PayPal';

export default function PaymentPage() {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const [couponError, setCouponError] = useState(false);

  useEffect(() => {
    dispatch(getUser());
    setLoading(true);
    axiosInstance
      .get(`/material/getCourseDetails/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setCourse(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [token, courseId, dispatch]);

  const applyCoupon = (e) => {
    e.preventDefault();
    axiosInstance
      .post(
        '/coupon/applyCoupon',
        { couponCode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setCouponMsg(res?.data?.message);
        setCouponError(false);
      })
      .catch((err) => {
        setCouponMsg(err?.response?.data?.error);
        setCouponError(true);
      });
  };

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <div className="font-for-para">
        <div className="px-2 md:px-0 xl:px-0 max-w-1366 mx-auto">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            CHECKOUT
          </h1>
          <div className="flex w-full justify-between">
            <div>
              <div className="flex flex-row items-stretch w-full mt-8 mb-6">
                <SideLine />
                <h1 className="leading-tight text-3xl font-bold text-gray-3">
                  {course?.Course?.name}
                </h1>
              </div>

              <p className="leading-relaxed text-base font-medium text-gray-2 mb-6">
                {course?.Course?.description}
              </p>
            </div>
            {checkout ? (
              <PayPal course={course} />
            ) : (
              <div className="flex items-start w-5/12">
                <div className="w-8/12 mr-4">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="bg-client p-4 w-full rounded-lg"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  {couponMsg ? (
                    <div
                      className={`w-full text-xs ${
                        couponError ? 'text-red-400' : 'text-green-1'
                      }`}
                    >
                      {couponMsg}
                    </div>
                  ) : null}
                </div>
                <button
                  onClick={(e) => applyCoupon(e)}
                  className=" w-4/12 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg"
                >
                  APPLY COUPON
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
