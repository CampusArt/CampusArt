import { useEffect } from "react";
import { Link } from "react-router-dom";
// import bg from "../../../assets/images/tdd2bg.jpeg";

export default function TDD2() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const exhibits = [
    { title: "Hall Of Heroes", status: "published", author: "Benjie Marasigan", link: "hall-of-heroes", bg: "https://i.ibb.co/dMhfws6/Benjie-Marasigan-Thumbnail.jpg" },
    { title: "Mga 'Di Nakikita Ng Mata", status: "published", author: "Yolec Homecillo", link: "mga-di-nakikita-ng-mata", bg: "https://i.ibb.co/WkVybRW/MgaMata.jpg"},
    { title: "Action Series: Frontliner Heroes \n Featuring Voltanna", status: "draft", author: "Volty Garcia/Hannah Sison", link: "front-liner-heroes-featuring-voltanna" },
    { title: "I, Labyrinth", status: "draft", author: "Jag Garcia", link: "i-labyrinth" },
    { title: "Portal", status: "draft", author: "Hannah Sison", link: "portal" },
    { title: "Double Pandemic", status: "draft", author: "Seymour Sanchez", link: "double-pandemic" },
    { title: "Leading Leni", status: "draft", author: "Seymour Sanchez", link: "leading-leni" },
    { title: "Sino ba kausap mo?", status: 'draft', author: "Seymour Sanchez/ Katrina Juane / Vanessa Puenta / Erika Garalde / Dino Brucelas", link: "sino-ba-kausap-mo" },
    { title: "After The Exquisite Corpse", status: 'draft', author: "Dino Brucelas", link: "after-the-exquisite-corpse" },
    { title: "Veerus", status: "draft", author: "Teta Tulay", link: "Veerus" },
    { title: "Mary and the Machine", status: "draft", author: "Mito Tubilleja", link: "mary-and-the-machine" },
    { title: "Lynyrd Paras", status: "draft", author: "Penny Angeles Tan", link: "lynyrd-pass" },
    { title: "Just Snap!", status: "draft", author: "Rafael Liao", link: "just-snap" },
    { title: "Red Tagged", status: "draft", author: "Jay Javier", link: "red-tagged" }
  ]
  return (
    <main id="tdd2" className="home">
      <section id="landing">
        <div className="container">
          <div className="wrapper">
            <p><em>“What prevails amidst these difficulties is the human will to care, to dutifully stand with and support each other. It is neither aid nor charity. 
  For at its core is the concept of kapwa (others.)”</em></p>
            <h3 className="glow">- KAREN FLORES, CURATOR</h3>
          </div>
          {/* <img src={bg} alt="background" className="bg" style={{right: '0'}} /> */}
        </div>
      </section>
      <section id="exhibit-brief">
        <div className="container">
          <h1 className="glow">TO DIFFER, DIGITALLY 2</h1>
          <h3 className="glow" style={{textTransform: 'uppercase'}}>Love and Dissent in the time of pandemic</h3>
          <p>In 2017, De La Salle-College of Saint Benilde’s School for Design and Arts presented the group exhibition To Differ, Digitally: Calls for Change Through New Media. The project was a vital interface between the Center for Campus Art (CCA) and the faculty of the New Media Cluster (NMC) to produce works entirely in digital form, and to propel design as a language of social critique.</p>
          <p>The second iteration of To Differ, Digitally (TDD2) is not only a fresh opportunity to deliver messages of social commentary through the digital medium; it is also a timely response to conditions wrought by the present scourge of the COVID-19 virus. </p>
          <Link to="/exhibit/to-differ-digitally/exhibit-brief">READ FULL EXHIBIT BRIEF</Link>
        </div>
      </section>
      <section id="featured-artworks">
        {/* <img src={bg} alt="background" className="bg" style={{top: 0, zIndex: '0'}} /> */}
        <div className="container">
          <h1 style={{textAlign: "center"}}>FEATURED ARTWORKS</h1>
          <div className="exhibits">
            {
              exhibits.length > 0 ? (
                exhibits.map((xbt, i) => {
                  if(xbt.status === "published") {
                    return (
                      <Link to={`/exhibit/to-differ-digitally/${xbt.link}`} style={{backgroundImage: `url(${xbt.bg})`}} key={i}>
                        <div className="static-rgb"></div>
                        <div className="content">
                          <h3 className="glow">“{xbt.title}“</h3>
                          <p>{xbt.author}</p>
                        </div>
                      </Link>
                    )
                  } else {
                    return (
                      <Link to={`/exhibit/to-differ-digitally/coming-soon`} key={i}>
                        <div className="static"></div>
                        <div className="content">
                          <h3 className="glow">“{xbt.title}“</h3>
                          <p>{xbt.author}</p>
                          <br/>
                          <p><span>LAUNCHING SOON</span></p>
                        </div>
                      </Link>
                    )
                  }
                })
              ) : null
            }
          </div>
        </div>
      </section>
      <section id="acknowledgements">
        <div className="container" style={{position: "relative"}}>
          {/* <img src={bg} alt="" className="bg" style={{right: 0, top: 0, transform: "translate(0%,-25%)"}} /> */}
          <div className="content-wrapper">
            
            <h1 className="glow">ACKNOWLEDGEMENTS</h1>
            <p>Karen Flores</p>
            <p>Brian Bringas</p>
            <p>Dino Brucelas</p>
            <p>Jag Garcia</p>
            <p>Volty Garcia</p>
            <p>Yolec Homecillo</p>
            <p>Jay Javier</p>
            <p>Katrina Juane</p>
            <p>Rafael Liao</p>
            <p>Benjie Marasigan Jr.</p>
            <p>Emily Mones</p>
            <p>Vanessa Puente</p>
            <p>Seymour Sanchez</p>
            <p>Hannah Sison</p>
            <p>Mito Tubilleja</p>
            <p>Teta Tulay</p>
          </div>
        </div>
      </section>
    </main>
  )
}