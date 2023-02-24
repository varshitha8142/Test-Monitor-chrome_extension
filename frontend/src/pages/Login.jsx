import React, { useState } from "react";
import loginbackground from "../assets/loginbackground.gif";

import { toast } from "react-toastify";
import {
  HiOutlineMail,
  HiOutlineLockOpen,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";

function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordtype, setPasswordtype] = useState("password");

  const TogglePassword = () => {
    if (passwordtype == "password") {
      setPasswordtype("text");
    } else {
      setPasswordtype("password");
    }
  };
  const handleSignIn = () => {
    if (email == "" || password == "") {
      toast.error("Make sure all fields are not empty");
      return;
    }
    if (email == "admin@gmail.com" && password == "1234") {
        setLogin({ email: email, password: password });
      toast.success("Login succesful");
    } else {
      toast.error("Email and Password are Incorrect");
    }
  };
  return (
    <div className="flex flex-col h-full w-full  bg-[#0198A5] md:bg-white rounded-3xl md:flex-row md:h-[98%] md:w-[99%]">
      <div className="w-full h-1/3  bg-[#0198A5] flex items-center justify-center rounded-3xl md:h-full md:flex-col">
        <img src={loginbackground} className="hidden md:inline" />
      </div>

      <div className="w-full h-full flex flex-col items-center bg-white justify-center gap-10 rounded-xl">
        <div>
          <h1 className="text-center text-xl font-bold md:text-4xl">
            Welcome!
          </h1>
          <p>Please enter your details</p>
        </div>

        <div className="flex flex-col gap-10 w-[70%]">
          <div>
            <fieldset
              className={`border-2 hover:border-[#0198A5] rounded-lg  ${
                email != "" && "border-[#0198A5]"
              }`}
            >
              <legend className="ml-2.5 text-[#0198A5]">Email</legend>
              <div className="flex w-full gap-2 px-2">
                <HiOutlineMail size={20} className="text-[#0198A5]" />
                <input
                  type="email"
                  className="outline-none pl-2 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset
              className={`border-2 hover:border-[#0198A5] rounded-lg  ${
                password != "" && "border-[#0198A5]"
              }`}
            >
              <legend className="ml-2.5 text-[#0198A5]">Password</legend>
              <div className="flex w-full gap-2 px-2">
                <HiOutlineLockOpen size={20} className="text-[#0198A5]" />
                <input
                  type={passwordtype}
                  className="outline-none w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordtype == "password" ? (
                  <HiOutlineEye
                    size={20}
                    className="text-[#0198A5]"
                    onClick={TogglePassword}
                  />
                ) : (
                  <HiOutlineEyeOff
                    size={20}
                    className="text-[#0198A5]"
                    onClick={TogglePassword}
                  />
                )}
              </div>
            </fieldset>
          </div>
          <h1 className="text-right">forgot password?</h1>
          <button
            className="bg-[#0198A5] rounded-lg h-10 text-white active:scale-95"
            onClick={handleSignIn}
          >
            sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
