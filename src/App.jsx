import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomePopup from "./components/WelcomePopup";

function App() {

    const [hasAccess, setHasAccess] = useState(
        sessionStorage.getItem("portfolio_access") === "granted"
    );

    const grantAccess = () => {
        sessionStorage.setItem("portfolio_access", "granted");
        setHasAccess(true);
    };

    return (
        <>
            {!hasAccess && (
                <WelcomePopup onAccessGranted={grantAccess} />
            )}

            {hasAccess && (
                <>
                    <Header />

                    <main className="pt-16">
                        <Home />
                        <About />
                        <Skills />
                        <Projects />
                        <Education />
                        <Coding />
                        <Contact />
                    </main>

                    <Footer />
                </>
            )}
        </>
    );
}

export default App;