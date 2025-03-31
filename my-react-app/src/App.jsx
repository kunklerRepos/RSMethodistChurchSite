import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import churchPhoto from './assets/church2.jpg'
import historyPhoto from './assets/Historical1.jpg';
import './App.css'
import FaithConfession from './components/Faith'
import HomePage from './components/HomeLink'
import MoreLink from './components/MoreInfo'
import Contact from './components/ContactPage';
import AboutPage from './components/AboutPage'

import HolySpiritPic from "./assets/glass-dove-1259071.jpg";
import GodNaturePic from './assets/GodNature.jpg';
import CrossPic from './assets/TheCross.jpg';
import ChristBust from './assets/ChristBust.jpg';
import ScripturePic from './assets/ScripturePic.jpg';
import SermonOnTheMount from './assets/SermonOnTheMount.jpg';
import FamilyPic from './assets/FamilyPic.jpg';
import LifePic from './assets/LifePic.jpg';
import FreeWillPic from './assets/AdamEve.jpg';
import OriginalSin from './assets/OriginalSin.jpg';
import ChristAtonement from './assets/ChristAtonement.jpg';
import RepentancePic from './assets/repentanceFaith.jpg';
import Baptism from './assets/baptism.jpg';
import GoodWorks from './assets/ChariableWorks.jpg';
import Sin from './assets/ChristAndWoman.jpg';
import Sanctification from './assets/GoodSamaritan.jpg';
import Pentecost from './assets/Pentecost.jpg';
import ChurchService from './assets/ChurchService.jpg';
import LastSupper from './assets/LastSupper.jpg';
import SecondComing from './assets/Second_Coming_of_Christ_window.jpg';
import Resurrection from './assets/Resurrection.jpg';
import Judgement from './assets/Last_Judgement.jpg';
import Destiny from './assets/Ascending.jpg';

function App() {
  const [count, setCount] = useState(0)

  const [selectPage, setSelectPage] = useState({"activePage": "HomeLink"});
  const isActiveLink = {"isActive": "HomeLink"};


  const photosObj = {
    "HolySpirit": HolySpiritPic,
    "Father": GodNaturePic,
    "Trinity": CrossPic,
    "Son": ChristBust,
    "SolaFide": ScripturePic,
    "Purpose": SermonOnTheMount,
    "Family": FamilyPic,
    "Life": LifePic,
    "FreeWill": FreeWillPic,
    "OriginalSin": OriginalSin,
    "Atonement": ChristAtonement,
    "Repentance": RepentancePic,
    "Regeneration": Baptism,
    "GoodWorks": GoodWorks,
    "Sin": Sin,
    "Sanctification": Sanctification,
    "Pentecost": Pentecost,
    "Church": ChurchService,
    "LastSupper": LastSupper,
    "SecondComing": SecondComing,
    "Resurrection": Resurrection,
    "Judgement": Judgement,
    "Destiny": Destiny




  };



  const PageSelectObj = {"HomeLink": <HomePage photo={churchPhoto}/>, "AboutLink": <AboutPage photo={historyPhoto}/>,
      "FaithLink": <FaithConfession photo={photosObj}/>, "ContactLink": <Contact />, "MoreLink": <MoreLink/>
  }

  const SelectPage = (pageID) => {
     
    let arrIDs = ["HomeLink", "AboutLink", "FaithLink", "ContactLink", "MoreLink"];

    arrIDs.forEach(id => 
      {

        if(id == pageID)
        {
          document.getElementById(id).style="color: #f39933;";

        }
        else
        {
          document.getElementById(id).style="";
        }
       
    });

      setSelectPage( prevState => 

        ({...prevState, "activePage": pageID})
      )
  }


  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light fill">
  <div className="container-fluid">
    <a className="navbar-brand eb-garamond-Headers" href="#">RSMC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className='nav-item'>
          <a className="eb-garamond-Headers" id="HomeLink" onClick={() => SelectPage("HomeLink")} aria-current="page" href="#">Home</a>
        </li>
        <li className='nav-item'>
          <a className="eb-garamond-Headers" id="AboutLink" onClick={() => SelectPage("AboutLink")} href="#">History</a>
        </li>
        <li className='nav-item'>
          <a className="eb-garamond-Headers" id="FaithLink" onClick={() => SelectPage("FaithLink")} href="#">Beliefs</a>
        </li>
        <li className='nav-item'>
          <a className="eb-garamond-Headers" id="ContactLink" onClick={() => SelectPage("ContactLink")} href="#">Contacts</a>
        </li>
        <li className='nav-item'>
          <a className="eb-garamond-Headers" id="MoreLink" onClick={() => SelectPage("MoreLink")} href="#">More</a>
        </li>
      </ul>
      </div>
    </div>
    </nav>
      
      <div className="card" style={{backgroundColor: "#4C275C", justifyContent: 'center'}}>
        {PageSelectObj[selectPage["activePage"]]}
        
       
      </div>
      
    </>
  )
}

export default App
