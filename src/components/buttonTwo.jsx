const ButtonTwo = (props) => {

    return (
        <>
            <button className='rounded-full text-sm sm:text-base p-2  text-slate-50 font-semibold bg-seance-700 hover:bg-seance-900 dark:hover:text-slate-50  flex items-center gap-1  transition-all ease-in shadow-[0_4px_9px_-4px_#351f41]'
                onClick={props.onClick}
                type="submit"> {props.label} <span>{props.icon}</span> </button>

        </>
    );
}

export default ButtonTwo;
