import React, { useState } from "react";
import SideNav from "./Components/SideNav";
import ProfileBar from "./Components/ProfileBar";
import EmpOfMon from "./Components/WebsiteControlComponents/EmpOfMon";
import Testimonials from "./Components/WebsiteControlComponents/Testimonial";
import FooterControl from "./Components/WebsiteControlComponents/FooterControl";
import ClientControl from "./Components/WebsiteControlComponents/ClientControl";
import TeamControl from "./Components/WebsiteControlComponents/TeamControl";
import { TestimonialTable } from "./Components/WebsiteControlComponents/TestimonialTable";
import { EmpOfMonTable } from "./Components/WebsiteControlComponents/EmpOfMonTable";
import { ClientTable } from "./Components/WebsiteControlComponents/ClientTable";
import { TeamTable } from "./Components/WebsiteControlComponents/TeamTable";

export default function Home() {
  const [show, setShow] = useState(1);
  const [refresh, setrefresh] = useState();
  const [eomRefresh, seteomRefresh] = useState();

  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-52 md:w-72 bg-red-1">
        <SideNav />
      </div>
        <div className="w-full">
          <ProfileBar />
          <div>
            <nav className="flex flex-col sm:flex-row justify-evenly my-2">
              <button
                className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white"
                onClick={() => setShow(1)}
              >
                Testimonial
              </button>
              <button
                className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white"
                onClick={() => setShow(2)}
              >
                Employee of the Month
              </button>
              <button
                className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white"
                onClick={() => setShow(3)}
              >
                Company Contact
              </button>
              <button
                className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white"
                onClick={() => setShow(4)}
              >
                Clients
              </button>
              <button
                className="rounded-2xl text-xl py-4 px-5 bg-white shadow-lg hover:bg-red-1 hover:text-white"
                onClick={() => setShow(5)}
              >
                Team
              </button>
            </nav>
            <div className={show === 1 ? "block" : "hidden"}>
              <Testimonials setrefresh={setrefresh} />
              <TestimonialTable refresh={refresh} setrefresh={setrefresh} />
            </div>
            <div className={show === 2 ? "block" : "hidden"}>
              <EmpOfMon seteomRefresh={seteomRefresh} />
              <EmpOfMonTable
                eomRefresh={eomRefresh}
                seteomRefresh={seteomRefresh}
              />
            </div>
            <div className={show === 3 ? "block" : "hidden"}>
              <FooterControl />
            </div>
            <div className={show === 4 ? "block" : "hidden"}>
              <ClientControl />
              <ClientTable />
            </div>
            <div className={show === 5 ? "block" : "hidden"}>
              <TeamControl />
              <TeamTable />
            </div>
          </div>
        </div>
      </div>
    );
}
