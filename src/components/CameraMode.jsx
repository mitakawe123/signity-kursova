import React, { useState, useEffect, useRef, useContext } from "react";
//imgs and css
import logo from "../img/logo1.png";
import "../css/mobile.css";
//firebase imports
import firebase from "firebase/compat/app";
import hello from "../img/hello.png";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
//mui import
import { Avatar } from "@mui/material";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
//phone verification imports and css files
import "../css/mainPage.css";
import "react-phone-number-input/style.css";
import "../css/message.css";
//webcam and gesture imports
import Webcam from "react-webcam";
import Gestures from "./gestures/Gestures";
import * as Camera from "@mediapipe/camera_utils";
import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
//Context
import { UserContext } from "./context/UserContext";
//Modals
import AboutModal from "./AboutModal.jsx";
import PhoneNumberVerification from "./PhoneNumberVerification.jsx";
import BrowserSupportModal from "./BrowserSupportModal";
//Toottip libary
import ReactTooltip from "react-tooltip";
//Make sug. page and react router dom
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
//Animation components
import { useSpeechRecognition } from "react-speech-recognition";
// Tensorflow.js, Fingerpose and Handpose
const fingerpose = require("fingerpose");

function CameraMode() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [sentence] = useState([]);
  let content;

  const [messages, setMessages] = useState([]);
  const [thumbL, setThumbL] = useState("Thumb");
  const [indexL, setIndexL] = useState("Index");
  const [middleL, setMiddleL] = useState("Middle");
  const [ringL, setRingL] = useState("Ring");
  const [pinkyL, setPinkyL] = useState("Pinky");

  const [thumbR, setThumbR] = useState("Thumb");
  const [indexR, setIndexR] = useState("Index");
  const [middleR, setMiddleR] = useState("Middle");
  const [ringR, setRingR] = useState("Ring");
  const [pinkyR, setPinkyR] = useState("Pinky");

  const resetMessageBox = () => {
    console.log("nz kak da go nrapvq tva");
  };

  const onResults = (result) => {
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const ctx = canvasRef.current.getContext("2d");

    ctx.save();
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.drawImage(
      result.image,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    if (result.multiHandLandmarks) {
      for (const landmarks of result.multiHandLandmarks) {
        drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
          color: "#00FF00",
          lineWidth: 3,
        });
        drawLandmarks(ctx, landmarks, { color: "#FF0000", lineWidth: 2 });
      }
    }

    ctx.restore();

    if (result.multiHandLandmarks && result.multiHandedness) {
      const GE = new fingerpose.GestureEstimator([
        Gestures.AL,
        Gestures.AR,
        Gestures.BL,
        Gestures.BR,
        Gestures.CHL,
        Gestures.CHR,
        Gestures.DL,
        Gestures.DR,
        Gestures.EL,
        Gestures.ER,
        Gestures.EndL,
        Gestures.EndR,
        Gestures.FL,
        Gestures.FR,
        Gestures.FiveL,
        Gestures.FiveR,
        Gestures.FourL,
        Gestures.FourR,
        Gestures.GL,
        Gestures.GR,
        Gestures.HL,
        Gestures.HR,
        Gestures.HelloL,
        Gestures.HelloR,
        Gestures.IL,
        Gestures.IR,
        Gestures.IntervalL,
        Gestures.IntervalR,
        Gestures.KL,
        Gestures.KR,
        Gestures.LL,
        Gestures.LR,
        Gestures.ML,
        Gestures.MR,
        Gestures.NL,
        Gestures.NR,
        Gestures.NoL,
        Gestures.NoR,
        Gestures.OL,
        Gestures.OR,
        Gestures.OneL,
        Gestures.OneR,
        Gestures.PL,
        Gestures.PR,
        Gestures.QL,
        Gestures.QR,
        Gestures.RL,
        Gestures.RR,
        Gestures.SL,
        Gestures.SR,
        Gestures.SHL,
        Gestures.SHR,
        Gestures.TL,
        Gestures.TR,
        Gestures.ThreeL,
        Gestures.ThreeR,
        Gestures.TSL,
        Gestures.TSR,
        Gestures.TwoL,
        Gestures.TwoR,
        Gestures.UL,
        Gestures.UR,
        Gestures.VL,
        Gestures.VR,
        Gestures.YL,
        Gestures.YR,
        Gestures.YesL,
        Gestures.YesR,
        Gestures.YUL,
        Gestures.YUR,
        Gestures.ZL,
        Gestures.ZR,
        Gestures.ZHL,
        Gestures.ZHR,
      ]);

      if (result.multiHandedness.length === 1) {
        const multiHandLandmarks = result.multiHandLandmarks[0];
        const landmarks = multiHandLandmarks.map((landmark) => [
          landmark.x,
          landmark.y,
          landmark.z,
        ]);
        const gesture = GE.estimate(landmarks, 10);

        if (result.multiHandedness[0].label === "Left") {
          setThumbL(
            `${gesture.poseData[0][0]} | ${gesture.poseData[0][1]} | ${gesture.poseData[0][2]}`
          );
          setIndexL(
            `${gesture.poseData[1][0]} | ${gesture.poseData[1][1]} | ${gesture.poseData[1][2]}`
          );
          setMiddleL(
            `${gesture.poseData[2][0]} | ${gesture.poseData[2][1]} | ${gesture.poseData[2][2]}`
          );
          setRingL(
            `${gesture.poseData[3][0]} | ${gesture.poseData[3][1]} | ${gesture.poseData[3][2]}`
          );
          setPinkyL(
            `${gesture.poseData[4][0]} | ${gesture.poseData[4][1]} | ${gesture.poseData[4][2]}`
          );

          setThumbR("Thumb");
          setIndexR("Index");
          setMiddleR("Middle");
          setRingR("Ring");
          setPinkyR("Pinky");
        } else {
          setThumbL("Thumb");
          setIndexL("Index");
          setMiddleL("Middle");
          setRingL("Ring");
          setPinkyL("Pinky");

          setThumbR(
            `${gesture.poseData[0][0]} | ${gesture.poseData[0][1]} | ${gesture.poseData[0][2]}`
          );
          setIndexR(
            `${gesture.poseData[1][0]} | ${gesture.poseData[1][1]} | ${gesture.poseData[1][2]}`
          );
          setMiddleR(
            `${gesture.poseData[2][0]} | ${gesture.poseData[2][1]} | ${gesture.poseData[2][2]}`
          );
          setRingR(
            `${gesture.poseData[3][0]} | ${gesture.poseData[3][1]} | ${gesture.poseData[3][2]}`
          );
          setPinkyR(
            `${gesture.poseData[4][0]} | ${gesture.poseData[4][1]} | ${gesture.poseData[4][2]}`
          );
        }

        if (gesture.gestures[0]) {
          const sign = gesture.gestures[0].name;

          if (sentence.length === 0 && sign !== ".") {
            sentence.push(sign);
          } else if (
            sign === "Н" &&
            sentence[sentence.length - 2] !== "Н" &&
            sentence[sentence.length - 1] === "Н" &&
            sign !== "."
          ) {
            sentence.push(sign);
          } else if (
            sign === "Т" &&
            sentence[sentence.length - 2] !== "Т" &&
            sentence[sentence.length - 1] === "Т" &&
            sign !== "."
          ) {
            sentence.push(sign);
          } else if (sentence[sentence.length - 1] !== sign && sign !== ".") {
            sentence.push(sign);
          } else if (sign === ".") {
            content = sentence.filter((x) => x !== ".").join("");

            if (content) {
              console.log(content);
              setMessages((array) => [...array, content]);
            }

            sentence.length = 0;
          }
        }
      } else if (result.multiHandedness.length === 2) {
        const multiLeftHandLandmarks = result.multiHandLandmarks[0];
        const multiRightHandLandmarks = result.multiHandLandmarks[1];

        const leftLandmarks = multiLeftHandLandmarks.map((landmark) => [
          landmark.x,
          landmark.y,
          landmark.z,
        ]);
        const rightLandmarks = multiRightHandLandmarks.map((landmark) => [
          landmark.x,
          landmark.y,
          landmark.z,
        ]);

        const leftGesture = GE.estimate(leftLandmarks, 10);
        const rightGesture = GE.estimate(rightLandmarks, 10);

        setThumbL(
          `${leftGesture.poseData[0][0]} | ${leftGesture.poseData[0][1]} | ${leftGesture.poseData[0][2]}`
        );
        setIndexL(
          `${leftGesture.poseData[1][0]} | ${leftGesture.poseData[1][1]} | ${leftGesture.poseData[1][2]}`
        );
        setMiddleL(
          `${leftGesture.poseData[2][0]} | ${leftGesture.poseData[2][1]} | ${leftGesture.poseData[2][2]}`
        );
        setRingL(
          `${leftGesture.poseData[3][0]} | ${leftGesture.poseData[3][1]} | ${leftGesture.poseData[3][2]}`
        );
        setPinkyL(
          `${leftGesture.poseData[4][0]} | ${leftGesture.poseData[4][1]} | ${leftGesture.poseData[4][2]}`
        );

        setThumbR(
          `${rightGesture.poseData[0][0]} | ${rightGesture.poseData[0][1]} | ${rightGesture.poseData[0][2]}`
        );
        setIndexR(
          `${rightGesture.poseData[1][0]} | ${rightGesture.poseData[1][1]} | ${rightGesture.poseData[1][2]}`
        );
        setMiddleR(
          `${rightGesture.poseData[2][0]} | ${rightGesture.poseData[2][1]} | ${rightGesture.poseData[2][2]}`
        );
        setRingR(
          `${rightGesture.poseData[3][0]} | ${rightGesture.poseData[3][1]} | ${rightGesture.poseData[3][2]}`
        );
        setPinkyR(
          `${rightGesture.poseData[4][0]} | ${rightGesture.poseData[4][1]} | ${rightGesture.poseData[4][2]}`
        );

        if (leftGesture.gestures[0] && rightGesture.gestures[0]) {
          const signL = leftGesture.gestures[0].name;
          const signR = rightGesture.gestures[0].name;

          if (
            sentence[sentence.length - 1] !== "Благодаря ви" &&
            signL === "В" &&
            signR === "В"
          ) {
            sentence.push("Благодаря ви");
          } else if (
            sentence[sentence.length - 1] !== "6" &&
            ((signL === "5" && signR === "1") ||
              (signL === "1" && signR === "5"))
          ) {
            sentence.push("6");
          } else if (
            sentence[sentence.length - 1] !== "7" &&
            ((signL === "5" && signR === "2") ||
              (signL === "2" && signR === "5"))
          ) {
            sentence.push("7");
          } else if (
            sentence[sentence.length - 1] !== "8" &&
            ((signL === "5" && signR === "3") ||
              (signL === "3" && signR === "5"))
          ) {
            sentence.push("8");
          } else if (
            sentence[sentence.length - 1] !== "9" &&
            ((signL === "5" && signR === "4") ||
              (signL === "4" && signR === "5"))
          ) {
            sentence.push("9");
          } else if (
            sentence[sentence.length - 1] !== "10" &&
            ((signL === "5" && signR === "5") ||
              (signL === "5" && signR === "5"))
          ) {
            sentence.push("10");
          }
        }
      } else {
        setThumbL("Thumb");
        setIndexL("Index");
        setMiddleL("Middle");
        setRingL("Ring");
        setPinkyL("Pinky");

        setThumbR("Thumb");
        setIndexR("Index");
        setMiddleR("Middle");
        setRingR("Ring");
        setPinkyR("Pinky");
      }
    }
  };

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.9,
      minTrackingConfidence: 0.9,
    });

    hands.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      const camera = new Camera.Camera(webcamRef.current.video, {
        onFrame: async () => {
          if (webcamRef.current && webcamRef.current.video)
            await hands.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });

      camera.start();
    }
  }, []);

  const deleteCharacter = () => {
    sentence.pop();
  };

  const clearSentence = () => {
    // sentence.splice(0, sentence.length);
    sentence.length = 0;
  };

  //firebase
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  //context
  const { openModal, setOpenModal, avatarImg, setAvatarImg } =
    useContext(UserContext);

  //modals
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);

  const SignUp = () => {
    const [recaptcha, setRecaptcha] = useState(null);
    const element = useRef(null);

    useEffect(() => {
      if (!recaptcha) {
        const verifier = new firebase.auth.RecaptchaVerifier(element.current, {
          size: "invisible",
        });
        verifier.verify().then(() => setRecaptcha(verifier));
      }
    });

    return (
      <>
        {recaptcha && (
          <PhoneNumberVerification
            isOpenSignUp={isOpenSignUp}
            setIsOpenSignUp={setIsOpenSignUp}
            setAvatarImg={setAvatarImg}
            recaptcha={recaptcha}
          />
        )}
        <div ref={element}></div>
      </>
    );
  };

  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  //modal for about us component
  const [browserMode, setBrowserMode] = useState(false);
  const [needRegisModal, setNeedRegisModal] = useState(false);

  //check if the is first time visiting the site
  function GetCookie(name) {
    let arg = name + "=";
    let alen = arg.length;
    let clen = document.cookie.length;
    let i = 0;
    while (i < clen) {
      let j = i + alen;
      if (document.cookie.substring(i, j) == arg) return "here";
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break;
    }
    return null;
  }

  //get cookies
  const [newUser, setNewUser] = useState("");
  let image = (
    <div>
      <p>
        Здравей 🖐 Направи знак пред камерата, за да започна да превеждам. Да
        започнем с нещо лесно, кажи “Здрасти”.
      </p>
      <img src={hello} className="h-24 w-24" />
    </div>
  );
  function testFirstCookie() {
    let visit = GetCookie("FirstTimeVisitCookie");
    if (visit === null) {
      let expire = new Date();
      expire = new Date(expire.getTime() + 7776000000);
      document.cookie =
        "FirstTimeVisitCookie=here; expires=" + expire + ";path=/";
      setNewUser(image);
    } else {
      setNewUser("Здравей отново 😃");
    }
  }

  //run the checking function
  useEffect(() => {
    testFirstCookie();
  }, []);

  //logOut user
  const logOutUser = () => {
    auth.signOut();
  };

  // togal the about modal
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  let navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden">
      <button className="w-44 absolute mt-2 ml-2" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="main-icon" />
      </button>
      {/* camera */}
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex justify-center items-center">
          <Webcam ref={webcamRef} className="webcam" audio="false" />

          <canvas ref={canvasRef} className="webcam absolute" />
        </div>

        <div className="chat">
          <div>
            <h1 className="message-title">Signity</h1>
            <p className="messageOne">
              {sentence.length === 0 && messages.length < 1
                ? newUser
                : sentence}
            </p>
            <div>
              {messages.map((item, index) => (
                <div>
                  <p className="message" key={item.index + 1}>
                    {item}
                  </p>
                  {messages.length === 5 ? messages.shift() : null}
                </div>
              ))}
            </div>
          </div>
          <div className="reset-chat">
            <button
              className="underline px-6 py-6 align-bottom leading-4 delEntireRow"
              onClick={clearSentence}
            >
              Нулиране
            </button>
            <button
              className="underline px-6 py-6 align-bottom leading-4 
						delLastChar"
              onClick={deleteCharacter}
            >
              Изтрий последната буква
            </button>
          </div>
        </div>
      </div>
      {user ? (
        <div>
          <button className="message-icon cursor-pointer">
            <MapsUgcIcon sx={{ width: 32, height: 32 }}></MapsUgcIcon>
          </button>
          <div className="absolute top-8 right-8 flex justify-center items-center chat-system">
            {browserSupportsSpeechRecognition ? (
              <button
                className="underline mr-4"
                onClick={() => navigate("/animation")}
              >
                Включи режим Анимация
              </button>
            ) : (
              <button
                onClick={() =>
                  browserSupportsSpeechRecognition ? null : setBrowserMode(true)
                }
                className="underline mr-4"
              >
                Включи режим Анимация
              </button>
            )}

            <button onClick={logOutUser} data-tip data-for="logOutToolTip">
              {avatarImg ? (
                <Avatar sx={{ width: 50, height: 50 }}></Avatar>
              ) : (
                <Avatar sx={{ width: 50, height: 50 }}>
                  <img src={user.photoURL} alt="personInfo" />
                </Avatar>
              )}
            </button>
            <ReactTooltip id="logOutToolTip" place="top" effect="solid">
              Излез
            </ReactTooltip>
          </div>
          {/* check if the browser is supported */}
          {browserMode ? (
            <BrowserSupportModal
              browserMode={browserMode}
              setBrowserMode={setBrowserMode}
            />
          ) : null}

          <div className="mr-5">
            <div className="absolute bottom-6 right-10">
              <button
                className=" mr-4"
                onClick={() => navigate("/suggestions")}
              >
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
            <button className=" ml-2" onClick={() => navigate("/")}>
              Назад
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="absolute top-10 right-10 flex askingRegister">
            <button
              className="underline mr-1"
              onClick={() => setIsOpenSignUp(true)}
            >
              Влез в акаунта си,
            </button>
            <h1>за да използваш режим Анимация</h1>
            {isOpenSignUp ? <SignUp /> : null}
          </div>
          <div className="absolute bottom-6 left-10">
            <button className=" ml-2" onClick={() => navigate("/")}>
              Назад
            </button>
          </div>
          <div className="absolute bottom-6 right-10">
            {/* make the user to log in to use make suggestion function */}
            {needRegisModal ? (
              <Modal
                SignUp={SignUp}
                isOpenSignUp={isOpenSignUp}
                setIsOpenSignUp={setIsOpenSignUp}
                needRegisModal={needRegisModal}
                setNeedRegisModal={setNeedRegisModal}
              />
            ) : null}
            <button className="mr-4" onClick={() => setNeedRegisModal(true)}>
              Направи Предложене
            </button>
            |
            <button className="ml-4" onClick={toggleModal}>
              За нас
            </button>
            {!openModal ? null : <AboutModal />}
          </div>
        </div>
      )}
    </div>
  );
}

export default CameraMode;
