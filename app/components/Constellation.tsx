"use client"

import { motion } from "framer-motion"

export default function Constellation() {

    return (

        <section className="h-screen flex items-center justify-center">

            <motion.h1
                initial={{ opacity: 0, y:200 }}
                whileInView={{ opacity: 1 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 2 }}
                className="text-5xl text-pink-400 tracking-widest"
            >

                DEBORAH

            </motion.h1>

        </section>

    )

}