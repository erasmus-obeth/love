"use client"

import { motion } from "framer-motion"

export default function Traits() {

    const traits = [
        { title: "Compassion", text: "You radiate compassion genuine and pure care" },
        { title: "Soft strength", text: "You are tougher and resilent than you look" },
        { title: "Awareness", text: "You are intelligent and aware about yourself and social dynamics" }
    ]

    return (

        <motion.section
            initial={{ opacity: 0, y: 350 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} className="min-h-screen flex flex-col justify-center space-y-6">
                <h2 className="text-center text-xl mb-8">What i Noticed About you</h2>

            {traits.map((t, i) => (
                <motion.div
                    key={i}
                    whileTap={{ scale: 0.96 }}
                    className="p-6 rounded-3xl bg-white/5 backdrop-blur border border-white/10"
                >

                    <h3 className="text-xl mb-2">{t.title}</h3>
                    <p className="text-gray-400">{t.text}</p>

                </motion.div>
            ))}

        </motion.section>

    )

}

// import { motion } from "framer-motion"

// export default function Traits() {

//     const traits = [
//         {
//             title: "Playful trouble",
//             text: "You tease more than you admit."
//         },
//         {
//             title: "Hidden softness",
//             text: "You pretend to be tougher than you really are."
//         },
//         {
//             title: "Curiosity",
//             text: "You ask questions that reveal more than answers."
//         }
//     ]

//     return (
//         <section className="min-h-screen flex flex-col items-center justify-center px-6">

//             <h2 className="text-3xl font-semibold mb-16">
//                 What I noticed about you
//             </h2>

//             <div className="grid md:grid-cols-3 gap-8">

//                 {traits.map((t, i) => (
//                     <motion.div
//                         key={i}
//                         whileHover={{ scale: 1.05 }}
//                         className="p-8 rounded-xl bg-[#121218] border border-white/10 hover:border-pink-500 transition"
//                     >
//                         <h3 className="text-xl mb-3">{t.title}</h3>
//                         <p className="text-gray-400">{t.text}</p>
//                     </motion.div>
//                 ))}

//             </div>

//         </section>
//     )
// }