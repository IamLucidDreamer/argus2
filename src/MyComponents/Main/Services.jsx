import React, { useState } from "react";

import image1 from "./../../argus website/PNG/raw-2_edited.png";
import SideLine from "../Components/SideLine";

const Services = () => {
  const [row, setRow] = useState(0);

  return (
    <div>
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg bg-center">
        <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white font-for-para">
              SERVICES
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-no-repeat bg-contain bg-mapbg2">
        <div class="px-4 sm:px-8 lg:px-12 xl:px-0 mx-auto max-w-1366">
          <div className="flex flex-wrap pt-12 pb-6">
            <div className="flex flex-wrap w-full items-baseline">
              <div className="w-full flex flex-col md:flex-row items-center">
                <div className="flex flex-row items-stretch pr-24 pb-6 md:pb-0">
                  <SideLine />
                  <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                    Firsthand information to our operations
                  </h1>
                </div>
                <p className="leading-relaxed font-medium text-lg text-gray-2">
                  As a client you will gain first hand access to day-today
                  operations and daily occurrence reposts.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap text-center mb-8">
            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      GATED COMMUNITY
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      NFS marked vehicles, communication between residents &
                      security staff and efficient use of technology
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(1)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      CONSTRUCTION
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      Site surveillance, road flaggers, risk assessment, loss
                      prevention and mobile patrols.
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(2)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      PARKING
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      Fire Route watch, valid permit enforcement and deterrent
                      against invalid/improper parking.
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(3)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={row === 1 ? "block" : "hidden"}>
              <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
                <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                  <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                    GATED COMMUNITY
                  </h2>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                    <div className=" w-full lg:w-8/12 text-left">
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      Our security team makes sure that only vehicles and people who enter the area either live there, are visiting, or have been requested to come for business purposes. Any repair or delivery people will need your approval before getting permission to enter.
                      </p>
                      <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                      Anytime a non-resident comes to the gate, the guard calls the appropriate resident or management to make sure they are invited. If you do not answer the phone or deny entry to the visitor, the guard will not open the gate and will point them to the exit. However, if you plan to be away from the home but need to have a repair service come in, you may leave the name at the gate so they can enter.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                      <video
                        className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                        poster={image1}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={row === 2 ? "block" : "hidden"}>
              <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
                <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                  <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                    CONSTRUCTION
                  </h2>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                    <div className=" w-full lg:w-8/12 text-left">
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      What is a construction security guard?
                      </p>
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      Security Guards serve in pivotal roles on an active construction site. Their presence onside aids in the prevention of theft, minimizes property damage, deters vandals and promptly addresses unexpected events including fires.
                      </p>
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      Security Guards needed at constructions sites are required at different stages of demolition, build or restoration. Our Team of security personnel are available 24-hours a day, or you can choose to have them at your location simply during the off hours when everything on the site is more vulnerable. 
                      </p>
                      <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                      Implementing lights and cameras may help deter the theft of materials and heavy equipment from construction sites but having physical presence of a security guard is the most effective way to catch any criminal activity before it happens. 
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                      <video
                        className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                        poster={image1}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={row === 3 ? "block" : "hidden"}>
              <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
                <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                  <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                    LOSS PREVENTION
                  </h2>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                    <div className=" w-full lg:w-8/12 text-left">
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                        What is Loss prevention?
                      </p>
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                        As Loss Prevention initiatives are developed, they must contain tasks, procedures and programs that can detect loss. Whether utilizing technology or human resources, the ability to quickly detect an actual or potential loss will allow for the efficient investigation and effective resolution of such issues. An undetected loss can easily compound and destroy the profitability of a single retail location within a short amount of time. 
                      </p>
                      <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                        Argus Security works with a diverse group of retailers to provide loss prevention security. Asset Protection and store protection by well trained personnel in customer settings. We can staff our officers in a suit, standard uniform or a more casual polo look. We provide dedicated security personnel to assist your business in creating theft prevention plans and polices.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                      <video
                        className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                        poster={image1}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      RESIDENTIAL
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      Peace of mind, theft deterrent, minimize property damager
                      and safeguard against trespassing.
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(4)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      CORPORATE
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      Risk management, Information security, Corporate
                      Governance, Compliance and Ethics Programs.
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(5)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      INDUSTRIAL
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                      Access control and monitoring, crime and violence
                      prevention and Emergency response protocols.
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(6)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={row === 4 ? "block" : "hidden"}>
              <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
                <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                  <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                    Residential
                  </h2>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                    <div className=" w-full lg:w-8/12 text-left">
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      Why us?
                      </p>
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      Residential Security department is dedicated to safeguard people and their properties from privacy breaches, home invasions, disturbances, or any other threats.
                      </p>
                      <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                      Mobile patrols are available 24 hours a day, 7 days a week, 365 days a year to watch over your property while your away from home or on vacation.
                      </p>
                      <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                      If you are going to be away from your home for awhile, Argus Security Services can provide you with a house check in service where our team of security guards can check in on your property Argus Security trained professionals will go to your home on the dates that you specify and check all the doors to ensure that they are locked, check for damages, and make sure there are no trespassers. 
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                      <video
                        className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                        poster={image1}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={row === 5 ? "block" : "hidden"}>
              <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
                <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                  <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                    CORPORATE
                  </h2>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                    <div className=" w-full lg:w-8/12 text-left">
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      Corporate security guards working in the retail industry are employed by large and small stores and shopping malls, mainly to deter theft and vandalism.  Our guards monitor security cameras, patrol parking lots apprehend shoplifting suspects or assist undercover store detectives with loss prevention. Common duties include daily reports, answering phone calls during off hours and contacting the fire department or law enforcement during certain circumstances, such as criminal violation, fire and trespassing.
                      </p>
                      <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                      All of our guards are specifically trained to handle large office buildings. Argus Security Services will keep an eye out for any unwanted personnel or behaviour. Throughout the day, many visitors, clients, employees may visit the building however our guards will ensure the day is kept running smoothly and as planned. 
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                      <video
                        className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                        poster={image1}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={row === 6 ? "block" : "hidden"}>
              <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
                <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                  <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                    INDUSTRIAL
                  </h2>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                    <div className=" w-full lg:w-8/12 text-left">
                      <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      A safe workspace is important for any industry. On site security guards ensures you and your employees have a safe, productive space. Regular security mobile check ins are a cost-effective way to ensure that your property is safe. This is a service that allows our security guards to cover a wide range of the premises in fast response time. If your business has multiple locations, then we highly recommend regular security checks to secure all locations on a routine basis. Through routine security checks, you will be able to have. A visible security presence on your premises. This often is a great crime deterrent which causes criminals to stay away from your property. 
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                      <video
                        className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                        poster={image1}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      PRIVATE
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-5 pt-3 pb-6">
                      VIP Protection, closed-circuit security feeds, preserve
                      and protect life and property.
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(7)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      MOBILE
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-5 pt-3 pb-6">
                      Marked Vehicles with first air kits and a patrol reporting
                      system to document every visit.
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(8)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-96 md:w-1/3">
              <div className="h-full overflow-hidden ">
                <div className="h-52 sm:h-80 md:h-56 lg:h-64 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                  <div className="shadow-services"></div>
                </div>
                <div className=" bg-white mx-3 md:mx-0 lg:mx-3">
                  <div className="border-r-4 border-l-4 border-client">
                    <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                      EVENT
                    </h2>
                    <p className="leading-relaxed text-base text-gray-2 px-5 pt-3 pb-6">
                      Access control, emergency response, crowd control.
                      complete threat and risk Assessment.
                    </p>
                  </div>
                  <div className="bg-client rounded-b-lg">
                    <button
                      className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner mb-auto"
                      onClick={() => setRow(9)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 7 ? "block" : "hidden"}>
            <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 7
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
                    <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 8 ? "block" : "hidden"}>
            <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  MOBILE
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
                    <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      There are times when gates, locks, alarm and cameras may not be enough for you to feel as though your premises are completely safe from trespassers and vandals. At Argus Security Services, we recognize visible security presence is most effective. 
                    </p>
                    <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      We offer fully uniformed mobile security guards in marked patrol vehicles to significantly reduce the opportunity for crime such as trespassing, vandalism and theft, through an effective security patrol of your premises.
                    </p>
                    <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                    Our mobile security guards will be conducting an internal foot patrol of your premises ensuring all access points including windows and doors are locked, and that there are no water leaks or safety hazards. Our mobile security supervisors are trained to respond to a wide range of security situations across the GTA.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 9 ? "block" : "hidden"}>
            <div className="p-1 ms:p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-4 sm:px-12 pt-4 pb-0 sm:py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
                    <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                      Hosting an Event?
                    </p>
                    <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                    Argus Security can secure your corporate, conferences, private, concerts, conventions, weddings or birthdays. Our team of trained Security guards will help you protect what’s important: attendees, valuables, and the integrity of the event. Security guards are trained to maintain a professional approach and helpful attitude when assisting customers. 
                    </p>
                    <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                    We, monitor the event, make sure rules are being followed and help provide a sense of protection for attendees and staff.
                    </p>
                    <p className="leading-relaxed text-base md:text-lg font-medium text-gray-2 mb-6">
                    We, maintain order, direct foot traffic, help lost people, and assist in case of disturbances.
                    </p>
                    <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                    We, escort attendees out of the event, make sure people don’t re-enter when they aren’t supposed to and assist someone with health problems to a safe area.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
