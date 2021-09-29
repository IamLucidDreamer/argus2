import React, { useState } from "react";
import about_image from "./../../argus website/PNG/Video.png";
import SideBar from "./../Components/SideBar.jsx";
import SideLine from "./../Components/SideLine";

const Courses = () => {

    const[faq , setFaq] =  useState(0);

    return (
      <div className="font-for-para">
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg bg-center">
          <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
                COURSES
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-no-repeat bg-mapbg bg-contain">
          <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto">
            <div className="flex flex-wrap my-12">
              <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                <img src={about_image} alt="Training Page" className="w-full" />
                <div className="flex flex-row items-stretch w-full mt-14 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Road to Success
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  Argus Institute‘s Basic Security Training Course gives you
                  everything you need to prepare for your Ontario Security Guard
                  Licence test. No appointment is required. You may stop by
                  Monday to Friday from 10:00 A.M. until 6 P.M. to register.
                </p>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  You can also take advantage of our Online Learning Platform
                  that features SelfPaced Online Courses (SPOC), optional live
                  instructor-led sessions within our Virtual Training Room
                  (VTR), and 8 hours of in-classroom First Aid/CPR Level C
                  certification training.
                </p>

                <div className="flex flex-row items-stretch w-full mt-8 mb-6">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Basic Security Traning Course (online) $149.99
                  </h1>
                </div>
                <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                  You can take advantage of our Online Learning Platform that
                  features Self-Paced Online Courses (SPOC), optional live
                  instructor-led sessions within our Virtual Training Room
                  (VTR), and 8 hours of in-classroom First Aid/CPR Level C
                  certification training.
                </p>
                <button className="mx-auto md:mx-0 font-bold text-white bg-red-1 py-4 px-8 md:px-16 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl mt-10 sm:mt-0 hover:shadow-button-inner mb-8">
                  REGISTER
                </button>

                <div className="flex flex-row items-stretch w-full mt-8 mb-6">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Basic Security Training Course – (In-class room) $199.99
                  </h1>
                </div>
                <ul class="text-gray-2 font-medium text-lg mb-6">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Course
                    is five days (40 hours) Monday – Friday, 8:30am – 5:00pm
                  </li>
                  <li>
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Comprehensive Security Manual is included{" "}
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Exceeds
                    Ontario government standards
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Our
                    guarantee – if you fail the ministry test, you can retake
                    the course for free!
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Courses
                    run weekly in Brampton.{" "}
                  </li>
                </ul>
                <button className="mx-auto md:mx-0 font-bold text-white bg-red-1 py-4 px-8 md:px-16 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl mt-10 sm:mt-0 hover:shadow-button-inner mb-8">
                  REGISTER
                </button>

                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Basic Security Training Course topics
                  </h1>
                </div>
                <ul className="text-gray-2 font-medium text-lg flex flex-col md:flex-row mb-6">
                  <div className="">
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                      Introduction to the Security Industry
                    </li>
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span> Basic
                      Procedures{" "}
                    </li>
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                      Regulations{" "}
                    </li>
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span> Use
                      of Force Theory
                    </li>
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                      Emergencies{" "}
                    </li>
                  </div>
                  <div className="md:mx-10">
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                      Health & Safety
                    </li>
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                      Canadian Legal System & Authorities{" "}
                    </li>
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                      Communication I & II{" "}
                    </li>
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                      Conflict Resolution
                    </li>
                    <li className="flex flex-row items-start my-0.5">
                      <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                      Diversity & Sensitivity
                    </li>
                  </div>
                </ul>
                <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    FAQ
                  </h1>
                </div>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(1)}>
                  <span className="text-red-1 font-bold">1.</span> Where do I
                  take the test?
                  <div className={faq === 1 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>Testing services for the Ministry of Community Safety and Correctional Services, Private Security Investigator Security Guards Branch is only available through an approved agency called SERCO. Please be cautious of other entities who suggest they can offer testing services. SERCO, operating as Ontario Security Guard and Private Investigator may be contacted by telephone at 1-866-248-2555, 8:00 am to 5:00 pm, Monday to Friday or through their website at: <a href="http://www.ontariosecuritytesting.com" target="_blank" rel="noreferrer" className="text-red-1 hover:underline">www.ontariosecuritytesting.com </a>
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(2)}>
                  <span className="text-red-1 font-bold">2.</span> Is there a website to answer my questions?
                  <div className={faq === 2 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>Yes, please visit <a href="http://www.ontariosecuritytesting.com" target="_blank" rel="noreferrer" className="text-red-1 hover:underline">www.ontariosecuritytesting.com</a> for all inquiries.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(3)}>
                  <span className="text-red-1 font-bold">3.</span> How much does it cost?
                  <div className={faq === 3 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>The test fee is $66.50 plus applicable taxes.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(4)}>
                  <span className="text-red-1 font-bold">4.</span> Does this fee include the cost of my license?
                  <div className={faq === 4 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>The licensing fee and test fee are two separate costs — one for the test and one for the license.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(5)}>
                  <span className="text-red-1 font-bold">5.</span> Where do I take the training?
                  <div className={faq === 5 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>Training programs are offered at three Argus Institute located at 350 Rutherford Road South Brampton ON L6W 4N6 Plaza 2 Suite 210. Course is offered every other week.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(6)}>
                  <span className="text-red-1 font-bold">6.</span> Is everything included in the price of the course?
                  <div className={faq === 6 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>Yes. There are no hidden fees. Study manual, First Aid/CPR certification, license assistance, and notary services are all included.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(7)}>
                  <span className="text-red-1 font-bold">7.</span> What is the cost to the five days of training?
                  <div className={faq === 7 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>The training will be provided to non-licensed persons who want to become security guards at a cost of $199.00 plus HST.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(8)}>
                  <span className="text-red-1 font-bold">8.</span> If I have to take the test more than once, do I have to pay again each time?
                  <div className={faq === 8 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>Yes, if you fail the test you must pay to re-write it.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(9)}>
                  <span className="text-red-1 font-bold">9.</span> Do I have to take the test each time my license is going to expire?
                  <div className={faq === 9 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>No, you only need to pass the test once to be qualified for license renewals.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(10)}>
                  <span className="text-red-1 font-bold">10.</span> How many questions are on the test?
                  <div className={faq === 10 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>The test is comprised of 60 multiple choice questions with four possible answers each. The test is supervised by a SERCO ‘Invigilator’, an employee assigned to supervise all test participants to ensure that all rules are adhered to. Please see the SERCO website below for more details: <a href="http://www.ontariosecuritytesting.com/candidate_protocol.html" target="_blank" rel="noreferrer" className="text-red-1 hover:underline">www.ontariosecuritytesting.com/candidate_protocol.html</a>
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(11)}>
                  <span className="text-red-1 font-bold">11.</span> How much time is given to complete the test?
                  <div className={faq === 11 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>The time limit for the test is 75 minutes. Breaks are allowed only under strict supervision and details are available at the website. If you finish your test early, you must remain in the testing facility for a minimum of 60 minutes before you can submit your test to the Invigilator and be excused from the facility.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(12)}>
                  <span className="text-red-1 font-bold">12.</span> When will I get back my test results?
                  <div className={faq === 12 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>The results of the test are typically made available within 24 hours of completion. However, it may take up to 2 – 5 business days after the completion of the test before they are made available at <a href="http://www.ontariosecuritytesting.com" target="_blank" rel="noreferrer" className="text-red-1 hover:underline">www.ontariosecuritytesting.com</a>.
                  </div>
                  <div className={faq === 12 ? "block text-base mt-2" : "hidden"}>
                    Once you have been confirmed that you have successfully passed the test, you may apply for a license with the Ministry (in accordance with their standards and practices).
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(13)}>
                  <span className="text-red-1 font-bold">13.</span> When is the expiry date on my license? What is the cost of the license?
                  <div className={faq === 13 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>The expiry date of the license is set two years from the date of issue. You are required to renew your license every two years. The cost of the license is $80.
                  </div>
                </p>
                <p className="p-4 mb-6 border-4 border-gray-200 text-gray-2 w-full text-xl cursor-pointer" onClick={() => setFaq(14)}>
                  <span className="text-red-1 font-bold">14.</span> I am already certified in First Aid/CPR. Do I still need to attend the CPR training day?
                  <div className={faq === 14 ? "block text-base mt-2" : "hidden"}>
                  <span className="text-red-1 font-bold">Ans) </span>No. As of October 1, 2015, all persons holding a current valid certificate from a recognized training provider are only required to attend four days of training and will be exempt from the fifth day.
                  </div>
                  <div className={faq === 14 ? "block text-base mt-2" : "hidden"}>
                    Argus Security must be provided with a copy of your First Aid/CPR certificate.
                  </div>
                  <div className={faq === 14 ? "block text-base mt-2" : "hidden"}>
                    If you are unable to provide us with a copy of your certificate you will be required to attend all five days of training.
                  </div>
                </p>
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Courses;
