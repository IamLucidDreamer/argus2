import React, {useState} from "react";
import ProfilePicture from "./../../../../../../argus website/PNG/IMG_0118.png";

const Message = () => {

    const [message, setMessage] = useState(false)

  return (
    <div>
      <div className="flex">
        <button onClick={() => setMessage(!message)} className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
          NEW MESSAGE
        </button>
      </div>
      <div className={message ? "block" : "hidden"}>
      <form className="flex flex-wrap justify-center items-center text-lg font-bold">
            <div className="w-full flex flex-col lg:flex-row items-center justify-around my-4">
                <input type="text" placeholder="Name Autofill" className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
                <input type="date" placeholder="AUtofill the Date" className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            </div>
            <input type="text" placeholder="Subject Line" className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:my-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            <textarea type="textarea" placeholder="Message" className="bg-client p-5 w-full lg:w-11/12 mt-8 lg:mt-4 h-80 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"/>
            <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">ADD DELAY of 5 sec SEND MESSAGE</button>
        </form>
      </div>

      <h1 className="text-xl font-bold my-4">Message Board</h1>
      <div className="border-b-3 border-client text-sm py-2 px-4 leading-snug text-gray-2 mb-4">
        <div className="flex my-2">
          <img
            className="w-12 h-12 mr-3 rounded-lg"
            src={ProfilePicture}
            alt=""
          />
          <div className="border-3 border-white px-2 w-full rounded-lg">
            <div className="block mb-1 font-bold">Name Here</div>
            <div className="block mb-1 text-xs">CEO</div>
          </div>
        </div>
        <div className="font-bold mt-4 mb-1.5">
          Subject : Lorem ipsum, dolor sit amet.
        </div>
        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure quo illo possimus repellendus aliquid recusandae quia natus
        provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint
        ratione quod blanditiis?
        <div className="block mb-1 text-xs font-bold text-right mt-1">
          12/12/2020 12:!2
        </div>
      </div>
      <div className="border-b-3 border-client text-sm py-2 px-4 leading-snug text-gray-2 mb-4">
        <div className="flex my-2">
          <img
            className="w-12 h-12 mr-3 rounded-lg"
            src={ProfilePicture}
            alt=""
          />
          <div className="border-3 border-white px-2 w-full rounded-lg">
            <div className="block mb-1 font-bold">Name Here</div>
            <div className="block mb-1 text-xs">CEO</div>
          </div>
        </div>
        <div className="font-bold mt-4 mb-1.5">
          Subject : Lorem ipsum, dolor sit amet.
        </div>
        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure quo illo possimus repellendus aliquid recusandae quia natus
        provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint
        ratione quod blanditiis?
        <div className="block mb-1 text-xs font-bold text-right mt-1">
          12/12/2020 12:!2
        </div>
      </div>
      <div className="border-b-3 border-client text-sm py-2 px-4 leading-snug text-gray-2 mb-4">
        <div className="flex my-2">
          <img
            className="w-12 h-12 mr-3 rounded-lg"
            src={ProfilePicture}
            alt=""
          />
          <div className="border-3 border-white px-2 w-full rounded-lg">
            <div className="block mb-1 font-bold">Name Here</div>
            <div className="block mb-1 text-xs">CEO</div>
          </div>
        </div>
        <div className="font-bold mt-4 mb-1.5">
          Subject : Lorem ipsum, dolor sit amet.
        </div>
        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure quo illo possimus repellendus aliquid recusandae quia natus
        provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint
        ratione quod blanditiis?
        <div className="block mb-1 text-xs font-bold text-right mt-1">
          12/12/2020 12:!2
        </div>
      </div>
    </div>
  );
};

export default Message;
