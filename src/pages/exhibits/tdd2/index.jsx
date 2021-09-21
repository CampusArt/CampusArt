import { Link } from "react-router-dom";
import bg from "../../../assets/images/tdd2bg.jpeg";

export default function TDD2() {
  return (
    <main id="tdd2" className="home">
      <section id="landing">
        <div className="container">
          <div className="wrapper">
            <p><em>“What prevails amidst these difficulties is the human will to care, to dutifully stand with and support each other. It is neither aid nor charity. 
  For at its core is the concept of kapwa (others.)”</em></p>
            <h3 className="glow">- KAREN FLORES, CURATOR</h3>
          </div>
          <img src={bg} alt="background" className="bg" style={{right: '0'}} />
        </div>
      </section>
      <section id="exhibit-brief">
        <div className="container">
          <h1 className="glow">TO DIFFER, DIGITALLY 2</h1>
          <h3 className="glow" style={{textTransform: 'uppercase'}}>Love and Dissent in the time of pandemic</h3>
          <p>In 2017, De La Salle-College of Saint Benilde’s School for Design and Arts presented the group exhibition To Differ, Digitally: Calls for Change Through New Media. The project was a vital interface between the Center for Campus Art (CCA) and the faculty of the New Media Cluster (NMC) to produce works entirely in digital form, and to propel design as a language of social critique.</p>
          <p>The second iteration of To Differ, Digitally (TDD2) is not only a fresh opportunity to deliver messages of social commentary through the digital medium; it is also a timely response to conditions wrought by the present scourge of the COVID-19 virus. </p>
          <Link to="/exhibit/to-differ-digitally/exhibit">READ FULL EXHIBIT BRIEF</Link>
        </div>
      </section>
      <section id="featured-artworks">
        <img src={bg} alt="background" className="bg" style={{top: 0, zIndex: '0'}} />
        <div className="container">
          <h1>FEATURED ARTWORKS</h1>
          <div className="exhibits">
            <Link to="/exhibit/to-differ-digitally/hall-of-heroes">
              <h3>"HALL OF HEROES"</h3>
              <p>BENJIE MARASIGAN</p>
            </Link>
            <Link to="/exhibit/to-differ-digitally/hall-of-heroes">
              <h3>"HALL OF HEROES"</h3>
              <p>BENJIE MARASIGAN</p>
            </Link>
            <Link to="/exhibit/to-differ-digitally/hall-of-heroes">
              <h3>"HALL OF HEROES"</h3>
              <p>BENJIE MARASIGAN</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}