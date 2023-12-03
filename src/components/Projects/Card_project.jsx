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
            className="bg-gray-50  dark:bg-neutral-800  max-w-[42rem] border border-black/10  rounded-xl  grid  grid-cols-1 sm:grid-cols-2">
            <div className="pt-4 pb-3 sm:pb-6 px-5 sm:pl-6 sm:pr-2 md:pt-6 lg:pt-10  flex flex-col h-full ">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-slate-100">{title}</h3>
                <p className="mt-2 leading-relaxed dark:text-slate-100">{description}</p>
                <ul className="flex flex-wrap gap-2 mt-2 md:mt-5 ">
                    {tags.map((tag, index) => (
                        <li key={index} className=" text-white text-xs md:text-base  rounded-full uppercase px-2 py-1   bg-seance-800">{tag}</li>
                    ))}
                </ul>
            </div>
            <div className="md:p-4 flex justify-center items-center relative overflow-hidden rounded-xl ">
                <img
                    src={imgUrl}
                    alt={title}
                    className="rounded-xl  shadow-2xl  sm:absolute bottom-0 left-4 min-h-[11.5rem] sm:h-[12.5rem] md:h-[13.5rem] lg:h-[14.5rem]  object-left object-cover " />
            </div>
        </motion.section>

    );
};

export default Card_project;