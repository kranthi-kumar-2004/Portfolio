function Footer() {
    return (
        <footer className="bg-[#050807] border-t border-[#00FFA3]/20 px-6 py-7">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="font-mono text-sm text-gray-400">
                    <span className="text-[#00FFA3]">kranthi@dev</span>:~$
                    echo "Building the future with code"
                </p>

                <p className="text-gray-500 text-xs font-mono">
                    © {new Date().getFullYear()} Kranthi Kumar. All rights reserved.
                </p>

                <a
                    href="#"
                    className="text-[#00FFA3] font-mono text-sm hover:text-white transition"
                >
                    cd /home
                </a>

            </div>

        </footer>
    );
}

export default Footer;