"use client"
import {motion} from "framer-motion"

export default function Final() {

    return (

        <section className="h-screen flex items-center justify-center text-center px-6">

            <motion.div 
                initial={{ opacity: 0, y: 200}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }} className="max-w-sm">

                <h2 className="text-3xl mb-6">

                    The real gift

                </h2>

                <p className="text-gray-300 leading-relaxed">

                    Today I'm in Gombe.

                    You're in Taraba.

                    So I built something small instead.

                    Just effort.

                    To make sure this birthday
                    isn't just another notification.

                </p>

                <p className="mt-8 text-pink-400 animate-pulse text-xl">

                    Happy Birthday Deborah

                </p>

            </motion.div>

        </section>

    )

}


// import { motion } from "framer-motion"


// export default function Final() {

//     return (
//         <section className="h-screen flex items-center justify-center text-center px-6">

//             <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//                 className="max-w-xl"
//             >
//                 <h2 className="text-4xl mb-8 font-semibold">
//                     The real gift
//                 </h2>

//                 <p className="text-gray-300 leading-relaxed">
//                     Today I'm in Gombe.
//                     <br />
//                     You're in Taraba.
//                     <br /><br />
//                     So I built something small instead.
//                     <br /><br />
//                     Not a store gift.
//                     <br />
//                     Just effort.
//                     <br /><br />
//                     To make sure this birthday
//                     isn’t just another message
//                     in your notifications.
//                 </p>

//                 <p className="mt-10 text-pink-400 text-xl">
//                     Happy Birthday Deborah
//                 </p>

//             </motion.div>

//         </section>
//     )
// }