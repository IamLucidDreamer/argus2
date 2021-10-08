import React from "react";
import ProfilePicture from './../../../../argus website/PNG/IMG_0118.png';

function Message({ message }) {
  return (
    <div
      className={`rounded w-full h-96 mb-2 font-medium text-gray-3 bg-bg-card overflow-y-scroll ${
        message
          ? "transition-all duration-300 opacity-100 block"
          : "transition-all duration-300 opacity-0 hidden"
      }`}
    >
      <div className="border-b-3 border-white text-sm py-2 px-4 leading-snug rounded-xl text-gray-2">
        <div className="flex my-2">
          <img className="w-12 h-12 mr-3 rounded-lg" src={ProfilePicture} alt="" />
          <div className="border-3 border-white px-2 w-full rounded-lg">
            <div className="block mb-1 font-bold">Name Here</div>
            <div className="block mb-1 text-xs">CEO</div>
          </div>
        </div>
        <div className="font-bold mt-4 mb-1.5">Subject : Lorem ipsum, dolor sit amet.</div>

        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure quo illo possimus repellendus aliquid recusandae quia natus
        provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint
        ratione quod blanditiis?
        <div className="block mb-1 text-xs font-bold text-right mt-1">12/12/2020 12:!2</div>
      </div>

      <div className="border-b-3 border-white text-sm py-2 px-4 leading-snug rounded-xl text-gray-2">
        <div className="flex my-2">
          <img className="w-12 h-12 mr-3 rounded-lg" src={ProfilePicture} alt="" />
          <div className="border-3 border-white px-2 w-full rounded-lg">
            <div className="block mb-1 font-bold">Name Here</div>
            <div className="block mb-1 text-xs">CEO</div>
          </div>
        </div>
        <div className="font-bold mt-4 mb-1.5">Subject : Lorem ipsum, dolor sit amet.</div>

        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure quo illo possimus repellendus aliquid recusandae quia natus
        provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint
        ratione quod blanditiis?
        <div className="block mb-1 text-xs font-bold text-right mt-1">12/12/2020 12:!2</div>
      </div>

      <div className="border-b-3 border-white text-sm py-2 px-4 leading-snug rounded-xl text-gray-2">
        <div className="flex my-2">
          <img className="w-12 h-12 mr-3 rounded-lg" src={ProfilePicture} alt="" />
          <div className="border-3 border-white px-2 w-full rounded-lg">
            <div className="block mb-1 font-bold">Name Here</div>
            <div className="block mb-1 text-xs">CEO</div>
          </div>
        </div>
        <div className="font-bold mt-4 mb-1.5">Subject : Lorem ipsum, dolor sit amet.</div>

        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure quo illo possimus repellendus aliquid recusandae quia natus
        provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint
        ratione quod blanditiis?
        <div className="block mb-1 text-xs font-bold text-right mt-1">12/12/2020 12:!2</div>
      </div>

      <div className="border-b-3 border-white text-sm py-2 px-4 leading-snug rounded-xl text-gray-2">
        <div className="flex my-2">
          <img className="w-12 h-12 mr-3 rounded-lg" src={ProfilePicture} alt="" />
          <div className="border-3 border-white px-2 w-full rounded-lg">
            <div className="block mb-1 font-bold">Name Here</div>
            <div className="block mb-1 text-xs">CEO</div>
          </div>
        </div>
        <div className="font-bold mt-4 mb-1.5">Subject : Lorem ipsum, dolor sit amet.</div>

        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure quo illo possimus repellendus aliquid recusandae quia natus
        provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint
        ratione quod blanditiis?
        <div className="block mb-1 text-xs font-bold text-right mt-1">12/12/2020 12:!2</div>
      </div>


    </div>
  );
}

export default Message;
