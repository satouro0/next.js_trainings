import React from "react";

export default function Facebook_login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-100 h-120 rounded-xl p-20">
        <input
          type="text"
          placeholder="Email or Phone number"
          className="border-2 rounded-md p-3"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Password"
          className="border-2 rounded-md p-3 "
        />
        <br /> <br />
        <button className="bg-blue-800 px-20 text-2xl text-white rounded-md">
          Log in
        </button>
        <br />
        <br />
        <hr />
        <br />
        <a href="" className="text-blue-600 text-sm px-13">
          forgot password?
        </a>
        <br />
        <br />
        <hr />
        <br />
        <button className="bg-green-500 text-xl text-white rounded-md px-5 ">
          Create new account
        </button>
      </div>
    </div>
  );
}
