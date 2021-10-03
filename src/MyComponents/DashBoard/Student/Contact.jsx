import React from "react";
import CompanyContact from "../../Components/CompanyContact";
import ContactForm from "../../Components/Contact";
import SideLine from "../../Components/SideLine";

export default function Contact() {
  return (
    <div className="rounded-2xl max-w-1200 mx-8 2xl:mx-auto my-4 bg-white p-4 shadow-button-shadow-3">
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
                <a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html" target="_blank" rel="noreferrer" className="text-red-1 hover:underline"> Covid-19</a>. We
                appreciate your patience and apologize in advance for any delays
                in responding to your message.{" "}
              </p>
              <hr class="border-1 border-gray-2 w-full mb-6" />
              <div className="text-lg md:text-sm lg:text-lg font-medium">
                <CompanyContact />
              </div>
            </div>
            <ContactForm width="w-full md:w-2/3 mt-5 md:mt-0" />
          </div>
    </div>
  );
}
