import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
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
            <motion.nav className="top-6  left-1/2 rounded-full bg-white bg-opacity-60 dark:bg-opacity-60   backdrop-blur-[0.5rem] flex justify-center p-4  shadow-2xl  fixed dark:bg-neutral-700  "
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <ul className="flex justify-evenly items-center text-gray-600">
                    <li className='flex items-center'>
                        <button onClick={handleChangeTheme} className='p-1 text-sm sm:text-lg md:text-xl hover:text-gray-950 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-slate-50  dark:hover:bg-neutral-700 rounded-full transition-all ease-in'>
                            {theme === 'dark' ? (< BsSunFill />) : (<BsFillMoonFill />)}
                        </button>
                    </li>
                    {/* <li className='flex items-center'>
                        <button className='p-1 ml-2 sm:ml-8 text-sm sm:text-lg md:text-xl hover:text-gray-950 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-slate-50  dark:hover:bg-neutral-700 rounded-full transition-all ease-in'>
                            <MdLanguage />
                        </button>
                    </li> */}
                    {links.map(lin => (
                        <li key={lin.hash}
                            className="ml-3 sm:ml-10 hover:bg-slate-200/60 dark:hover:bg-slate-600/25 rounded-full transition-all ease-in px-0 sm:px-2  dark:hover:bg-neutral-700">
                            <a className='text-sm sm:text-lg md:text-xl font-semibold hover:text-gray-950 dark:text-slate-300 dark:hover:text-slate-50 ' href={lin.hash}>{lin.name}</a>
                        </li>
                    ))}
                </ul>

            </motion.nav>
        </header>
    )
}

export default Nav;