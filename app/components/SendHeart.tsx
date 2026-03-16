"use client"
import {motion} from "framer-motion"

import { useState } from "react"

export default function SendHeart() {

    const [sent, setSent] = useState(false)

    return (

        <section className="h-screen flex flex-col items-center justify-center text-center">

            {!sent ?

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 1.2 }} 
                    onClick={() => setSent(true)}
                    className="text-7xl cursor-pointer animate-ping"
                >

                    ❤️

                </motion.div>

                :

                <div>

                    <p className="mb-6 text-gray-300">

                        Heart received.

                        Somewhere in Gombe
                        someone just smiled.

                    </p>

                    <a
                        href="https://wa.me/+2348129709392"
                        className="px-6 py-3 text-gray-100  bg-pink-500 rounded-xl"
                        target="_blank"
                    >

                        Send me a message

                    </a>

                </div>

            }

        </section>

    )

}