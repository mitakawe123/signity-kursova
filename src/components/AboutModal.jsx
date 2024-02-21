import React, { useRef, useState, useEffect, useContext } from "react";
import manchev from "../img/mManchev.jpeg";
import kyuchukov from "../img/dKyuchukov.png";
import { Avatar } from "@mui/material";
import { UserContext } from "./context/UserContext";

const AboutModal = () => {
  const outsideClickRefSign = useRef();
  const { openModal, setOpenModal } = useContext(UserContext);

  //when click outside the modal close it
  useEffect(() => {
    const checkIfClickedOutsideSign = (e) => {
      if (
        openModal &&
        outsideClickRefSign.current &&
        !outsideClickRefSign.current.contains(e.target)
      ) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutsideSign);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutsideSign);
    };
  }, [openModal]);

  //togal the modal
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className="min-w-screen h-screen animated fadeIn faster left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover bg-gray-900 bg-opacity-75 transition-opacity overflow-y-auto overflow-x-hidden fixed h-modal md:h-full md:inset-0"
    >
      <div className="px-4 w-full max-w-2xl h-full md:h-auto">
        <div
          ref={outsideClickRefSign}
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <div className="flex justify-between items-start p-5 rounded-t">
            <button
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={toggleModal}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center px-8 pb-6">
            {/* Matrin Desc. */}
            <div className="mr-4 p-16 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
              <div className="flex flex-col items-center pb-10">
                <Avatar
                  className="mb-2"
                  sx={{ width: 60, height: 60 }}
                  alt="Martin Manchev"
                  src={manchev}
                />
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Martin Manchev
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Backend Developer
                </span>
                <div className="flex mt-4 space-x-3 lg:mt-6 mb-2">
                  <hr className="bg-black	w-16" />
                </div>
                <p className="text-center">
                  Интересувам се от Web, ML и Backend Development
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="rounded-full w-8 h-8 mx-1">
                  <a href="https://github.com/mmanchev23" target="_blank">
                    <img
                      src={require("../img/github.svg").default}
                      alt="github"
                    />
                  </a>
                </button>
                <button className="rounded-full w-8 h-8 mx-1">
                  <a
                    href="https://www.linkedin.com/in/martin-manchev/"
                    target="_blank"
                  >
                    <img
                      src={require("../img/linkedin.svg").default}
                      alt="linkedIn"
                    />
                  </a>
                </button>
                <button className="rounded-full w-8 h-8 mx-1.5">
                  <a
                    href="https://mobile.twitter.com/MartinManchev8"
                    target="_blank"
                  >
                    <img
                      src={require("../img/twitter.svg").default}
                      alt="twitter"
                    />
                  </a>
                </button>
              </div>
            </div>
            {/* Dimitar Desc. */}
            <div className="ml-4 p-16 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
              <div className="flex flex-col items-center pb-10">
                <Avatar
                  className="mb-2"
                  sx={{ width: 60, height: 60 }}
                  alt="Dimitar Kyuchukov"
                  src={kyuchukov}
                />
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Dimitar Kyuchukov
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Frontend Developer
                </span>
                <div className="flex mt-4 space-x-3 lg:mt-6 mb-2">
                  <hr className="bg-black	w-16" />
                </div>
                <p className="text-center">
                  Интересувам се от Web, UI/UX и Frontend Development
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="rounded-full w-8 h-8 mx-1">
                  <a href="https://github.com/mitakawe123" target="_blank">
                    <img
                      src={require("../img/github.svg").default}
                      alt="github"
                    />
                  </a>
                </button>
                <button className="rounded-full w-8 h-8 mx-1">
                  <a
                    href="https://www.linkedin.com/in/dimitar-kiuchukov-48a4651b2/"
                    target="_blank"
                  >
                    <img
                      src={require("../img/linkedin.svg").default}
                      alt="linkedIn"
                    />
                  </a>
                </button>
                <button className="rounded-full w-8 h-8 mx-1.5">
                  <a href="https://twitter.com/Dimitar25218800" target="_blank">
                    <img
                      src={require("../img/twitter.svg").default}
                      alt="twitter"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
