import imagen from '/src/img/foto_raul.jpeg';
import Skills from './Skills';


const Intro = () => {
    return (
        <section id='about' className=' min-h-[26rem] sm:min-h-[42rem] scroll-mt-24'>
            <h2 className="text-center  text-3xl sm:text-5xl font-semibold  dark:text-slate-100">
                ABOUT <span className='text-seance-700'>ME</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8   py-4 w-full md:w-3/4 mx-auto mb-8">
                <div className="flex flex-col justify-center md:px-4 lg:px-6">
                    <p className='sm:text-xl mt-4 md:mt-8 text-justify dark:text-slate-200'>Hello, I'm Raul Suarez Lastra, a full stack developer, with a background in mechanical engineering. During my degree, I learned about programming and ended up liking it more than my own career.
                        In addition to developing web applications, I like to play guitar and sing.</p>
                </div>
                <div className="flex justify-center w-full mt-10 md:mt-0 pt-0 md:pt-10">
                    <div className='w-48 sm:w-56 md:w-64 rounded-full '>
                        <img src={imagen} alt="Foto de Perfil" className='w-full rounded-full ' />
                    </div>
                    
                </div>
            </div>
            <Skills />

        </section>

    )
}

export default Intro