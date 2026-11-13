function Home() {
    return (
        <section className="min-h-[calc(100vh-4rem)] w-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat text-white">

            <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 py-12 md:py-0">

                <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">

                    <p className="text-[#00FFA3] font-mono text-sm">
                        SYSTEM.STATUS: ONLINE
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono leading-tight">
                        Kranthi Kumar
                        <span className="text-[#00FFA3]">_</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl text-gray-300 font-mono">
                        Java Full Stack Developer
                    </h2>

                    <p className="text-gray-400 leading-7 max-w-xl">
                        Building scalable backend systems and modern web applications
                        using Java, Spring Boot, React and MySQL.
                    </p>

                    <div className="flex flex-wrap gap-3 font-mono text-sm">
                        <span className="border border-[#00FFA3]/40 px-3 py-2 text-[#00FFA3]">JAVA</span>
                        <span className="border border-[#00FFA3]/40 px-3 py-2 text-[#00FFA3]">SPRING BOOT</span>
                        <span className="border border-[#00FFA3]/40 px-3 py-2 text-[#00FFA3]">REACT</span>
                        <span className="border border-[#00FFA3]/40 px-3 py-2 text-[#00FFA3]">MYSQL</span>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <a
                            href="#contact"
                            className="bg-[#00FFA3] text-black px-6 py-3 font-mono font-bold hover:bg-[#00cc82] transition"
                        >
                            init_contact()
                        </a>

                        <a
                            href="#projects"
                            className="border border-[#00FFA3] text-[#00FFA3] px-6 py-3 font-mono hover:bg-[#00FFA3]/10 transition"
                        >
                            view_projects()
                        </a>
                    </div>

                </div>
                <div className="w-full md:w-1/2 flex justify-center">

                    <div className="w-full max-w-lg border border-[#00FFA3]/30 bg-[#050807]/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,163,0.08)]">

                        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00FFA3]/20 bg-[#0a110e]">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            <span className="ml-3 text-xs text-gray-400 font-mono">
                                kranthi@developer:~
                            </span>
                        </div>

                        <div className="p-5 sm:p-7 font-mono text-sm leading-8">

                            <p className="text-[#00FFA3]">$ system.boot()</p>

                            <p className="text-gray-400">&gt; initializing developer profile...</p>
                            <p className="text-gray-400">&gt; identity: <span className="text-white">Kranthi Kumar</span></p>
                            <p className="text-gray-400">&gt; primary_language: <span className="text-[#00FFA3]">Java</span></p>
                            <p className="text-gray-400">&gt; backend: <span className="text-[#00FFA3]">Spring Boot</span></p>
                            <p className="text-gray-400">&gt; frontend: <span className="text-[#00FFA3]">React</span></p>
                            <p className="text-gray-400">&gt; database: <span className="text-[#00FFA3]">MySQL</span></p>
                            <p className="text-gray-400">&gt; status: <span className="text-green-400">Available for opportunities</span></p>

                            <p className="text-[#00FFA3] mt-4">
                                kranthi@dev:~$ <span className="animate-pulse">_</span>
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Home;