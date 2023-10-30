import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiReact } from 'react-icons/di'
import { SiExpress, SiSequelize } from 'react-icons/si'
import {BiLogoPostgresql, BiLogoJavascript,BiLogoRedux,BiLogoTailwindCss,BiLogoNodejs } from 'react-icons/bi'

const Skills = () => {
    return(
        <div className='w-full'>
            <h2 className="text-center font-semibold text-3xl">Skills</h2>
            <div className="mx-auto w-1/2 grid grid-cols-5 mt-12 mb-8 gap-8">
                <AiFillHtml5 size={60} color='red'/>
                <DiCss3 size={60} color='blue'/>
                <BiLogoJavascript size={60} className='text-yellow-400'/>
                <DiReact size={60} className='text-blue-400'/>
                <BiLogoRedux size={60} className='text-seance-700'/>
                <BiLogoTailwindCss size={60} className='text-blue-400'/>
                <BiLogoNodejs size={60} className='text-green-500'/>
                <SiExpress  size={60} />
                <BiLogoPostgresql size={60} className='text-blue-900'/>
                <SiSequelize  size={60} className='text-blue-500'/>
            </div>
        </div>
    )
}

export default Skills;