import React, { useState, Suspense, useContext } from "react";
import { UserContext } from "./context/UserContext";
import logo from "../img/logo1.png";
import AboutModal from "./AboutModal";
//speech recognition
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//threejs imports
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SignLanguage from "./SignLanguage";
//react router dom
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { Avatar } from "@mui/material";
//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
//css
import "../css/mobile.css";

const AnimMode = () => {
  //context
  const { openModal, setOpenModal, avatarImg } = useContext(UserContext);

  //firebase
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const logOutUser = () => {
    auth.signOut();
    navigate("/camera");
  };

  //speech recognition
  const [enableMic, setEnableMic] = useState(false);

  const { transcript, listening, resetTranscript, isMicrophoneAvailable } =
    useSpeechRecognition();

  if (!isMicrophoneAvailable) {
    alert(`sorry you can't use that`);
  }

  function startSpeech() {
    SpeechRecognition.startListening({ language: "bg", continuous: true });
    resetTranscript();
    setEnableMic(true);
  }

  function stopSpeech() {
    SpeechRecognition.stopListening();
    setEnableMic(false);
  }

  //togal the about modal
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  let navigate = useNavigate();

  return (
    <>
      <div className="absolute top-8 right-8 flex justify-center items-center">
        <button className="underline mr-4" onClick={() => navigate("/camera")}>
          Включи режим Камера
        </button>
        <button onClick={logOutUser} data-tip data-for="logOutToolTip">
          {avatarImg ? (
            <Avatar sx={{ width: 50, height: 50 }}></Avatar>
          ) : (
            <Avatar sx={{ width: 50, height: 50 }}>
              <img src={user ? user.photoURL : null} alt="personInfo" />
            </Avatar>
          )}
        </button>
        <ReactTooltip id="logOutToolTip" place="top" effect="solid">
          Излез
        </ReactTooltip>
      </div>

      <div className="h-full">
        <div className="anim-hero">
          <div className="chat-anim">
            <h1 className="message-title">Signity</h1>
            <p className={transcript.length === 0 ? null : "messageOne"}>
              {transcript}
            </p>
            <button
              className="underline absolute bottom-6 left-10"
              onClick={resetTranscript}
            >
              Изтрий Изреченията
            </button>
          </div>
          <Canvas camera={{ position: [0, 1.2, 1] }} className="animation-hero">
            <ambientLight />
            <Suspense fallback={null}>
              <SignLanguage
                resetTranscript={resetTranscript}
                transcript={transcript}
                listening={listening}
              />
            </Suspense>
            <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
            <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
            <pointLight intensity={2} position={[0, 3, -10]} color="white" />
            <OrbitControls target={[0, 1, 0]} />
          </Canvas>
          <div className="flex justify-center items-center buttons-center">
            {enableMic ? (
              <button
                className="mr-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full z-50"
                onClick={stopSpeech}
              >
                Спри Микрофона
              </button>
            ) : transcript.length > 1 ? (
              <button
                className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50 disabled"
                disabled
              >
                Стартирай Микрофона
              </button>
            ) : (
              <button
                className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
                onClick={startSpeech}
              >
                Стартирай Микрофона
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mr-5">
        <div className="absolute bottom-6 right-10">
          <button className=" mr-4" onClick={() => navigate("/suggestions")}>
            Направи Предложение
          </button>
          |
          <button className="ml-4" onClick={toggleModal}>
            За нас
          </button>
        </div>
        {!openModal ? null : <AboutModal />}
      </div>
      <div className="absolute bottom-6 left-10">
        <button className=" ml-2" onClick={() => navigate("/camera")}>
          Назад
        </button>
      </div>
      <button
        className="w-44 absolute cursor-pointer main-icon"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" />
      </button>
    </>
  );
};

export default AnimMode;
