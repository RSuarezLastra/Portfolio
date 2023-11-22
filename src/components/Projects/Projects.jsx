import info from "./info_project";
import Card_project from "./Card_project";

const Projects = () => {
    return (
        <section id='projects' className=" min-h-[26rem] sm:min-h-[40rem]  w-full sm:w-3/4 mx-auto mt-0 lg:mt-20 mb-10 scroll-mt-24">
            <h2 className="text-center font-semibold text-3xl sm:text-5xl mb-8 sm:mb-20 dark:text-slate-100"><span className='text-seance-700'>MY </span>PROJECTS</h2>
            <div className="flex flex-col gap-5 md:gap-10 px-10 sm:px-0 lg:p-10">
                {info.map((project, index) => (
                    <Card_project key={index} {...project} />
                ))}
            </div>
        </section>
    )

}

export default Projects;