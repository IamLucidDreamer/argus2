import React from "react";
import { SideNav } from "./Components/SideNav";

export default function Home() {
  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-2/12 md:w-72 bg-red-1 shadow-button-inner">
        <SideNav />
      </div>
      <div className="w-full bg-client">
        <h1 className="py-96">Hello World</h1>
        <h1 className="py-96">Hello World</h1>
      </div>
      
    </div>
  );
}
