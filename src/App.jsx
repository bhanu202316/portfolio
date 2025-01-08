import './App.css';
import Nav from './Header';
import Experience from './experience';
import Overlap from './Project';
import Skill from './Skills';
import Projects from './newproject';
import Contact from './contect';
import BubbleCursor from './bubble';

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
                    <Projects />
                </section>
                <section>
                    <Contact />
                </section>
            </div>
            <BubbleCursor />
        </>
    );
}

export default App;
