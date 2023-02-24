import React from "react";

// eslint-disable-next-line react/prop-types
function Camera({ setLogin }) {
  const handleLogout = async () => {
    // eslint-disable-next-line react/prop-types

    const response = await fetch(`http://localhost:3000/user`, {
      method: "DELETE",
    });
    const imageresponse = await fetch(`http://localhost:3000/image`, {
      method: "DELETE",
    });
    if (response.ok && imageresponse.ok) {
      chrome.storage.local.remove(["IsLogin", "User"], () => {
        console.log("logout succefully");
      });
      setLogin({ IsLogin: false, User: null });
    }
  };
  return (
    <div className="w-full h-full bg-[#00000020] rounded-md flex flex-col justify-center items-center gap-5">
      <div className="w-full flex justify-center  gap-10">
        <button
          className="w-1/5 h-10 bg-red-300 rounded-md active:scale-95"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Camera;
