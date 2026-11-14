const projects = [
    {
        id: "01",
        name: "Smart E-Commerce Platform",
        description:
            "A full-stack e-commerce application with product management, authentication, admin dashboard and payment integration.",
        tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
        github: "https://github.com/kranthi-kumar-2004/ecom-front.git",
        live: "https://ecom.kranthidev.in",
        status: "COMPLETED"
    },
    {
        id: "02",
        name: "Expense Tracker",
        description:
            "An application designed to manage personal expenses, track transactions and organize financial records.",
        tech: ["Java", "Spring Boot", "React", "MySQL"],
        github: "https://github.com/kranthi-kumar-2004/Expense_Tracker_Dashboard.git",
        live: "https://expense.kranthidev.in",
        status: "COMPLETED"
    },
    {
        id: "03",
        name: "DeployX - Cloud Deployment Automation Platform",
        description:
            "A cloud deployment automation platform that connects GitHub repositories, automates application builds, and simplifies deployment management using React and Spring Boot.",
        tech: ["Java","Spring Boot","React","MySQL","Docker"],
        github: "#",
        live: "#",
        status: "ON GOING"
    }
    ,{
        id: "04",
        name: "FoodSprint - Online Food Ordering Platform",
        description:"A full-stack food ordering platform that allows users to explore restaurants, browse menus, and order food through a user-friendly interface.",
        tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
        github:"#",
        live: "#",
        status: "ON GOING"
    }
];

function Projects() {
    return (
        <section id="projects" className="bg-[#050807] text-white py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <p className="text-[#00FFA3] font-mono text-sm mb-3">
                    root@kranthi:~$ ./execute_projects.sh
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12">
                    Featured <span className="text-[#00FFA3]">Projects_</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {projects.map((project) => (

                        <div
                            key={project.id}
                            className="group border border-[#00FFA3]/20 bg-[#080e0b] rounded-lg overflow-hidden hover:border-[#00FFA3] transition duration-300"
                        >

                            <div className="flex items-center justify-between px-5 py-4 border-b border-[#00FFA3]/20">

                                <span className="text-[#00FFA3] font-mono text-sm">
                                    PROJECT_{project.id}
                                </span>

                                <span className="text-green-400 font-mono text-xs">
                                    ● {project.status}
                                </span>

                            </div>

                            <div className="p-6">

                                <p className="text-gray-500 font-mono text-xs mb-3">
                                    $ cat project_info.json
                                </p>

                                <h3 className="text-xl font-bold font-mono mb-4 group-hover:text-[#00FFA3] transition">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 text-sm leading-7 min-h-28">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">

                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono text-[#00FFA3] border border-[#00FFA3]/20 px-2 py-1"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                                <div className="flex gap-5 mt-7 pt-5 border-t border-[#00FFA3]/20">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-mono text-gray-300 hover:text-[#00FFA3] transition"
                                    >
                                        [ GitHub ]
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-mono text-gray-300 hover:text-[#00FFA3] transition"
                                    >
                                        [ Live Demo ]
                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;