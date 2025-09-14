import React from "react";

function HomePage()
{
   // <!--img src={props.photo} className="img-fluid rounded mx-auto d-block" alt="Church Photo"/-->
   // console.log(props);

   //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    return (<>
    <h1 className='eb-garamond-Headers'>Our Mission...</h1>
    <p className='montserrat-BodyFont'>The Rising Sun Methodist Church is a Christ-centered, nurturing, visible, servant
        to all members of our community; reaching out through missions, fellowship, music,
        and sharing of God's Word.
    </p>
    <div className="d-flex justify-content-center videoWrapper">
    <iframe   src="https://www.facebook.com/watch/?v=799112819334493" title="9/14/ 2025 Church Service" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>);
}

export default HomePage;