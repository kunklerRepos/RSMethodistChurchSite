import React from "react";

function AboutPage(props)
{
    return (
        <>
        <h1 className='eb-garamond-Headers'>History of the Church</h1>
        <img src={props.photo} alt="history"/>
        </>
    ); 

}

export default AboutPage;