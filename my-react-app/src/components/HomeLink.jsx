import React from "react";

function HomePage()
{
   // <!--img src={props.photo} className="img-fluid rounded mx-auto d-block" alt="Church Photo"/-->
   // console.log(props);

   //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    return (
    <>
    <h1 className='eb-garamond-Headers'>Our Mission...</h1>
    <p className='montserrat-BodyFont'>The Rising Sun Methodist Church is a Christ-centered, nurturing, visible, servant
        to all members of our community; reaching out through missions, fellowship, music,
        and sharing of God's Word.
    </p>
      <div className="d-flex justify-content-center videoWrapper">
        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100079547763214%2Fvideos%2F2178007419694239%2F&show_text=false&width=560&t=0" width="560" height="314" style={{border:"none", overflow:"hidden"}}  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
    </>
    );
}

export default HomePage;