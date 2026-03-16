"use client"

import { motion } from "framer-motion"

export default function Timeline() {

    return (

        <section className="h-screen flex flex-col items-center justify-center text-center">

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                <p className="text-lg text-gray-300 leading-relaxed">

                    Different states.

                    Different routines.

                    Different lives.

                    But somehow the conversation
                    found its way back again.

                </p>

            </motion.div>

        </section>

    )

}