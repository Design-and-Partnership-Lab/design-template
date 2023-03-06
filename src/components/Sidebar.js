import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="py-2 px-3 rounded bg:transparent dark:bg-gray-800">
      <div className="flex items-center justify-center px-2">
        <Image
          priority
          src="/edsightdark.svg"
          height={50}
          width={150}
          alt="Logo"
        />
      </div>
      <div className="my-4 mx-2">
        <button
          onClick={() => {}}
          className={classNames(
            "btn text-white px-2 py-2 w-full h-10 bg-edsightteal-100 rounded-lg hover:bg-edsightteal-300 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-6 inline-block mr-1 icon icon-tabler icon-tabler-reload text-white hover:text-edsightteal-100 active:animate-spin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>New Survey</span>
        </button>
      </div>
      <ul className="space-y-2">
        <li>
          <Link href="/index" legacyBehavior>
            <a className="flex items-center p-2 font-normal text-white rounded-lg hover:bg-edsightnavy-200 dark:hover:bg-gray-700">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-3">Survey List</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/index" legacyBehavior>
            <a className="flex items-center p-2 font-normal text-white rounded-lg hover:bg-edsightnavy-200 dark:hover:bg-gray-700">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Data Lab</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/index" legacyBehavior>
            <a className="flex items-center p-2 font-normal text-white rounded-lg hover:bg-edsightnavy-200 dark:hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-files"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9CA3AF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Multiday Reports
              </span>
              <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                3
              </span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="pt-4 mt-4 space-y-2 border-t dark:border-gray-200 border-gray-700">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-edsightnavy-200 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Group 1</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-edsightnavy-200 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Group 2</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
