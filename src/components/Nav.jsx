import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";



const Nav = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <nav className="w-full  bg-slate-50 dark:bg-neutral-800 flex justify-between p-4 md:px-12 shadow-xl">
                <div>
                    <p>logo</p>
                </div>
                <ul className=" hidden md:flex justify-evenly items-center">
                    <li className='flex items-center'>
                        <button onClick={handleChangeTheme} className='dark:text-slate-100'>
                            {theme === 'dark' ? (< BsSunFill size={16} />) : (<BsFillMoonFill size={16} />)}
                        </button>
                    </li>
                    <li className="ml-10 text-lg font-semibold text-seance-700 ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="ml-10 text-lg font-semibold dark:text-slate-50">
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className="ml-10 text-lg font-semibold dark:text-slate-50" >
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="ml-10 text-lg font-semibold dark:text-slate-50">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </nav>
        </>
    )
}

export default Nav;