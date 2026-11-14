import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#050807]/90 backdrop-blur-md border-b border-[#00FFA3]/20">

            <nav className="max-w-7xl mx-auto h-16 px-5 md:px-10 flex items-center justify-between">

                <h2 className="font-mono text-lg md:text-xl text-[#00FFA3] font-bold">
                    root@KranthiDev<span className="animate-pulse">_</span>
                </h2>


                <div className="hidden md:flex items-center gap-8 font-mono text-sm">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-[#00FFA3] transition-colors duration-300"
                        >
                            ./ {link.name}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#00FFA3] p-2"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

            </nav>

            {isOpen && (
                <div className="md:hidden bg-[#050807] border-t border-[#00FFA3]/20 px-6 py-5">

                    <div className="flex flex-col gap-6 font-mono text-sm">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-[#00FFA3] transition-colors"
                            >
                                &gt; {link.name}
                            </a>
                        ))}
                    </div>

                </div>
            )}

        </header>
    );
}

export default Header;