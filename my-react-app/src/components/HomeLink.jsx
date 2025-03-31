import React from "react";

function HomePage(props)
{
    console.log(props);
    return (<>
    <h1 className='eb-garamond-Headers'>Our Mission...</h1>
    <p className='montserrat-BodyFont'>The Rising Sun Methodist Church is a Christ-centered, nurturing, visible, servant
        to all members of our community; reaching out through missions, fellowship, music,
        and sharing of God's Word.
    </p>
    <img src={props.photo} className="img-fluid rounded mx-auto d-block" alt="Church Photo"/>
    </>);
}

export default HomePage;