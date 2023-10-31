import css from '/src/img/css_logo.png';
import html from '/src/img/html_logo.png';
import js from '/src/img/javascript_logo.png';
import node from '/src/img/nodejs_logo.png';
import sql from '/src/img/sequelize_logo.png';
import react from '/src/img/react_logo.png';
import redux from '/src/img/redux_logo.svg';
import twind from '/src/img/tailwind_logo.png';
import ex from '/src/img/express_logo.png';
import postg from '/src/img/postgresql_logo.png';


const Skills = () => {
    return (
        <div className='w-full min-h-screen mt-10 sm:mt-5 mb-20 py-10'>
            <h2 className="text-center font-semibold text-4xl mb-20">Skills</h2>
            <div className="mx-auto w-3/4 grid  grid-cols-3 sm:grid-cols-4 gap-10 ">
                <div className='mx-auto w-14 sm:w-20'>
                    <img src={html} alt="Html logo" />
                </div>
                <div className='mx-auto w-14 sm:w-20'>
                    <img src={css} alt="Css logo" />
                </div>
                <div className='mx-auto w-14 sm:w-20'>
                    <img src={js} alt="JavaScript logo" />
                </div>
                <div className='mx-auto my-auto w-14 sm:w-20'>
                    <img src={react} alt="React logo" />
                </div>
                <div className='mx-auto my-auto w-14 sm:w-20'>
                    <img src={redux} alt="Redux logo" />
                </div>
                <div className='mx-auto my-auto w-14 sm:w-20'>
                    <img src={twind} alt="Tailwind logo" />
                </div>
                <div className='mx-auto my-auto w-20 sm:w-32'>
                    <img src={node} alt="Node js logo" />
                </div>
                <div className='mx-auto w-14 sm:w-20'>
                    <img src={ex} alt="Express logo" />
                </div>
                <div className='mx-auto w-14 sm:w-24'>
                    <img src={postg} alt="PostgrSQL logo" />
                </div>
                <div className='mx-auto w-14 sm:w-24'>
                    <img src={sql} alt="Sequelize logo" />
                </div>
            </div>
        </div>
    )
}

export default Skills;