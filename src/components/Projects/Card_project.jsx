

const Card_project = ({title, description, tags, imgUrl}) => {
    return (

        <section className="">
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <img src={imgUrl} alt={title} />
        </section>

    );
};

export default Card_project;