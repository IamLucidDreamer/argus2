import React from "react";
import fleet from "./../../argus website/PNG/use copy 3.jpg";
import CompanyContact from "./../Components/CompanyContact";
import ContactForm from "../Components/Contact";
import SideLine from "./../Components/SideLine";
import { useSelector } from "react-redux";

const Contact = () => {
  const mapLocation = useSelector((state) => state.contact.mapLocation);
  console.log(mapLocation);
  return (
    <div className="font-for-para">
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-jobsbg">
        <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white">
              CONTACT
            </h1>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-no-repeat bg-mapbg">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto py-14">
          <img src={fleet} alt="Security Cars" className="w-full" />
          <div className="flex flex-col md:flex-row items-start mt-14 ">
            <div className="p-2 md:p-0 md:pr-6 md:w-1/3 flex flex-col items-start text-lg font-medium text-gray-2">
              <div className="flex flex-row items-stretch w-full mb-6">
                <SideLine />
                <h1 className="leading-tight text-3xl lg:text-4xl title-font font-bold text-gray-3">
                  How can we help?
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                We are experiencing longer than usual response times due to{" "}
                <span className="text-red-1 underline"> Covid-19</span>. We
                appreciate your patience and apologize in advance for any delays
                in responding to your message.{" "}
              </p>
              <hr class="border-1 border-gray-2 w-full mb-6" />

              <CompanyContact />
            </div>
            <ContactForm width="w-full md:w-2/3 mt-5 md:mt-0" />
          </div>
        </div>
      </div>

      <iframe
        title="Map"
        src={mapLocation}
        className="w-full h-96 bg-gray-200"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
