import imagen from '/src/img/foto_raul.jpeg';



const Intro = () => {
    return (
        <div id='about' className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10  sm:min-h-screen p-4 md:p-10 lg:p-16 w-10/12 mx-auto scroll-mt-10">
            <div className="flex flex-col justify-center">
                <h2 className="text-center sm:text-left text-3xl sm:text-5xl font-semibold mb-1 lg:mb-4 dark:text-slate-100">
                    ABOUT <span className='text-seance-700'>ME</span></h2>
                <p className='sm:text-lg mt-4 md:mt-8 text-justify dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error perspiciatis quae quod? Quaerat veritatis voluptatem, sed eum eligendi quas, quae maiores suscipit deleniti, iste sapiente beatae voluptas perferendis non?</p>
            </div>
            <div className="flex justify-center w-full mt-10 md:mt-0 pt-0 md:pt-10">
                <div className='w-48 sm:w-56 md:w-72 rounded-full '>
                    <img src={imagen} alt="Foto de Perfil" className='w-full rounded-full ' />
                </div>
            </div>
        </div>
    )
}

export default Intro