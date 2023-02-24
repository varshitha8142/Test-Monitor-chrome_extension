import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Login({ setLogin, newWindowRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [invitecode, setInvitecode] = useState("");

  const [error, setError] = useState(null);

  const handleTest = async () => {
    const response = await fetch(`http://localhost:3000/user`, {
      method: "POST",
      body: JSON.stringify({ name, email, invitecode }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (response.ok) {
      chrome.storage.local.set({ IsLogin: true, User: json }, () => {
        console.log("login successful :", json);
      });
      setLogin({ IsLogin: true, User: json });
      window.open("../newtab/index.html");
    } else {
      setError(json.message);
    }
  };

  useEffect(() => {
    chrome.storage.local.get(["IsLogin", "User"], (value) => {
      if (value.IsLogin) {
        setLogin({ IsLogin: true, User: value.User });
        console.log(value);
      } else {
        setLogin({ IsLogin: false, User: null });
      }
    });
  }, []);
  return (
    <div className="w-full h-full bg-gray-100 rounded-md flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold font-serif text-3xl">Login Details</h1>
      <div className="w-1/2">
        <fieldset
          className={`border-2 hover:border-[#0198A5] rounded-lg  ${
            name != "" && "border-[#0198A5]"
          }`}
        >
          <legend className="ml-2.5 text-[#0198A5]">Name</legend>
          <div className="flex w-full gap-2 px-2">
            <input
              type="email"
              className="outline-none bg-transparent pl-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
      <div className="w-1/2">
        <fieldset
          className={`border-2 hover:border-[#0198A5] rounded-lg  ${
            name != "" && "border-[#0198A5]"
          }`}
        >
          <legend className="ml-2.5 text-[#0198A5]">Email</legend>
          <div className="flex w-full gap-2 px-2">
            <input
              type="email"
              className="outline-none pl-2 bg-transparent w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
      <div className="w-1/2">
        <fieldset
          className={`border-2 hover:border-[#0198A5] rounded-lg  ${
            name != "" && "border-[#0198A5]"
          }`}
        >
          <legend className="ml-2.5 text-[#0198A5]">Invite Code</legend>
          <div className="flex w-full gap-2 px-2">
            <input
              type="text"
              className="outline-none pl-2 bg-transparent w-full"
              value={invitecode}
              onChange={(e) => setInvitecode(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
      <div>
        {error && (
          <h1 className="border border-red-300 p-2 rounded-lg bg-red-200">
            {error}
          </h1>
        )}
      </div>
      <div className="w-full flex justify-center  gap-10">
        <button
          className="w-1/5 h-10 bg-green-400 rounded-md active:scale-95"
          onClick={handleTest}
        >
          Start Test
        </button>
      </div>
    </div>
  );
}

export default Login;
