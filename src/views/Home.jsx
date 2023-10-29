import Nav from "../components/Nav";
import Intro from "../components/Intro";

const Home = () => {
    return(
        <div className="bg-shark-100 dark:shadow-shark-900 min-h-screen">
            <Nav/>
            <Intro/>
        </div>
    )
} 

export default Home;