import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import telegram from "../assets/tele.png";
import DropdownMenu from "./DropdownMenu";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Navbar() {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    window.setTimeout(() => {
      if (timer == 0) {
        // setTimer(60);
        window.location.reload();
      } else setTimer(timer - 1);
    }, 1000);
    return () => {};
  }, [timer]);
  return (
    <div className="navbar p-4">
      <div>
        <img src={logo} alt="" className="h-12" />
      </div>
      <div className="flex gap-4">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-gray-700 focus:ring-4 focus:outline-none  font-medium rounded-lg  px-2 h-9  text-center inline-flex items-center "
          type="button"
        >
          INR{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                INR
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                BTC
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              ></a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                USDT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                IOST
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                WPX
              </a>
            </li>
          </ul>
        </div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-gray-700 focus:ring-4 focus:outline-none  font-medium rounded-lg  px-2 h-9  text-center inline-flex items-center "
          type="button"
        >
          BTC
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                IOST
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                WIN
              </a>
            </li>
          </ul>
        </div>
        <button className="text-white px-2 h-9 bg-gray-700 rounded-md">
          BUY BTC
        </button>
      </div>
      <div className="nav-element">
        <div className="mt-4">
          <div style={{ width: "6vh" }}>
            <CircularProgressbar
              value={timer}
              maxValue={60}
            ></CircularProgressbar>
          </div>
          <div
            className="text-info"
            style={{
              position: "relative",
              top: "-32px",
              left: "11px",

              fontSize: "18px",
              fontWeight: "100%",
            }}
          >
            <b>{timer}</b>
          </div>
        </div>
        <button className="telegram flex justify-center items-center gap-3 bg-[#3dc6c1] text-white p-2 rounded-lg">
          <img className="h-5" src={telegram} alt="" />
          Connect Telegram
        </button>
        <div className="form-check form-switch">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#3dc6c1] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
          </label>
        </div>
      </div>
    </div>
  );
}
