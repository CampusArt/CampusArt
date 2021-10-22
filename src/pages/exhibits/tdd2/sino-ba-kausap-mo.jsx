import { useEffect } from "react"
import Youtube from "react-youtube";
import {Link} from "react-router-dom"

export default function SinoKausap() {
  

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const opts = {
    height: '840px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <main id="tdd2" className="template">
      <div className="container">
        <Youtube
          videoId="U9UxPwuxCVE"
          opts={opts}
        />
        <h1 className="title glow">"SINO BA KAUSAP MO?"</h1>
        <h3 className="author glow">MMPUBLI FACULTY</h3>
        <p style={{textAlign: 'center' }}><em>“We start a new word every Tuesday, one member per day per word.”</em></p>
      </div>
      <section>
        <div className="container">
          <p>“@SinoBaKausapMo is a group of Multimedia Publishing (MMPUBLI) faculty from De La Salle - College of Saint Benilde, School of Design & Arts, under the Multimedia Arts program. Through this endeavor, the group’s intention is to explore what we are teaching students. @SinoBaKausapMo will be taking on a design challenge that aims to test our creativity in making a play on common words used during the time of the pandemic, while grounded on the learning outcomes from the MMPUBLI course.” - MMPUBLI</p>
          
          <Link to="/exhibit/to-differ-digitally/">Return to previous page &gt;</Link>
        </div>
      </section>
    </main>
  )
}