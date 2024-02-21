import React, { useContext } from "react";
import AboutModal from "./AboutModal";
import { UserContext } from "./context/UserContext";
import logo from "../img/logo1.png";
import background from "../img/background.png";
import "../css/app.css";
import { useNavigate } from "react-router-dom";
import "../css/mobile.css";
function Home() {
  const { openModal, setOpenModal } = useContext(UserContext);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  let navigate = useNavigate();

  return (
    <div className="flex overflow-hidden">
      <div className="h-screen overflow-hidden w-1/2 flex-1 z-50">
        <img src={logo} alt="logo" className="w-44 mt-5 ml-5 main-icon" />

        <div className="flex justify-center align-middle flex-col h-4/6 ml-28 main-container">
          <h1 className="title">SIGNity</h1>

          <p className="text-left py-8 subtitle motto">
            <span id="content1">Ако гласът е бъдещето на компютрите,</span>
            какво да кажем за тези, които не могат
            <span id="content3">да чуват или говорят?</span>
          </p>
          <div className="main-page-btn">
            <button
              className="link button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
              data-text="Signity"
              onClick={() => navigate("/camera")}
            >
              <span className="align-middle">S</span>
              <span className="align-middle">I</span>
              <span className="align-middle">G</span>
              <span className="align-middle">N</span>
              <span className="align-middle">I</span>
              <span className="align-middle">T</span>
              <span className="align-middle">Y</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-end w-1/2 background main-picture">
        <img src={background} alt="people" className="z-10 ml-24 " />
      </div>

      <button
        className="cursor-pointer absolute bottom-8 right-10 z-50 about-us-btn"
        onClick={toggleModal}
      >
        За нас
      </button>
      {!openModal ? null : <AboutModal />}
    </div>
  );
}

export default Home;
