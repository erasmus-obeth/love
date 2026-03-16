"use client"
import {motion} from "framer-motion"

import { useState } from "react"

export default function PhotoMemory() {

    const [open, setOpen] = useState(false)

    return (

        <section className="h-screen flex flex-col items-center justify-center text-center">

            <motion.img
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5 }}
                src="/images/deborah2.jpeg"
                onClick={() => setOpen(true)}
                className="w-72 rounded-2xl shadow-xl"
            />

            <p className="mt-4 text-gray-400">tap the photo</p>

            {open && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >

                    <p className="text-lg text-gray-200 max-w-sm">

                        When I saw this photo I paused.

                        There's something calm & pure about it.

                        The kind of beauty that doesn't try too hard.

                    </p>
                    <p className="absolute w-full bottom-40 text-blue-500">tap to go back</p>

                </div>
            )}

        </section>

    )

}