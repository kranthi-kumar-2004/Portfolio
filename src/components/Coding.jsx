function Coding() {
    const topics = [
        "Arrays",
        "Strings",
        "Linked Lists",
        "Stacks & Queues",
        "Hashing",
        "Two Pointers",
        "Sliding Window",
        "Prefix Sum",
        "Binary Search",
        "Trees"
    ];

    return (
        <section className="bg-[#050807] text-white py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <p className="text-[#00FFA3] font-mono text-sm mb-3">
                    root@kranthi:~$ git log --coding
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12">
                    Problem <span className="text-[#00FFA3]">Solving_</span>
                </h2>

                <div className="border border-[#00FFA3]/20 rounded-lg bg-[#080e0b] p-6 md:p-10">

                    <p className="text-[#00FFA3] font-mono mb-6">
                        $ cat coding_journey.txt
                    </p>

                    <h3 className="text-2xl font-bold font-mono">
                        Data Structures & Algorithms
                    </h3>

                    <p className="text-gray-400 leading-7 mt-4 max-w-2xl">
                        Continuously improving problem-solving skills
                        using Java. Practicing data structures,
                        algorithms and common coding patterns to
                        develop efficient solutions.
                    </p>

                    <div className="mt-8">

                        <p className="text-gray-400 font-mono text-sm mb-4">
                            # CURRENTLY PRACTICING
                        </p>

                        <div className="flex flex-wrap gap-3">

                            {topics.map((topic) => (
                                <span
                                    key={topic}
                                    className="text-sm font-mono px-3 py-2 border border-[#00FFA3]/20 text-[#00FFA3]"
                                >
                                    {topic}
                                </span>
                            ))}

                        </div>

                    </div>

                    <div className="mt-10">

                        <a
                            href="https://www.geeksforgeeks.org/profile/kranthikumar19"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block border border-[#00FFA3] px-6 py-3 text-[#00FFA3] font-mono hover:bg-[#00FFA3] hover:text-black transition"
                        >
                            view_coding_profile()
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Coding;