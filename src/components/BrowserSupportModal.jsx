import React, { useEffect, useRef } from "react";

function BrowserSupportModal({ setBrowserMode, browserMode }) {
  const outsideClickRefBrowser = useRef();

  //when click outside the modal close it
  useEffect(() => {
    const checkIfClickedOutsideSign = (e) => {
      if (
        browserMode &&
        outsideClickRefBrowser.current &&
        !outsideClickRefBrowser.current.contains(e.target)
      ) {
        setBrowserMode(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutsideSign);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutsideSign);
    };
  }, [browserMode]);

  return (
    <div className="min-w-screen h-screen animated fadeIn faster left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover bg-gray-900 bg-opacity-75 transition-opacity overflow-y-auto overflow-x-hidden fixed md:h-full md:inset-0">
      <div className="relative px-4 w-full max-w-lg h-full md:h-auto">
        <div
          ref={outsideClickRefBrowser}
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <div className="flex justify-center items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Браузърът ви не е съвместим
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
              За съжаление Signity все още не поддържа браузърът ви.
              <br />
              Поддържани браузъри:{" "}
              <div className="flex justify-center items-center">
                <img src="https://img.icons8.com/color/48/000000/chrome--v1.png" />{" "}
                <img src="https://img.icons8.com/color/48/000000/ms-edge-new.png" />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowserSupportModal;
