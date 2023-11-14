import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
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
        <header className='relative z-[1000]'>
            <motion.nav className="w-1/2 rounded-full bg-white bg-opacity-40  dark:bg-neutral-800 backdrop-blur-[0.5rem] flex justify-center p-4 md:px-8 shadow-xl fixed"
            initial={{y:-100, x:'50%' , opacity:0}}
            animate={{y:0, x:'50%' , opacity:1}}
            transition={{ delay: 0.5 }}>
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
            </motion.nav>
        </header>
    )
}

export default Nav;