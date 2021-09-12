import { useState } from "react"
import { Link } from "react-router-dom"
import {motion} from "framer-motion";

// Assets
import Benilde from "../assets/images/Benilde.jpg";
import CCA from "../assets/images/CCA-Logo.svg";


export default function Header({setIsLoading}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.header
      id="main-header"
      className={setIsLoading ? "loaded" : null}
    >
      <div className="container">
        <div className="menu-wrapper">
          <img src={Benilde} style={{height: "40px", marginRight: "14px"}} className="logo" alt="De La Salle - College of Saint Benilde" />
          <div className="home-link">
            <Link to="/">
              <img src={CCA} alt="Go to Home" height="25.5px" />
              <span>CENTER FOR CAMPUS ART</span>
            </Link>
          </div>
        </div>
        <div
          id="hamburger"
          onClick={()=> {setIsActive(!isActive)}}
          className={isActive ? "active" : null}
        >
          <span></span>
          <span></span>
          <span></span>
        </div> 
      </div>
    </motion.header>
  )
}