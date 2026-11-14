function About() {
    return (
        <section id="about" className="bg-[#050807] text-white py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <p className="text-[#00FFA3] font-mono text-sm mb-3">
                    root@kranthi:~$ cat about.txt
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12">
                    About <span className="text-[#00FFA3]">Me_</span>
                </h2>

                <div className="border border-[#00FFA3]/20 bg-[#080e0b] rounded-lg overflow-hidden">

                    <div className="px-5 py-3 border-b border-[#00FFA3]/20 flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                        <span className="ml-3 text-xs text-gray-400 font-mono">
                            about.txt
                        </span>
                    </div>

                    <div className="p-6 md:p-10 grid md:grid-cols-2 gap-10">

                        <div className="font-mono text-sm leading-8 text-gray-400">

                            <p className="text-[#00FFA3] mb-3">
                                $ whoami
                            </p>

                            <p className="text-white text-lg font-bold">
                                Kranthi Kumar
                            </p>

                            <p>Java Full Stack Developer</p>
                            <p>AI & Data Science Graduate</p>

                            <br />

                            <p className="text-[#00FFA3]">
                                $ cat introduction.txt
                            </p>

                            <p>
                                I'm a passionate Java Full Stack Developer
                                interested in building scalable backend
                                systems and modern web applications.
                            </p>

                            <p className="mt-4">
                                I enjoy solving programming problems,
                                exploring new technologies, and developing
                                real-world applications.
                            </p>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            {[
                                ["01", "Backend Development"],
                                ["02", "REST API Development"],
                                ["03", "Database Management"],
                                ["04", "Frontend Development"],
                            ].map(([number, title]) => (
                                <div
                                    key={number}
                                    className="border border-[#00FFA3]/20 p-5 rounded hover:border-[#00FFA3] transition"
                                >
                                    <p className="text-[#00FFA3] font-mono text-2xl mb-3">
                                        {number}
                                    </p>

                                    <p className="text-gray-300 font-mono text-sm">
                                        {title}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;