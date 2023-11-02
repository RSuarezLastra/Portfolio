import imagen from '/src/img/foto_raul.jpeg';
import ButtonOne from './Button';
import { AiOutlineDownload, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 min-h-screen p-8 md:p-10 lg:p-16 ">
            <div className="flex flex-col justify-center">
                <h1 className="text-center sm:text-left text-3xl sm:text-5xl font-semibold mb-1 lg:mb-4">
                    Hi, I'm <span className='text-seance-800'>Raul</span> Suarez Fullstack developer</h1>
                {/* <h1 className="text-center sm:text-left text-3xl sm:text-5xl font-semibold "></h1> */}
                <p className='sm:text-lg mt-4 md:mt-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error perspiciatis quae quod? Quaerat veritatis voluptatem, sed eum eligendi quas, quae maiores suscipit deleniti, iste sapiente beatae voluptas perferendis non?</p>
                <div className='flex gap-5 justify-center sm:justify-normal items-center mt-6'>
                    <ButtonOne label="Download CV" icon={<AiOutlineDownload size={20} />} />
                    <Link to='https://www.linkedin.com/in/ra%C3%BAl-su%C3%A1rez-906754270/' target='_blank'>
                        <AiFillLinkedin className='text-3xl sm:text-5xl cursor-pointer hover:scale-[1.08]' />
                    </Link>
                    <Link to='https://github.com/RSuarezLastra' target='_blank'>
                        <AiFillGithub className='text-3xl sm:text-5xl cursor-pointer hover:scale-[1.08]' />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center w-full mt-10 md:mt-0">
                <div className='w-48 sm:w-56 md:w-72 rounded-full'>
                    <img src={imagen} alt="Foto de Perfil" className='w-full rounded-full ' />
                </div>
            </div>
        </div>
    )
}

export default Intro