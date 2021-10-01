import React from "react";
import { SideNav } from "./Components/SideNav";
import { TopBar } from "./Components/TopBar";

export default function Home() {
  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-2/12 md:w-72 xl:w-96 bg-red-1 shadow-button-inner">
        <SideNav />
      </div>
      <div className="w-full bg-client">
        <TopBar />
      </div>
      
    </div>
  );
}
