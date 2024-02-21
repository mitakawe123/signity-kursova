import React, { useState } from "react";
import { UserContext } from "./components/context/UserContext";
import { Route, Routes } from "react-router-dom";
import CameraMode from "./components/CameraMode";
import MakeSuggestions from "./components/MakeSuggestions";
import AnimMode from "./components/AnimMode";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [avatarImg, setAvatarImg] = useState(false);

  return (
    <UserContext.Provider
      value={{ openModal, avatarImg, setAvatarImg, setOpenModal }}
    >
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<CameraMode />} />
        <Route path="/animation" element={<AnimMode />} />
        <Route path="/suggestions" element={<MakeSuggestions />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
