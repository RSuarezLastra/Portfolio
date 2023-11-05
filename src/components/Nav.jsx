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
            <nav className=" mx-auto w-3/4 rounded-full bg-slate-50 dark:bg-neutral-800 flex justify-between p-4 md:px-10 shadow-xl">
                <div>
                    <p>logo</p>
                </div>
                <ul className=" hidden md:flex justify-evenly items-center">
                    <li className='flex items-center'>
                        <button onClick={handleChangeTheme} className='dark:text-slate-100'>
                            {theme === 'dark' ? (< BsSunFill size={16} />) : (<BsFillMoonFill size={16} />)}
                        </button>
                    </li>
                    <li className="ml-10  hover:bg-slate-200/60 dark:hover:bg-slate-600/25 rounded-full transition-all ease-in px-2 ">
                        <Link className='text-lg font-semibold dark:text-slate-100 ' to="/">About</Link>
                    </li>
                    <li className="ml-10  hover:bg-slate-200/60 rounded-full transition-all ease-in px-2 dark:hover:bg-slate-600/25">
                        <p className='text-lg font-semibold  dark:text-slate-100 '><Link to="/">Skills</Link></p>
                    </li>
                    <li className="ml-10  hover:bg-slate-200/60 rounded-full transition-all ease-in px-2 dark:hover:bg-slate-600/25">
                        <p className='text-lg font-semibold dark:text-slate-100 '><Link to="/">Projects</Link></p>
                    </li>
                    <li className="ml-10  hover:bg-slate-200/60 rounded-full transition-all ease-in px-2 dark:hover:bg-slate-600/25">
                        <p className='text-lg font-semibold  dark:text-slate-100 '><Link to="/">Contact</Link></p>
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