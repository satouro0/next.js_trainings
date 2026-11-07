"use client;"

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"

export default function Aos() {
    useEffect(() => {
            Aos.init({
                duration: 1000,
                once: true,
            })
        }, [])  
}
