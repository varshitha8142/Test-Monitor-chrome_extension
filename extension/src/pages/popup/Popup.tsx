import { useState, useRef } from "react";
import Login from "./components/Login";
import Camera from "./components/Camera";

function Popup() {
  const [login, setLogin] = useState({ IsLogin: false, User: null });

  return (
    <div className="w-[400px] h-[600px] bg-[#00000020]">
      {login.IsLogin ? (
        <Camera setLogin={setLogin} />
      ) : (
        <Login setLogin={setLogin} />
      )}
    </div>
  );
}

export default Popup;
