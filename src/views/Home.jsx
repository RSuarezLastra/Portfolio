import Nav from "../components/Navbar/Nav";
import Title from "../components/Title";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div className="bg-shark-100 dark:bg-neutral-900 min-h-screen w-full">
            
            <Nav />
            <Title/>
            <Intro />
            <Projects />
            <Contact/>
        </div>
    )
}

export default Home;