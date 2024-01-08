const SecondoComp = ({ title, list }) => {
    console.log(title, list);
    return (
        <>
            <h1>{title}</h1>
            {list.map(ele => <p>{ele.name} {ele.lastName} - {ele.city}</p>)}
            <p><strong>Tot: {list.length}</strong></p>
        </>
    )
}

export default SecondoComp