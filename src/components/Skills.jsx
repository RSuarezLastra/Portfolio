import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiSequelize, SiExpress, SiPostgresql } from 'react-icons/si';

const skillsData = [
    { name: 'HTML', icon: <FaHtml5 size={30} /> },
    { name: 'CSS', icon: <FaCss3Alt size={30} /> },
    { name: 'JavaScript', icon: <FaJs size={30} /> },
    { name: 'Node.js', icon: <FaNodeJs size={30} /> },
    { name: 'Git', icon: <FaGitAlt size={30} /> },
    { name: 'React', icon: <FaReact size={30} /> },
    { name: 'Redux', icon: <SiRedux size={30} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} /> },
    { name: 'Sequelize', icon: <SiSequelize size={30} /> },
    { name: 'Express', icon: <SiExpress size={30} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={30} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={30} /> },
];

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.06 * index
        }
    })
}

const Skills = () => {
    return (
        <div className='w-full mb-10 sm:mb-20 pb-10'>
            <ul className="mx-auto sm:w-3/4 flex flex-wrap gap-4 justify-center ">
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className='flex items-center p-2 sm:px-3 h-8 sm:h-10 rounded-full border border-neutral-400    dark:border-neutral-500'
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                        custom={index}>
                        <div className='flex items-center w-4 sm:w-6 mr-1 sm:mr-2 dark:text-neutral-300'> {skill.icon}</div>
                        <p className='text-sm sm:text-base dark:text-neutral-300'>{skill.name}</p>
                    </motion.li>
                ))}

            </ul>
        </div>
    )
}

export default Skills;