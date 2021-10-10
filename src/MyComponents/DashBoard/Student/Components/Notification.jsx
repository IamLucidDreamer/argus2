import React from "react";

function Notification({ notification }) {
  return (
    <div
      className={`w-full h-96 mb-2 font-medium text-gray-3 bg-bg-card overflow-y-scroll rounded ${
        notification
          ? "transition-all duration-300 opacity-100 block"
          : "transition-all duration-300 opacity-0 hidden"
      }`}
    >
      
    <div className="border-b-3 border-white text-sm p-3 leading-snug rounded-lg text-gray-2">
        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo illo possimus repellendus aliquid recusandae quia natus provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint ratione quod blanditiis?
    <div className="text-xs font-bold text-right mt-1">
        12/12/1222<span className=""> 13:12</span>
    </div>
    </div>

    <div className="border-b-3 border-white text-sm p-3 leading-snug rounded-lg text-gray-2">
        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo illo possimus repellendus aliquid recusandae quia natus provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint ratione quod blanditiis?
    <div className="text-xs font-bold text-right mt-1">
        12/12/1222<span className=""> 13:12</span>
    </div>
    </div>

    <div className="border-b-3 border-white text-sm p-3 leading-snug rounded-lg text-gray-2">
        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo illo possimus repellendus aliquid recusandae quia natus provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint ratione quod blanditiis?
    <div className="text-xs font-bold text-right mt-1">
        12/12/1222<span className=""> 13:12</span>
    </div>
    </div>

    <div className="border-b-3 border-white text-sm p-3 leading-snug rounded-lg text-gray-2">
        Hello qwowfasd. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo illo possimus repellendus aliquid recusandae quia natus provident, sunt eaque quam iusto. Velit voluptates dolorem dicta, sint ratione quod blanditiis?
    <div className="text-xs font-bold text-right mt-1">
        12/12/1222<span className=""> 13:12</span>
    </div>
    </div>
    
    </div>  
  );
}

export default Notification;
