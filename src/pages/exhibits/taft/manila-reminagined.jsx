import {useHistory} from "react-router-dom";
import Patchwork from "../../../assets/images/Patchwork.jpg";

export default function ManilaReimagined() {

  let history = useHistory();

  return (
    <main id="taft" className="reimagined">
      <section id="landing">
        <div className="container">
          <h1 style={{borderBottom: 'solid 1px #000', textAlign: 'center'}}>Manila Reimagined</h1>
          <h4>Benilde architecture students propose visions of a gentler city, guided by the spirit of the Burnham plan and their mentor, Ar Jim Caumeron</h4>
          <p>The idea of producing an exhibit on Daniel Burnham and his plan for Manila has been a long-standing dream between me and Jim Caumeron. Both architects and faculty of Benilde’s architecture program, we had been toying with this idea of letting our students revisit the vision of Burnham more than a hundred years ago. Jim in fact assigned Burnham in one of his design classes. Our goal for this project is hoping that in the students’ investigation of Burnham’s plan, they will look more deeply into his vision, discover what was of value, and possibly apply its lessons today. The Manila of 1904, when Burnham first visited, is a distant version of the city today. It has gone through cataclysmic episodes in its history, notably the devastation of World War 2 and the hurried process of its reconstruction. The post-war years have not been kind either, when it was abandoned, unplanned, and abused.</p>
          <p>The class of Jim operated under the lockdown. The situation hampered their classes and affected the initial scope of work. However, they were able to adroitly respond to the limitations with their innovative approach to the brief. Instead of echoing the work of Burnham by working with the same spaces the American architect designed, the students instead pivoted 180 degrees. From the Western orientation of Burnham’s Luneta, they turned towards the direction of the Pasig River. It was still in the purview of the original plan of the American architect and touched on the salient points of his report, notably the effective use of the river. With the vision of these young, idealistic, future architects, our exhibit aims to offer inspiration, alternatives, or rediscoveries that perhaps we can employ for the design of a city that will always be our Manila.</p>
          <p style={{textAlign: 'right'}}>-Ar Gerry Torres, Curator.</p>
          <p style={{fontWeight: '500'}}>The Burnham Exhibition Project Brief for Studio Archilablife </p>
          <p>My studio was asked to react through Architectural Proposals to the upcoming Daniel Burnham exhibition. The project is divided into two phases, the planning and envisioning process and second, populating the plan with unique typologies. The first phase was done during my recently concluded Architectural Design 5 class and to be concluded in my Design 6 studio. The materials that we will produce will supplement the current / ongoing exhibition.  Phase 1 will be  an analysis and critique of the Daniel Burnham City Beautiful principles and proposing a vision plan that either highlights or contradicts its ideas. The project was initially to cover all the areas of Manila that the  Burnham Plan included. However, our 13 week online classes proved to be limiting so the scope was reduced to the Manila City Hall areas and the Moslem Community across the River Pasig. </p>
          <p>Our goal was to create a modern city that prioritises people, enriching their lives and providing a comfortable environment. We percolated ideas on the immediate public areas such as the Intramuros Golf Course, Liwasang Bonifacio, Mehan Garden and Arroceros Forest Park so that they can be enjoyed better by everyone. One of the highlighted objectives is to dignify the remaining heritage buildings in the site, not just because of its historical value but because of the symbols they represent - authority and culture. </p>
          <p>The book reference used for this project were Jahn Gehl’s Cities for People and Cities for A Small Planet Ideas by Sir Richard Rogers.</p>
          <p style={{textAlign: 'right'}}>-Ar Jim Caumeron, Professor, Architectural Design 5</p>
        </div>
      </section>
      <section id="exhibit">
        <div className="container navBoxes">
          <div
            style={{
              flex: '1',
            }}
            onClick={() => {
              history.push('/exhibit/taft-and-the-burnham-plan/manila-reimagined/manila-city-halls-patchwork-city')
            }}
          >
            <img src={Patchwork} alt="Patchwork" width="100%" />
          </div>
          <div style={{flex: '1', flexDirection: 'column', width: '100%', minHeight: "327px"}}>
            <h3>“MULTI GENERATIONAL CITY”</h3>
            <p>Abacahin and Buencamino</p>
          </div>
        </div>
      </section>
      <section id="exhibits">
        <div className="flex container navBoxes">
          <div
            onClick={() => {
              history.push('/exhibit/taft-and-the-burnham-plan/manila-1905')
            }}
          >
            <div>
              <h3>Manila 1905</h3>
              <p>A vision of an American city in Asia at the beginning of the 20th century</p>
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