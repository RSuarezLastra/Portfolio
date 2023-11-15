const ButtonOne = (props) => {

    return (
        <>
            <button className='border border-seance-700 rounded-lg shadow-lg text-sm sm:text-base p-1 sm:p-2 text-slate-50 font-bold bg-seance-700 hover:bg-seance-900 dark:hover:text-slate-50 dark:hover:bg-neutral-900 flex items-center gap-1 transition-all ease-in'
                onClick={props.onClick}> {props.label} <span>{props.icon}</span> </button>

        </>
    );
}

export default ButtonOne;
