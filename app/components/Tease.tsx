"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Tease() {

    const [text, setText] = useState("")
    const [sent, setSent] = useState(false)

    const saveText = async () => {

        if (!text.trim()) return

        await fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: text })
        })

        setSent(true)
    }

    return (
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">

            <motion.div
                initial={{ opacity: 0, y: -100, x: -100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1.2 }}
                className="space-y-6 w-full max-w-md"
            >

                <h2 className="text-2xl mb-8">
                    One question before the gift
                </h2>

                <p>Tell me something you wish I knew</p>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border block w-full h-24 p-3 rounded-lg text-black"
                />

                <button
                    onClick={saveText}
                    className="px-6 py-3 bg-pink-600 rounded-xl w-full"
                >
                    Send
                </button>

                {sent && (
                    <p className="text-green-400">
                        Message sent 💌
                    </p>
                )}

            </motion.div>

        </section>
    )
}





// "use client"
// import {motion} from "framer-motion"

// export default function Tease() {

//     return (
//         // const  saveText = () => {

//         // }

//         <section className="h-screen flex flex-col items-center justify-center text-center">

           

//             <motion.div 
//                 initial={{ opacity: 0, y: -100, x:-100 }}
//                 animate={{ opacity: 1, y: 0, x:0 }}
//                 transition={{ duration: 1.2 }} className="space-y-6">
//                 <h2 className="text-2xl mb-8">

//                     One question before the gift
//                 </h2>

//                 <p>Tell me something you wish i knew</p>

//                 <textarea name="wishiknew"  id="wishiknew" className="border block w-full h-24"></textarea>

//                 <button 
//                 // onClick={saveText}
//                 className="px-6 py-3 bg-pink-600 rounded-xl w-1/2">
//                     Send
//                 </button>

//             </motion.div>

//         </section>

//     )

// }



// // import { motion } from "framer-motion"

// // export default function Tease() {

// //     return (
// //         <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

// //             <h2 className="text-3xl mb-12">
// //                 One question before your gift
// //             </h2>

// //             <p className="text-gray-300 mb-10">
// //                 Which one describes you best?
// //             </p>

// //             <div className="flex flex-col gap-4">

// //                 <button className="px-6 py-3 bg-purple-600 rounded-lg hover:scale-105 transition">
// //                     Trouble
// //                 </button>

// //                 <button className="px-6 py-3 bg-pink-600 rounded-lg hover:scale-105 transition">
// //                     Mysterious
// //                 </button>

// //                 <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:scale-105 transition">
// //                     Soft heart pretending to be tough
// //                 </button>

// //             </div>

// //         </section>
// //     )
// // }