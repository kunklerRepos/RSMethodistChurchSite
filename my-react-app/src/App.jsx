import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import churchPhoto from './assets/church.jpg'
import './App.css'
import FaithConfession from './components/Faith'
import HomePage from './components/HomeLink'
import MoreLink from './components/MoreInfo'
import Contact from './components/ContactPage';
import AboutPage from './components/AboutPage'


function App() {
  const [count, setCount] = useState(0)

  const [selectPage, setSelectPage] = useState({"activePage": "HomeLink"});
  const isActiveLink = {"isActive": "HomeLink"};

  const PageSelectObj = {"HomeLink": <HomePage/>, "AboutLink": <AboutPage/>,
      "FaithLink": <FaithConfession/>, "ContactLink": <Contact />, "MoreLink": <MoreLink/>
  }

  const SelectPage = (pageID) => {
     
    let arrIDs = ["HomeLink", "AboutLink", "FaithLink", "ContactLink", "MoreLink"];

    arrIDs.forEach(id => 
      {
        if (id != pageID)
        {
          document.getElementById(id).className = "nav-link eb-garamond-Headers";
        }
        else 
        {
          document.getElementById(pageID).className = "nav-link eb-garamond-Headers active";
        }

    });

      setSelectPage( prevState => 

        ({...prevState, "activePage": pageID})
      )
  }
// <p className='montserrat-BodyFont'>
//the active page is {selectPage["activePage"]}
//</p>
  // "#502337"
  return (
    <>

<nav class="navbar navbar-expand-lg navbar-light bg-light fill">
  <div class="container-fluid">
    <a class="navbar-brand eb-garamond-Headers" href="#">RSMC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className='nav-item'>
          <a className="eb-garamond-Headers active" id="HomeLink" onClick={() => SelectPage("HomeLink")} aria-current="page" href="#">Home</a>
        </li>
        <li className='nav-item'>
          <a className="eb-garamond-Headers" id="AboutLink" onClick={() => SelectPage("AboutLink")} href="#">About</a>
        </li>
        <li className='nav-item'>
          <a className="eb-garamond-Headers" id="FaithLink" onClick={() => SelectPage("FaithLink")} href="#">Faith</a>
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
      
      <div className="card" style={{backgroundColor: "#4C275C"}}>
        {PageSelectObj[selectPage["activePage"]]}
        <p className='montserrat-BodyFont'>
          Welcome, this site is still under construction and will be coming online soon
        </p>
       
      </div>
      
    </>
  )
}

export default App
