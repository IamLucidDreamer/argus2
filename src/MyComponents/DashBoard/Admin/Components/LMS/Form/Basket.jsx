import React, {useState} from 'react'

const Basket = () => {

    const[basket ,setBasket] = useState(true)
    const[download, setDownload] = useState(false) 

    return (
      <div>
      <div className="flex flex-row items-center text-red-1 text-xl">
        <button 
        onClick={() => {
          setBasket(true);
          setDownload(false)
        }}
        className={`w-1/2 pt-4 pb-3 font-bold ${
        basket
          ? "border-b-4 border-white"
          : "border-b-4 border-red-1 hover:border-white"
      }`}>
          Basket
        </button>
        <button 
        onClick={() => {
          setDownload(true);
          setBasket(false);
        }}
        className={`w-1/2 pt-4 pb-3 font-bold ${
          download
            ? "border-b-4 border-white"
            : "border-b-4 border-red-1 hover:border-white"
        }`}>
          Download
        </button>
      </div>
        <div className={`w-1/2 pt-4 pb-3 font-bold ${
          Basket
            ? "border-b-4 border-white"
            : "border-b-4 border-red-1 hover:border-white"
        }`}>
            Hello World
        </div>
        <div className={
          download
            ? "block"
            : "hidden"
        }>
            Hello Download
        </div>
    
    
    </div>


    )
}

export default Basket;