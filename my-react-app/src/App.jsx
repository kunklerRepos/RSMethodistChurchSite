import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import churchPhoto from './assets/church.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [selectAbout, setSelectAbout] = useState({"setAbout": false});

  const isActiveLink = {"isActive": "HomeLink"}

  const SelectAbout = () => {
    console.log(selectAbout);
    let inVal = selectAbout["setAbout"] ? true : false;

    setSelectAbout((inVal) => selectAbout["setAbout"] = inVal);

    document.getElementById(isActiveLink["isActive"]).className="nav-link";

    isActiveLink["isActive"] = "AboutLink";

    document.getElementById("AboutLink").className="nav-link active";
    
    console.log(selectAbout)
  }

  //<img src={churchPhoto} className="logo react" alt="RSMC logo" /-->
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">RSMC</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" id="HomeLink" aria-current="page" href="#">Home</a>
              <a className="nav-link" id="AboutLink" onClick={SelectAbout} href="#">About</a>
              <a className="nav-link" id="FaithLink" href="#">Faith</a>
              <a className="nav-link" id="ContactLink" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <h1>Rising Sun Methodist Church</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Welcome, this site is still under construction and will be coming online soon
        </p>
      </div>
      
    </>
  )
}

export default App
