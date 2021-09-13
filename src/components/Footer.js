import { Link } from "react-router-dom"

export default function Footer({setIsLoading}){
  return (
    <footer>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/exhibits">EXHIBITS</Link></li>
          </ul>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/exhibits">EXHIBITS</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}