import imagen from '/src/img/foto_raul.jpeg'
import ButtonOne from './Button'
import { AiOutlineDownload } from 'react-icons/ai'

const Intro = () => {
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 min-h-screen p-8 md:p-10 lg:p-16 ">
            <div className="flex flex-col justify-center">
                <h1 className="text-center sm:text-left text-3xl sm:text-5xl font-semibold mb-1 md:mb-4">
                    Hi, I'm <span className='text-seance-800'>Raul</span> Suarez</h1>
                <h1 className="text-center sm:text-left text-3xl sm:text-5xl font-semibold ">Fullstack developer</h1>
                <p className='sm:text-lg mt-4 md:mt-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error perspiciatis quae quod? Quaerat veritatis voluptatem, sed eum eligendi quas, quae maiores suscipit deleniti, iste sapiente beatae voluptas perferendis non?</p>
                <div className='mt-6'>
                    <ButtonOne label="Download CV" icon={<AiOutlineDownload size={20}/>} />
                </div>
            </div>
            <div className="flex justify-center w-full mt-10 md:mt-0">
                <div className='w-72 rounded-full'>
                    <img src={imagen} alt="Foto de Perfil" className='w-full rounded-full ' />
                </div>
            </div>
        </div>
    )
}

export default Intro