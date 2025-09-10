function Person(props){
    // console.log(props);

    
    return(
        <div>
            <h2> Name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <h3>Color: {props.color}</h3>
            {/* <h1>Name: name2</h1>
            <h1>Name: name3</h1> */}
        </div>
    )
}

export default Person;