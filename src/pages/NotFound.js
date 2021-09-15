import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="not-found" className="grid">
      <div className="container">
        <div>
          <h1 className="glitch" data-text="Oops!">404!</h1>
          <p>This page could not be found.</p>
          <code style={{color: "#fff"}}>Don't panic! </code>
          <Link to="/">Take me back!</Link>
        </div>
      </div>
    </main>
  )
}