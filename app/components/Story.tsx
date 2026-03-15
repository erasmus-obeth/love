import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Story() {

    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <section ref={ref} className="min-h-screen flex items-center justify-center px-6">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-xl text-center"
            >
                <h2 className="text-3xl font-semibold mb-6">
                    Our strange timeline
                </h2>

                <p className="text-gray-300 leading-relaxed">
                    Different states.
                    Different routines.
                    Different lives.
                    <br /><br />
                    Gombe and Taraba are not exactly neighbors.
                    <br /><br />
                    Yet somehow the conversation
                    found its way back.
                </p>
            </motion.div>

        </section>
    )
}