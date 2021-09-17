import { Link } from "react-router-dom";
import { navBox } from '../../../components/exhibit/navBoxes'
import { useViewportScroll, useTransform, motion } from "framer-motion"

// Assets
import map from "../../../assets/images/map.png"

export default function Taft() {
  
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 812], [0, 300]);

  return (
    <main id="taft" className="home">
      <section id="landing">
        <div className="container">
          <div className="quote">
            <motion.p
              initial={{opacity: 0, y: -25}}
              animate={{opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}}
            >
              "Possessing the bay of Naples, the winding river of Paris, <br></br>
              and the canals of Venice, Manila has before it an opportunity  <br></br>
              unique in history of modern times, the opportunity to create  <br></br>
              a unified city equal to the greatest of the Western world  <br></br>
              with the unparalleled and priceless addition of a tropical setting."
            </motion.p>
            <motion.p 
              initial={{opacity: 0, y: -25}}
              animate={{opacity: 1, y: 0, transition: { duration: 1, delay: 2 }}}
              style={{
                fontWeight: '400', 
                fontStyle: 'normal',
                padding: '24px 0px',
              }}
            >
              - Daniel Burnham
            </motion.p>
          </div>
          <motion.img
            src={map} 
            alt="" 
            style={{
              position: 'absolute',
              width: '100%',
              maxWidth: '866px',
              opacity: 0.3,
              right: 0,
              top: '25%',
              zIndex: 0,
              y: y1
            }}
          />
        </div>
      </section>
      <section id="second">
        <div className="container">
          <div className="wrapper">
            <h1>Taft and the Burnham Plan</h1>
            <p>In the early years of the 20th century, when the Philippines was an American colony, Governor-General William Howard Taft commissioned one of the top architects and urban planners of the time, Daniel Burnham to create a new plan for Manila. The city had been the capital of the country since the 16thC when it was a colony under Spain and was also its center of power, commerce, and religion during the Spanish occupation.</p>
            <p>The Philippines was won over Spain by America on May 1, 1898, after a brief battle at Manila Bay. By 1900, the American military were planning to establish various programs for their new colony. These were in the areas of education, public health, and infrastructure, and included the replanning of old Manila to transform it into a modern, 20th-century city. Burnham went to the Philippines in the latter part of 1904, stayed for six weeks, then went back to America to finish the project. In 1905, Burnham presented his proposal of a new Manila to the Philippine Commission. “Taft and the Burnham Plan” revisits the 1905 plan of Manila and the vision of its creator Daniel Burnham. </p>
            <div style={{textAlign: 'center'}}>
              <Link to="/exhibit/taft-and-the-burnham-plan">
                Read full exhibit brief &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="exhibits">
        <div className="container navBoxes">
          <div>
            <Link to="/exhibits/taft-and-the-burnham-plan/manila-1905">
              <h3>Manila 1905</h3>
              <p>A vision of an American city in Asia at the beginning of the 20th century</p>
            </Link>
          </div>
          <div>
            <Link to="/exhibits/taft-and-the-burnham-plan/manila-1905">
              <h3>Manila Lockdown</h3>
              <p>Sprawling, unwieldy, undefinable; here are glimpses of the city under lockdown</p>
            </Link>
          </div>
          <div>
            <Link to="/exhibits/taft-and-the-burnham-plan/manila-1905">
              <h3>Manila Reimagined</h3>
              <p>Benilde architecture students propose visions of a gentler city, guided by the spirit  of the Burnham plan and their mentor, Ar Jim Caumeron</p>
            </Link>
          </div>
        </div>
      </section>
      <section id="acknowledgements">
        <div className="container">
          <h1>Acknowledgements</h1>
          <div>
            <p>Ar. Jim Cameron</p>
            <p>Ar. Harvey Vasquez</p>
          </div>
        </div>
      </section>
    </main>
  )
}