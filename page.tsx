"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const users = [
    { id: 1, name: "gojo", password: "128@#" },
  ];

  const router = useRouter()

  const handleGo = () => {
    router.push("/all_projects")
  }

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const user = users.find((f) => f.name === name && f.password === password)

    if (user) {
        router.push("/")
        setName("")
        setPassword("")
    } else {
      setError(true)
    }

  };

  return (
    <div className="p-20">
      <main>
        <form action="" onSubmit={handleClick} className="">
          <div>
            <input
            className="border"
            type="text"
            placeholder="enter your username"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          </div>
          <br />
          <div>
            <input
          className="border"
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          </div>
          {error && (<p className="text-2xl font-bold text-red-700 ">fuck you</p>)}
          <br />
          <div>
            <button type="submit" className="bg-blue-500 px-5 py-1 rounded-lg" onClick={handleGo}>Login</button>
          </div>
        </form>
      </main>
    </div>
  );
}
