import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import PhoneInput from "react-phone-number-input";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

function PhoneNumberVerification({
  recaptcha,
  setAvatarImg,
  isOpenSignUp,
  setIsOpenSignUp,
}) {
  const auth = firebase.auth();
  const [userIn, setUserIn] = useState(false);

  //google provider
  let providerGoogle = new firebase.auth.GoogleAuthProvider();
  const logInGoogle = () => {
    firebase.auth().signInWithRedirect(providerGoogle);
    setAvatarImg(false);
  };

  //github provider
  let providerGitHub = new firebase.auth.GithubAuthProvider();
  const logInGitHub = () => {
    firebase.auth().signInWithRedirect(providerGitHub);
    setAvatarImg(false);
  };

  //facebook provider
  let providerFacebook = new firebase.auth.FacebookAuthProvider();
  const logInFacebook = () => {
    firebase.auth().signInWithRedirect(providerFacebook);
    setAvatarImg(false);
  };

  const [digits, setDigits] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState("");

  const phoneNumber = `${digits}`;

  //Sign in with phone
  const [inPhone, setInPhone] = useState(false);

  const signInWithPhoneNumber = async (e) => {
    setConfirmationResult(
      await auth.signInWithPhoneNumber(phoneNumber, recaptcha)
    );
    setInPhone(true);
  };

  //Verify SMS code
  const verifyCode = async () => {
    const result = await confirmationResult.confirm(code);
    setUserIn(false);
    setAvatarImg(true);
  };

  //when click outdside the modal close it
  const outsideClickRefSign = useRef();

  useEffect(() => {
    const checkIfClickedOutsideSign = (e) => {
      if (
        isOpenSignUp &&
        outsideClickRefSign.current &&
        !outsideClickRefSign.current.contains(e.target)
      ) {
        setIsOpenSignUp(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutsideSign);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutsideSign);
    };
  }, [isOpenSignUp]);

  //Modal for auth the user
  return (
    <main className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover bg-gray-900 bg-opacity-75 transition-opacity">
      <section className="absolute w-full h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div
              ref={outsideClickRefSign}
              className="relative px-4 w-full max-w-md h-full md:h-auto"
            >
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-end p-2">
                  <button
                    onClick={() => setIsOpenSignUp(false)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="authentication-modal"
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

                <div className="btn-wrapper text-center px-6 pb-2 ">
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                    style={{ transition: "all .15s ease" }}
                    onClick={logInGitHub}
                  >
                    <GitHubIcon className="w-5 mr-1"></GitHubIcon>
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                    style={{ transition: "all .15s ease" }}
                    onClick={logInGoogle}
                  >
                    <GoogleIcon className="w-5 mr-1"></GoogleIcon>
                    Google
                  </button>
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none ml-1 mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                    style={{ transition: "all .15s ease" }}
                    onClick={logInFacebook}
                  >
                    <FacebookIcon className="w-5 mr-1"></FacebookIcon>
                    Facebook
                  </button>
                </div>

                <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                  <hr className="mt-6 border-b-1 border-gray-400" />

                  <div>
                    <label
                      htmlFor="tel"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Вашият телефонен номер
                    </label>
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="BG"
                      placeholder="+359 12 345 6789"
                      value={digits}
                      onChange={setDigits}
                      required
                      minLength="8"
                      maxLength="16"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="code"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Вашият код
                    </label>
                    <input
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="123456"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                      required
                      minLength="6"
                      maxLength="6"
                    />
                  </div>

                  {inPhone ? (
                    confirmationResult && (
                      <button
                        onClick={verifyCode}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Влез а акаунта си
                      </button>
                    )
                  ) : (
                    <button
                      onClick={signInWithPhoneNumber}
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Изпрати код
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PhoneNumberVerification;
