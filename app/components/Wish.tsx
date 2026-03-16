"use client"

import { useState } from "react"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"

export default function Wish() {

    const [wish, setWish] = useState(false)

    function makeWish() {

        setWish(true)

        confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 }
        })

    }

    return (

        <section className="h-screen flex flex-col items-center justify-center text-center mt-20">

            <h2 className="text-2xl mb-8">Make a birthday wish</h2>

            {!wish ?

                <div
                    onClick={makeWish}
                    className="text-4xl cursor-pointer active:scale-90 relative"
                >
                    <motion.img
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2.5 }}
                        src="/images/deborah1.jpeg"
                        className="w-72 rounded-2xl shadow-xl"
                    />

                    <span className="absolute top-50 left-28 text-6xl animate-bounce">⭐</span>
                    <span className="absolute top-72 left-28  animate-bounce">tap me</span>

                </div>

                :

                <p className="text-gray-300 max-w-sm">

                    I don't know what you wished for.

                    But I hope this year
                    brings you more smiles and progress
                    than the last one.

                </p>

            }

        </section>

    )

}