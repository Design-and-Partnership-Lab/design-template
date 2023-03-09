import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import classNames from "classnames";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

//This is the component for the entire page.
export default function Home({ isLoading, children, setLoading }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [collabWorkspaces, setCollabWorkspaces] = useState([{name:"workspace1"}, {name:"workspace2"}, {name:"workspace3"}]);
  const [drawerNavBar] = useState([{name:"drawerOption1"}, {name:"drawerOption1"}, {name:"drawerOption1"}])

  return (
    <div className="flex w-[100vw] h-[100vh] bg-gray">
      <div className="flex justify-center w-[50px] h-[100vh] bg-edsightnavy-300">
      <div className="flex flex-col h-[25em] justify-between p-4">

      <ul>
        <button className="pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home-2 stroke-edsightyellow-400 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M10 12h4v4h-4z"></path>
            </svg>
          </button>
        {collabWorkspaces.map((item, index) => {
          return (
            
          <button key={index} className="pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
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
        <button className="pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l6 0"></path>
              <path d="M12 9l0 6"></path>
            </svg>
          </button>
      </ul>

          
{/*           
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-users stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-plus stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l6 0"></path>
              <path d="M12 9l0 6"></path>
            </svg>
          </button> */}
        </div>
      </div>
      <div
        className={classNames(
          { "w-[10em] min-w-[195px]": isCollapsed },
          { "w-0": !isCollapsed },
          "right"
        )}
      >
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <ul className="menu p-4 bg-base-100 text-base-content">
                {drawerNavBar.map((item, index) => {
                  return (
                    
                  <button key={index} className="pb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-users stroke-edsightlightgray-100 hover:stroke-edsightyellow-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="my-drawer"
          className="drawer-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevrons-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 7l5 5l-5 5"></path>
            <path d="M13 7l5 5l-5 5"></path>
          </svg>
        </label>
      </div>

      <div className="flex flex-col w-[100%] h-[100%] p-8">
        <div className="flex w-[100%] justify-between"></div>
      </div>
    </div>
  );
}
