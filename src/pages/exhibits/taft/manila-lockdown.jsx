import {useHistory, Link} from "react-router-dom";
import ALFSPOT from "../../../assets/images/ALFSPOT.jpg";
import ManilaMania from "../../../assets/images/ManilaMania.jpg";

export default function ManilaLockDown() {
  let history = useHistory();
  return (
    <main id="taft" className="manila-lockdown">
      <section id="landing">
        <div className="container">
         <h1 style={{textAlign: 'center'}}>Manila Lockdown</h1>
         <h4>Sprawling, unwieldy, undefinable; here are glimpses of the city under lockdown</h4>
         <p>Manila today is part of Metropolitan Manila, made up of sixteen cities and officially called the  National Capital Region. It encompasses an area of 620 square kilometers and a 2020 population of 14 million.  It is the second most populous and the most densely populated region of the Philippines, the ninth most populous metropolitan area in Asia and the fifth most populous urban area in the world. Manila today is a far cry from the city of 220,000 that Burhham saw in 1904. During the pandemic it was again renamed “NCR plus” and expanded to include the provinces of Bulacan, Cavite, Laguna, and Rizal. In this section, we offer snapshots of the city today, including areas beyond the Manila of Burnham, through the works of photographers and video artists, who created them during lockdown.</p>
         <p style={{textAlign: 'right'}}>-Ar Gerry Torres, Curator.</p>
        </div>
      </section>
      <section id="lockdown-exhibits">
        <Link
          style={{
            backgroundImage: `url(${ALFSPOT})`
          }}
          to="/exhibit/taft-and-the-burnham-plan/manila-lockdown/alfspot-quarantine-project"
        >
          <h1>ALFSPOT QUARANTINE PROJECT</h1>
          <h4>TJ Aquino</h4>
        </Link>
        <a href="#" style={{ backgroundImage: `url(${ManilaMania})`}}>
          <h4>COMING SOON</h4>
          <h1 style={{letterSpacing: '0.7em'}}>MANILA MANIA</h1>
          <h4>Gerome Soriano</h4>
        </a>
      </section>
      <section id="exhibits">
        <div className="flex container navBoxes">
          <div
            onClick={() => {
              window.scrollTo(0,0);
            }}
          >
            <div>
              <h3>Back to top</h3>
            </div>
          </div>
          <div 
            onClick={() => {
              history.push('/exhibit/taft-and-the-burnham-plan/manila-lockdown')
            }}
          >
            <div>
              <h3>Manila Lockdown</h3>
              <p>Sprawling, unwieldy, undefinable; here are glimpses of the city under lockdown</p>
            </div>
          </div>
          <div
            onClick={() => {
              history.push('/exhibit/taft-and-the-burnham-plan/manila-reimagined')
            }}
          >
            <div>
              <h3>Manila Reimagined</h3>
              <p>Benilde architecture students propose visions of a gentler city, guided by the spirit  of the Burnham plan and their mentor, Ar Jim Caumeron</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}