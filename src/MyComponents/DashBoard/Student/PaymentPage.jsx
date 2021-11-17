import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUser } from "../../../context/actions/authActions/getUserAction";
import axiosInstance from "../../../helpers/axiosInstance";
import SideLine from "../../Components/SideLine";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaymentPage() {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponMsg, setCouponMsg] = useState(null);
  const [couponError, setCouponError] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [show, setShow] = useState(false);

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
        "/coupon/checkCoupon",
        { couponCode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setCouponDiscount(res?.data?.data?.discount);
        setCouponMsg(res?.data?.message);
        setCouponError(false);
      })
      .catch((err) => {
        setCouponDiscount(0);
        setCouponMsg(err?.response?.data?.error);
        setCouponError(true);
      });
  };

  useEffect(() => {
    if (couponCode === "") {
      setCouponDiscount(0);
    }
  }, [couponCode]);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <div className="font-for-para">
        {/* <PayPal
          show={show}
          setShow={setShow}
          course={course}
          price={
            course?.Course?.price -
            (course?.Course?.price * couponDiscount) / 100
          }
        /> */}
        <div className="px-2 md:px-0 xl:px-0 max-w-1366 mx-auto">
          <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
            CHECKOUT
          </h1>
          <div className="flex flex-col lg:flex-row w-full justify-between items-start">
            <div className="w-full lg:w-1/2">
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
            <div className="flex flex-col w-full lg:w-1/2 justify-end items-start lg:items-end lg:pl-6 mt-8 text-lg sm:text-xl">
              <div className="w-full">
                <h1 className="w-full flex justify-between font-bold">
                  <span>Price</span>
                  <span>$ {course?.Course?.price}</span>
                </h1>
                <h1 className="w-full flex justify-between font-bold">
                  <span>Coupon Discount</span>
                  <span>
                    - $ {(course?.Course?.price * couponDiscount) / 100}
                  </span>
                </h1>
                <h1 className="w-full mt-2 border-t-2 flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>
                    $
                    {course?.Course?.price -
                      (course?.Course?.price * couponDiscount) / 100}
                  </span>
                </h1>
              </div>
              <div className="flex w-full items-start mt-6">
                <div className="mr-4 w-full">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="bg-client p-4 w-full rounded-md text-lg lg:text-xl"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  {couponMsg ? (
                    <div
                      className={`w-full text-xs ${
                        couponError ? "text-red-400" : "text-green-1"
                      }`}
                    >
                      {couponMsg}
                    </div>
                  ) : null}
                </div>
                <button
                  onClick={(e) => applyCoupon(e)}
                  className=" w-full bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-md text-lg lg:text-xl"
                >
                  APPLY COUPON
                </button>
              </div>
              <div className="w-full mt-6 z-0">
                <PayPalScriptProvider
                  options={{
                    "client-id": "test",
                  }}
                >
                  <PayPalButtons
                    style={{ layout: "horizontal" }}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            description: course?.Course?.name,
                            amount: {
                              currency_code: "USD",
                              value: 1000,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={async (data, actions) => {
                      const order = await actions.order.capture();
                      console.log(order);
                    }}
                    onError={(err) => {
                      console.log(err);
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
