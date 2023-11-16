const ButtonOne = (props) => {

    return (
        <>
            <button className=' rounded-md  text-sm sm:text-lg p-1 sm:p-2 text-slate-50 font-semibold bg-seance-700 hover:bg-seance-900 dark:hover:text-slate-50 dark:hover:bg-neutral-900 flex items-center gap-1  transition-all ease-in shadow-[0_4px_9px_-4px_#351f41]'
                onClick={props.onClick}> {props.label} <span>{props.icon}</span> </button>

        </>
    );
}

export default ButtonOne;
