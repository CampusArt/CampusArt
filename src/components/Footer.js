// import { Link } from "react-router-dom"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

export default function Footer({setIsLoading, setIsActive}){
  return (
    <footer>
      <div className="container">
        <p>
          <span>PRODUCED</span>
          <span> BY </span>
          <span> THE </span>
          <span> CENTER </span>
          <span> FOR </span>
          <span> CAMPUS </span>
          <span> ART </span>
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: 'solid 1px #fff'
          }}
        >
          {/* <ul>
            <li><Link to="/">HOME</Link></li>
            <li><button className="anchor" onClick={() => {setIsActive(true)}}>EXHIBITS</button></li>
          </ul> */}
          <p style={{color: '#fff', fontSize: '10px', fontWeight: '200'}}>Copyright &copy; 2021. All Rights Reserved.</p>
          <ul>
            <li><a href="https://facebook.com/BenildeCampusArt"><FontAwesomeIcon icon={faFacebook} color="#DADADA" /></a></li>
            <li><a href="https://twitter.com/csbcampusart"><FontAwesomeIcon icon={faTwitter} color="#DADADA" /></a></li>
            <li><a href="https://instagram.com/benilde.campusart"><FontAwesomeIcon icon={faInstagram} color="#DADADA" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}