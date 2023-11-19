import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap} from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiSequelize, SiExpress, SiPostgresql } from 'react-icons/si';

const skillsData = [
    { name: 'HTML', icon: <FaHtml5 size={30}/> },
    { name: 'CSS', icon: <FaCss3Alt size={30}/> },
    { name: 'JavaScript', icon: <FaJs size={30}/> },
    { name: 'Node.js', icon: <FaNodeJs size={30}/> },
    { name: 'React', icon: <FaReact size={30}/> },
    { name: 'Redux', icon: <SiRedux size={30}/> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={30}/> },
    { name: 'Sequelize', icon: <SiSequelize size={30}/> },
    { name: 'Express', icon: <SiExpress size={30}/> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={30}/> },
    { name: 'Bootstrap', icon: <FaBootstrap size={30}/> },
];

const Skills = () => {
    return (
        <div className='w-full mb-10 sm:mb-20 pb-10'>
            <div className="mx-auto w-3/4 flex flex-wrap gap-4 justify-center ">
                {skillsData.map((skill, index) => (
                    <div key={index} className='flex items-center p-2 sm:px-4 h-8 sm:h-12 rounded-xl border border-neutral-400   dark:bg-neutral-500 dark:border-neutral-500'>
                        <div className='flex items-center w-4 sm:w-6 mr-1 sm:mr-3'> {skill.icon}</div>
                        <p className='text-sm sm:text-base md:text-2xl'>{skill.name}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skills;