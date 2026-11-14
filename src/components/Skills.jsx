const skillCategories = [
    {
        command: "ls ./backend/",
        title: "Backend Development",
        skills: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "JPA", "Hibernate", "JDBC"]
    },
    {
        command: "ls ./frontend/",
        title: "Frontend Development",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Vite", "Tailwind CSS"]
    },
    {
        command: "ls ./database/",
        title: "Database",
        skills: ["MySQL", "SQL", "Database Design", "CRUD Operations"]
    },
    {
        command: "ls ./tools/",
        title: "Tools & Technologies",
        skills: ["Git", "GitHub", "Postman", "Maven", "Vercel", "Render", "Cloudflare"]
    },
];

function Skills() {
    return (
        <section id="skills" className="bg-[#070c09] text-white py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <p className="text-[#00FFA3] font-mono text-sm mb-3">
                    root@kranthi:~$ ls /usr/bin/skills
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12">
                    Technical <span className="text-[#00FFA3]">Skills_</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    {skillCategories.map((category) => (

                        <div
                            key={category.title}
                            className="border border-[#00FFA3]/20 rounded-lg bg-[#050807] overflow-hidden hover:border-[#00FFA3]/60 transition"
                        >

                            <div className="px-5 py-4 border-b border-[#00FFA3]/20">
                                <p className="text-[#00FFA3] font-mono text-xs">
                                    {category.command}
                                </p>

                                <h3 className="font-mono text-lg mt-2">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="p-5 flex flex-wrap gap-3">

                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="border border-[#00FFA3]/30 px-3 py-2 text-sm font-mono text-gray-300 hover:bg-[#00FFA3] hover:text-black transition cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>
                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;