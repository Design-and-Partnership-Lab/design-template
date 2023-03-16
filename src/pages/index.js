import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import classNames from "classnames";
import { useState } from "react";
import Link from 'next/link'
const inter = Inter({ subsets: ["latin"] });

//This is the component for the entire page.
export default function Home({ isLoading, children, setLoading }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex w-[100vw] h-[100vh] bg-gray">
      <div className="flex justify-center w-[50px] h-[100vh] bg-edsightnavy-300"></div>
      <div
        className={classNames(
          { "w-[10em] min-w-[195px]": isCollapsed },
          { "w-0": !isCollapsed },
          "right"
        )}
      >
        <Link href='/Login'>onboarding</Link>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <ul className="menu p-4 bg-base-100 text-base-content">
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
