import React, { useEffect, useRef } from "react";

function Modal({
  setNeedRegisModal,
  needRegisModal,
  isOpenSignUp,
  setIsOpenSignUp,
  SignUp,
}) {
  const outsideClickRefBrowser = useRef();

  const logAcc = () => {
    setIsOpenSignUp(true);
    setNeedRegisModal(false);
  };

  //when click outside the modal close it
  useEffect(() => {
    const checkIfClickedOutsideSign = (e) => {
      if (
        needRegisModal &&
        outsideClickRefBrowser.current &&
        !outsideClickRefBrowser.current.contains(e.target)
      ) {
        setNeedRegisModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutsideSign);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutsideSign);
    };
  }, [needRegisModal]);

  return (
    <div className="min-w-screen h-screen animated fadeIn faster left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover bg-gray-900 bg-opacity-75 transition-opacity overflow-y-auto overflow-x-hidden fixed md:h-full md:inset-0">
      <div className="relative px-4 w-full max-w-lg h-full md:h-auto">
        <div
          ref={outsideClickRefBrowser}
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <div className="flex justify-center items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Трябва Да Влезете В Акаунта си
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
              За да използвате тази функция трябва да влезете в{" "}
              <button
                className="underline hover:text-teal-400"
                onClick={logAcc}
              >
                акаунта си.
              </button>
            </p>
          </div>
          {isOpenSignUp && <SignUp />}
        </div>
      </div>
    </div>
  );
}

export default Modal;
