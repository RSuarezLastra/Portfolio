import htmlLogo from '/src/img/html_logo.png';
import cssLogo from '/src/img/css_logo.png';
import jsLogo from '/src/img/javascript_logo.png';
import nodeJsLogo from '/src/img/nodejs_logo.png';
import sequelizeLogo from '/src/img/sequelize_logo.png';
import reactLogo from '/src/img/react_logo.png';
import reduxLogo from '/src/img/redux_logo.svg';
import tailwindLogo from '/src/img/tailwind_logo.png';
import expressLogo from '/src/img/express_logo.png';
import postgresLogo from '/src/img/postgresql_logo.png';

const skillsData = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Node.js', logo: nodeJsLogo },
    { name: 'Sequelize', logo: sequelizeLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Redux', logo: reduxLogo },
    { name: 'Tailwind CSS', logo: tailwindLogo },
    { name: 'Express', logo: expressLogo },
    { name: 'PostgreSQL', logo: postgresLogo },
];

const Skills = () => {
    return (
        <div className='w-full  mt-1 sm:mt-5 mb-10 sm:mb-20 py-10 scroll-mt-16'>
            <h2 className="text-center font-semibold text-4xl mb-20 dark:text-slate-200">Skills</h2>
            <div className="mx-auto w-3/4 flex flex-wrap gap-5 justify-center ">
                {skillsData.map((skill, index) => (
                    <div key={index} className='flex mx-auto border border-black p-2 px-4 rounded-lg'>
                        <img src={skill.logo} alt={`${skill.name} logo`} className='w-8 h-8 mr-4' />
                        <p className='text-lg'>{skill.name}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skills;