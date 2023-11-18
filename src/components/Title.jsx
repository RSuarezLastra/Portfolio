import { Link } from 'react-router-dom';
import ButtonOne from './Button';
import { AiOutlineDownload, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Title = () => {
    return (
        <div id='home' className="mx-auto w-3/4 grid items-center min-h-[28rem] sm:min-h-[37.5rem] ">
            <div className='flex flex-col ml-0 sm:ml-20'>
                <h1 className="text-center sm:text-left text-4xl sm:text-7xl md:text-8xl font-semibold mb-1 lg:mb-4 dark:text-slate-100">
                    Hi, I'm <span className='text-seance-700'>Raul Suarez</span>  Fullstack developer</h1>
                <div className='flex gap-5 justify-center sm:justify-normal items-center mt-6'>
                    <a href='./public/RaulSuarezLastraCV.pdf' download >
                        <ButtonOne label="Download CV" icon={<AiOutlineDownload size={20} />} />
                    </a>
                    <Link to='https://www.linkedin.com/in/ra%C3%BAl-su%C3%A1rez-906754270/' target='_blank'>
                        <AiFillLinkedin className='text-3xl sm:text-5xl cursor-pointer hover:scale-[1.08] transition-all dark:text-slate-100' />
                    </Link>
                    <Link to='https://github.com/RSuarezLastra' target='_blank'>
                        <AiFillGithub className='text-3xl sm:text-5xl cursor-pointer hover:scale-[1.08] transition-all dark:text-slate-100' />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Title;
