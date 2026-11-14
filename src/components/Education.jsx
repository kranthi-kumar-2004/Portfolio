function Education() {
    return (
        <section id="education" className="bg-[#070c09] text-white py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <p className="text-[#00FFA3] font-mono text-sm mb-3">
                    root@kranthi:~$ cat education.log
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12">
                    Education <span className="text-[#00FFA3]">_</span>
                </h2>

                <div className="border-l-2 border-[#00FFA3]/40 ml-3 pl-8 space-y-12">

                    <div className="relative">

                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#00FFA3] shadow-[0_0_15px_#00FFA3]"></span>

                        <p className="text-[#00FFA3] font-mono text-sm">
                            2022 - 2026
                        </p>

                        <h3 className="text-xl font-bold mt-3">
                            Bachelor of Technology
                        </h3>

                        <p className="text-gray-400 mt-2">
                            Audisankara Institute of Technology
                        </p>

                        <p className="text-gray-500 font-mono text-sm mt-2">
                            Specialization: Artificial Intelligence & Data Science
                        </p>

                        <span className="inline-block mt-4 text-xs font-mono border border-[#00FFA3]/30 text-[#00FFA3] px-3 py-2">
                            GRADUATED
                        </span>

                    </div>

                    <div className="relative">

                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-2 border-[#00FFA3] bg-[#070c09]"></span>

                        <p className="text-[#00FFA3] font-mono text-sm">
                            JUNIOR COLLEGE
                        </p>

                        <h3 className="text-xl font-bold mt-3">
                            Intermediate Education
                        </h3>

                        <p className="text-gray-400 mt-2">
                            Krishna Chaitanya Junior College
                        </p>

                    </div>

                    <div className="relative">

                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-2 border-[#00FFA3] bg-[#070c09]"></span>

                        <p className="text-[#00FFA3] font-mono text-sm">
                            High School
                        </p>

                        <h3 className="text-xl font-bold mt-3">
                            Secondry School Education
                        </h3>

                        <p className="text-gray-400 mt-2">
                            Aims English Medium High School
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Education;