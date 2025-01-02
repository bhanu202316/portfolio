import './App.css';
import Nav from './Header';
import Experience from './experience';
import Overlap from './Project';
import Skill from './Skills';
import Projects from './newproject';
import Contact from './contect';
function App() {
    return (
        <>
            <Nav />
            <div>
                <section id="hero">
                    <Overlap />
                </section>
                <section id="skills">
                    <Skill />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="projects">
                    <Projects></Projects>
                </section>
                <section>
                    <Contact></Contact>
                </section>
            </div>
        </>
    );
}

export default App;
