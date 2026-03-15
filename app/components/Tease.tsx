import { motion } from "framer-motion"

export default function Tease() {

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

            <h2 className="text-3xl mb-12">
                One question before your gift
            </h2>

            <p className="text-gray-300 mb-10">
                Which one describes you best?
            </p>

            <div className="flex flex-col gap-4">

                <button className="px-6 py-3 bg-purple-600 rounded-lg hover:scale-105 transition">
                    Trouble
                </button>

                <button className="px-6 py-3 bg-pink-600 rounded-lg hover:scale-105 transition">
                    Mysterious
                </button>

                <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:scale-105 transition">
                    Soft heart pretending to be tough
                </button>

            </div>

        </section>
    )
}