"use client"

import { useState } from "react"
import Hero from "./Hero"
import Timeline from "./Timeline"
import Traits from "./Traits"
import PhotoMemory from "./PhotoMemory"
import Wish from "./Wish"
import Tease from "./Tease"
import Constellation from "./Constellation"
import Voice from "./Voice"
import SendHeart from "./SendHeart"
import Final from "./Final"

export default function Entry() {

    const [start, setStart] = useState(false)

    if (!start) {

        return (

            <div className="h-screen flex items-center justify-center">
                <img
                    src="/images/deborah1.jpeg"
                    // onClick={() => setOpen(true)}
                    className="w-full rounded-2xl shadow-xl absolute"
                />

                <button
                    onClick={() => setStart(true)}
                    className="px-6 py-4 rounded-2xl bg-linear-to-r from-pink-500 to-purple-500 text-lg shadow-xl active:scale-95 transition animate-bounce w-1/2 text-gray-100 "
                >

                    Tap to begin

                </button>

            </div>

        )

    }

    return (

        <main className="overflow-x-hidden px-4  bg-black/80">

            <Hero />
            <Timeline />
            <Traits />
            <PhotoMemory />
            <Wish />
            <Tease />
            <Constellation />
            {/* <Voice /> */}
            <SendHeart />
            <Final />

        </main>

    )

}