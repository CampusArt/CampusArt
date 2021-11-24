import { useEffect } from "react"
import Youtube from "react-youtube";
import {Link} from "react-router-dom"

export default function DPDC() {

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
          videoId="rC4ZEdnrqXs"
          opts={opts}
        />
        <h1 className="title glow">"DOUBLE PANDEMIC, <br/> DEADLY COMBINATION"</h1>
        <h3 className="author glow">SEYMOUR SANCHEZ</h3>
        <p style={{textAlign: 'center' }}><em>“Double Pandemic, Deadly Combination” is a short infotainment video about the danger of trans fatty acids or trans fats, especially in the time of the COVID-19 pandemic.”</em></p>
      </div>
      <section>
        <div className="container">
          <p>The project is told from the point of view of a teenage student, who describes trans fats in simple terms through the visual medium. She explains how trans fats raise high blood cholesterol more than other unsaturated fats, but not as much as saturated fats. She also discusses that trans fats raise the bad or ugly cholesterol and reduce the good or beneficial cholesterol, increasing the risk of heart disease, stroke, obesity, diabetes and other comorbidities.</p>
          <p>We can avoid trans fats. Although greatly reduced, they have not yet been eliminated completely from our country. Laws should be enacted to declare that partially hydrogenated oils are no longer generally recognized as safe and set a deadline for them to be removed from our food supply. In the meantime, we must carefully read the ingredients list of any food product we purchase, not just the nutrition facts label. Authorities warn that food manufacturers can claim it has zero grams of trans fat if a product has less than 0.5 grams of trans fat per serving.”</p>
          <Youtube
            videoId="vP6NyTOhyeo"
            opts={opts}
          />
          <Link to="/exhibit/to-differ-digitally/">Return to previous page &gt;</Link>
        </div>
      </section>
    </main>
  )
}