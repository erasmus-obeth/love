import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">

            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
            >
                Happy Birthday Deborah
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8 text-lg text-gray-300 max-w-xl"
            >
                Some people disappear from our lives.
                <br />
                2016 did that to us.
                <br /><br />
                Funny how November decided to reconnect the story.
            </motion.p>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-20 text-gray-400"
            >
                scroll ↓
            </motion.div>

        </section>
    )
}