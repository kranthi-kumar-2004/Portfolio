import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
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
    );
}

export default App;