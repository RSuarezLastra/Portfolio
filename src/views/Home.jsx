import Nav from "../components/Navbar/Nav";
import Title from "../components/Title";
import Intro from "../components/Intro";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div className="bg-shark-100 dark:bg-neutral-900 min-h-screen w-full flex flex-col items-center px-4">
            
            <Nav />
            <Title/>
            <Intro />
            <Projects />
            <Contact/>
        </div>
    )
}

export default Home;