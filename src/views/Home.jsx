import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
    return(
        <div className="bg-shark-100 dark:bg-neutral-900 min-h-screen">
            <Nav/>
            <Intro/>
            <Skills/>
            <Projects/>
        </div>
    )
} 

export default Home;