"use client"

import { useState } from "react"

export default function addUserForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("")

    async function handleSubmit() {
        const rest = await fetch("/api_dir/users", {
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify({ name }),
        })
        const data = await rest.json
        console.log(data);

    }
    return (
        <div className="p-5">
            <input 
            value={name} 
            onChange={(event) => setName(event.target.value)}
            placeholder="username"
            className="border p-2 rounded-4xl"
            />
            <button
            className="bg-blue-500 text-white px-5"
            onClick={handleSubmit}
            >
                submit
            </button>
        </div>
    )
}