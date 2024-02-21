import React, { useRef, useState, useCallback } from "react";
import "../css/makeSug.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import logo from "../img/logo.png";
import Webcam from "react-webcam";
import "firebase/compat/storage";
import "firebase/compat/database";
import { ref, set } from "firebase/database";
import { storage, database } from "./firebase";
import { uid } from "uid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/mobile.css";
const FileSaver = require("file-saver");

function MakeSuggestions() {
  //submit text to database
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  //submit img to storage
  const [state, setState] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const submitForm = (e) => {
    let array = [];

    for (let value of Object.values(e.target.files)) {
      array.push(value.name);
    }
    setState(array);

    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
    const uuid = uid();
    set(ref(database, `/${uuid}`), {
      text,
      uuid,
    });
    setText("");
    setState();
    toast.success("Успешно изпратихте файл!", {
      transition: Slide,
      position: "bottom-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  //capture screenshot
  const webcamRef = useRef(null);

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    var file = dataURLtoFile(imageSrc, "screenshot.jpeg");
    FileSaver.saveAs(file);
  }, [webcamRef]);

  //capture video
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "SignityVideo.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  let navigate = useNavigate();

  return (
    <div
      className="h-screen overflow-hidden flex"
      style={{ backgroundColor: "#f0f2f5" }}
    >
      <div className="flex justify-center items-center h-full w-1/4 border-r-2 border-gray-500 bg-white section-suggestion">
        <div className="h-3/4">
          <form
            className="flex justify-center items-center flex-col"
            onSubmit={handleUpload}
          >
            <div className="text-left w-10/12">
              <small style={{ color: "#CCD0D5" }}>Signity</small>
              <h1 className="font-bold text-lg mb-4 makeSugText">
                Изпратете вашите предложения
              </h1>
            </div>
            <div className="border border-gray-500 w-10/12 rounded-xl mb-4">
              <label
                htmlFor="filePicker"
                className="cursor-pointer flex justify-center items-center flex-col text-center pt-1 px-4"
              >
                <PhotoLibraryIcon className="mt-6"></PhotoLibraryIcon>
                <h2 className="font-bold">Добавяне на снимка или видеоклип</h2>
              </label>
              <input
                id="filePicker"
                style={{ visibility: "hidden" }}
                type="file"
                required
                onChange={submitForm}
              />
              <div
                className="text-center mb-4 cursor-pointer"
                id="file-upload-filename"
                onDoubleClick={() => setState([])}
              >
                {state}
              </div>
            </div>
            <textarea
              className="resize-none w-10/12 rounded-xl mb-4"
              rows="10"
              placeholder="Напиши кратко описание за знака който изпращаш и защо мислиш, че трябва да го добавим"
              minLength="70"
              required
              value={text}
              onChange={handleTextChange}
            ></textarea>
            <div className="flex">
              <button
                type="submit"
                className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
              >
                Изпращане
              </button>
              <button
                type="submit"
                className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
                onClick={() => navigate("/animation")}
              >
                Назад
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-full flex-col camera-section">
        <Webcam
          audio={false}
          ref={webcamRef}
          className="webcam-sug"
          screenshotFormat="image/jpeg"
        />
        <div className="flex">
          <button
            className="mr-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
            onClick={capture}
          >
            Скрийншот на камерата
          </button>
          {capturing ? (
            <button
              className="mr-4 mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full z-50"
              onClick={handleStopCaptureClick}
            >
              Спри Клип
            </button>
          ) : (
            <div>
              {recordedChunks.length > 0 && (
                <button
                  className="mr-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
                  onClick={handleDownload}
                >
                  Изтегли
                </button>
              )}
              <button
                className="mr-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
                onClick={handleStartCaptureClick}
              >
                Направи Клип
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        className="w-44 absolute cursor-pointer main-icon"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" />
      </button>
    </div>
  );
}

export default MakeSuggestions;
