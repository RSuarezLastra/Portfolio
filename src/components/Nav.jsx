import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"

const Nav = () => {
    return (
        <>
            <nav className="w-full bg-slate-50 flex justify-between p-4 md:px-12 shadow-xl">
                <div>
                    <p>logo</p>
                </div>
                <ul className=" hidden md:flex justify-evenly">
                    <li className="ml-10 font-semibold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="ml-10 font-semibold">
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className="ml-10 font-semibold">
                        <Link to="/projects">Projects</Link>
                    </li> 
                    <li className="ml-10 font-semibold">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="md:hidden">
                    <AiOutlineMenu size={20}/>
                </div>
            </nav>
        </>
    )
}

export default Nav;