"use client"

export default function Voice() {

    function play() {

        const audio = document.getElementById("voice") as HTMLAudioElement
        audio.play()

    }

    return (

        <section className="h-screen flex flex-col items-center justify-center text-center">

            <audio id="voice" src="/voice.mp3" />

            <button
                onClick={play}
                className="px-6 py-3 bg-pink-500 rounded-xl"
            >

                Play a message

            </button>

        </section>

    )

}