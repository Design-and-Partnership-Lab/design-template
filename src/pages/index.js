import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import classNames from "classnames";
import { useState } from "react";
import edsightIcon from "public/edsightIcon.svg";
import dashboardIcon from "public/NavIcons/dashboardIcon.svg";
import reportsIcon from "public/NavIcons/reportsIcon.svg";
import activityIcon from "public/NavIcons/activityIcon.svg";
import Link from 'next/link'
const inter = Inter({ subsets: ["latin"] });

const drawerNavData = [
  {name:"Dashboard", icon: dashboardIcon},
  {name:"Reports", icon: reportsIcon},
  {name:"Activity", icon: activityIcon},
]

//This is the component for the entire page.
export default function Home({ isLoading, children, setLoading }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [collabWorkspaces, setCollabWorkspaces] = useState([{name:"workspace1"}, {name:"workspace2"}, {name:"workspace3"}]);
  const [drawerNavBar] = useState(drawerNavData)
  const [refInfo] = useState([{name:"PMR2 Routines"}, {name:"PMR2 Measures"}])

  return (
    <div className="flex w-[100vw] h-[100vh] bg-white">
      <div className="flex justify-center w-[50px] h-[100vh] bg-edsightnavy-300 p-8" >
        <div className="flex flex-col h-[25em] justify-between px-4">
          <ul>
        <button className="pb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home-2 stroke-edsightyellow-400"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
            <path d="M10 12h4v4h-4z"></path>
          </svg>
        </button>
        {collabWorkspaces.map((item, index) => {
          return (
          <button key={index} className="pb-8 hover:stroke-edsightyellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
          </button>
          );
        })}
        <button className="pb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-plus stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l6 0"></path>
              <path d="M12 9l0 6"></path>
            </svg>
          </button>
      </ul>
        </div>
      </div>

      <div className={classNames({"w-[16em] min-w-[195px]" : isCollapsed }, {"w-5": !isCollapsed }, "right")}>
        <Link href='/Login'>onboarding</Link>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side ">
            <ul className="menu p-6 pr-12 bg-edsightlightgray-100 justify-between">
              <div>
                <Image className="pb-5" src={edsightIcon} alt="Edsight Logo."></Image>
                <div className="w-[100%] pb-4">
                  <button className="btn w-[150px] bg-edsightteal-100 text-white border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus pr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 5l0 14"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                     New Survey
                  </button>
                </div>
                <p className="font-bold text-md py-1 mb-2 rounded-sm">Personal Workspace</p>
                {drawerNavBar.map((item, index) => {
                  return (
                    <li key={index} className="pb-4"> 
                      <a className={classNames({"w-[300px] bg-edsightteal-100 text-white fill-white stroke-white" : (item.name == "Dashboard")}, { "w-[300px]": (item.name != "Dashboard")})}>
                        {/* <Image src={item.icon} alt="Drawer NavBar icons." style={{fill: "#ffffff"}}></Image> */}
                        <NavbarIcon type={item.name}></NavbarIcon>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </div>
              
              <div className="w-[150px] bg-edsightlightgray-300 px-3 py-3 rounded-md bottom-0">
                <p className="flex justify-center content-center w-[80px] bg-edsightgray-100 text-xs px-3 py-1 mb-2 rounded-md">Reference</p>
                {refInfo.map((item, index) => {
                  return (
                    <li key={index}> 
                      <a className="py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                        </svg>
                        <p className="text-xs">{item.name}</p>
                      </a>
                    </li>
                    );
                  })}
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center content-center rounded-r-md bg-edsightlightgray-100 h-[35px] w-[35px] ">
        <label
          htmlFor="my-drawer"
          className="drawer-button flex justify-center content-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed && <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevrons-right"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 7l5 5l-5 5"></path>
            <path d="M13 7l5 5l-5 5"></path>
          </svg>}

          {!isCollapsed && <svg xmlns="http://www.w3.org/2000/svg" classname="icon icon-tabler icon-tabler-chevrons-left" width="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 7l-5 5l5 5"></path>
            <path d="M17 7l-5 5l5 5"></path>
            </svg>}
        </label>
      </div>

      <div className="flex flex-col w-[100%] h-[100%] p-8">
        <div className="flex w-[100%] justify-between">
          <div className="flex justify-start items-start">
            <button>Personal Home</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="grey"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
            <button>Activity List</button>
          </div>
          <div>
            <button className="flex items-center">
              <div className="avatar online placeholder">
                <div
                  className="bg-neutral-focus text-neutral-content rounded-full w-16"
                >
                  <span className="text-xl">JO</span>
                </div>
              </div>
              <div className="block text-left pl-2">
                <p>Jo Mummah</p>
                <p>jomama88@gmail.com</p>
              </div>
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Jo's Workspace</h1>
          <p>See all of your previously scheduled surveys below.</p>
          <div className="flex mt-16">
            <label>Activity List</label>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-reload" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path>
              <path d="M20 4v5h-5"></path>
          </svg>
         </div>
        </div>
      </div>

  </div>

    
  );
}


const NavbarIcon=({type}) => {

  if (type == "Dashboard") {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-timeline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 16l6 -7l5 5l5 -6"></path>
          <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
      </div>
    )
  }
  else if (type=="Reports"){
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M11.8 16.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
               </svg>
      </div>
    )
  }
  else if (type=="Activity"){
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-analytics" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M9 17l0 -5"></path>
                <path d="M12 17l0 -1"></path>
                <path d="M15 17l0 -3"></path>
        </svg>
      </div>
    )
  }
  
}