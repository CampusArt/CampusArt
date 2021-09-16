import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <main id="not-found" className="grid">
      <div className="container">
        <div>
          <h1 className="glitch">COMING SOON!</h1>
          <p>We'll open soon.</p>
          <Link to="/">Go to home</Link>
        </div>
      </div>
    </main>
  )
}