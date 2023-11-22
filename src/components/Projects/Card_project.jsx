import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


const Card_project = ({ title, description, tags, imgUrl }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })
    const scaleProgres = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <motion.section
            ref={ref}
            style={{
                scale: scaleProgres,
                opacity: opacityProgres
            }}
            className="bg-gray-50  dark:bg-neutral-800  max-w-[42rem] border border-black/10 overflow-hidden rounded-lg sm:pr-8 relative h-[20rem] mb-4 sm:mb-8 group group-even:pl-8 ">
            <div className="pt-4 pb-3 sm:pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[19rem] ">
                <h3 className="text-2xl font-semibold dark:text-slate-100">{title}</h3>
                <p className="mt-2 leading-relaxed dark:text-slate-100">{description}</p>
                <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
                    {tags.map((tag, index) => (
                        <li key={index} className=" text-white rounded-full uppercase px-3 py-1 tracking-wider  bg-neutral-600">{tag}</li>
                    ))}
                </ul>
            </div>
            <img
                src={imgUrl}
                alt={title}
                className="absolute bottom-0 -right-40 w-[28.25rem] rounded-t-xl shadow-2xl group-even:right-[initial] group-even:-left-40  h-64 " />
        </motion.section>

    );
};

export default Card_project;