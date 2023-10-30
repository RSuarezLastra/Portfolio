const ButtonOne = (props) => {

    return (
        <>
            <button className='border border-seance-700 hover:text-seance-800 rounded-md shadow-lg py-2 px-2 text-white font-bold bg-seance-700 hover:bg-shark-100 flex items-center gap-1'
                onClick={props.onClick}> {props.label} <span>{props.icon}</span> </button>

        </>
    );
}

export default ButtonOne;