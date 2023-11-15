import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import links from './links';

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
        <header className='relative z-[1000]'>
            <motion.nav className="top-6  left-1/2 rounded-full bg-white bg-opacity-40 dark:bg-opacity-40  dark:bg-neutral-800 backdrop-blur-[0.5rem] flex justify-center p-4  shadow-xl fixed"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <ul className="flex justify-evenly items-center text-gray-600">
                    <li className='flex items-center'>
                        <button onClick={handleChangeTheme} className='dark:text-slate-200 dark:hover:text-slate-50 hover:text-gray-950'>
                            {theme === 'dark' ? (< BsSunFill size={16} />) : (<BsFillMoonFill size={16} />)}
                        </button>
                    </li>
                    {links.map(lin => (
                        <li key={lin.hash}
                            className="ml-4 sm:ml-10 hover:bg-slate-200/60 dark:hover:bg-slate-600/25 rounded-full transition-all ease-in px-0 sm:px-2 ">
                            <Link className='text-sm sm:text-lg font-semibold hover:text-gray-950 dark:text-slate-300 dark:hover:text-slate-50' to={lin.hash}>{lin.name}</Link>
                        </li>
                    ))}
                </ul>

            </motion.nav>
        </header>
    )
}

export default Nav;