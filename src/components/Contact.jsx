function Contact() {
    return (
        <section id="contact" className="bg-[#070c09] text-white py-24 px-6">

            <div className="max-w-5xl mx-auto text-center">

                <p className="text-[#00FFA3] font-mono text-sm mb-4">
                    root@kranthi:~$ ./connect.sh
                </p>

                <h2 className="text-3xl md:text-5xl font-bold font-mono">
                    Let's Build Something
                    <span className="text-[#00FFA3]"> Together_</span>
                </h2>

                <p className="text-gray-400 mt-6 leading-7 max-w-2xl mx-auto">
                    I'm interested in Java Full Stack Developer opportunities,
                    backend development and building meaningful software.
                    Feel free to connect with me.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-5">

                    <a
                        href="mailto:kranthidev.tech@gmail.com"
                        className="bg-[#00FFA3] text-black px-7 py-3 font-mono font-bold hover:bg-[#00cc82] transition"
                    >
                        send_email()
                    </a>

                    <a
                        href="https://github.com/kranthi-kumar-2004"
                        target="_blank"
                        rel="noreferrer"
                        className="border border-[#00FFA3] text-[#00FFA3] px-7 py-3 font-mono hover:bg-[#00FFA3]/10 transition"
                    >
                        github_profile()
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kranthi-kumar-sarvepalli-5b7571285/"
                        target="_blank"
                        rel="noreferrer"
                        className="border border-[#00FFA3] text-[#00FFA3] px-7 py-3 font-mono hover:bg-[#00FFA3]/10 transition"
                    >
                        linkedin_profile()
                    </a>

                </div>

                <div className="mt-16 border border-[#00FFA3]/20 bg-[#050807] rounded-lg p-6 text-left font-mono text-sm">

                    <p className="text-[#00FFA3]">$ connection_status</p>

                    <p className="text-gray-400 mt-3">
                        &gt; Looking for opportunities...
                    </p>

                    <p className="text-gray-400">
                        &gt; Connection: <span className="text-green-400">Open</span>
                    </p>

                    <p className="text-gray-400">
                        &gt; Response: <span className="text-green-400">Ready to connect</span>
                    </p>

                </div>

            </div>
        </section>
    );
}

export default Contact;