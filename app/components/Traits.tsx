import { motion } from "framer-motion"

export default function Traits() {

    const traits = [
        {
            title: "Playful trouble",
            text: "You tease more than you admit."
        },
        {
            title: "Hidden softness",
            text: "You pretend to be tougher than you really are."
        },
        {
            title: "Curiosity",
            text: "You ask questions that reveal more than answers."
        }
    ]

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6">

            <h2 className="text-3xl font-semibold mb-16">
                What I noticed about you
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                {traits.map((t, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-8 rounded-xl bg-[#121218] border border-white/10 hover:border-pink-500 transition"
                    >
                        <h3 className="text-xl mb-3">{t.title}</h3>
                        <p className="text-gray-400">{t.text}</p>
                    </motion.div>
                ))}

            </div>

        </section>
    )
}