import { Link } from "react-router-dom";
import navBox from '../../../components/exhibit/navBoxes'

export default function Taft() {
  return (
    <main id="taft" className="home">
      <section id="landing">
        <div className="container">
          <navBox/>
          <div className="quote">
            <p>
              "Possessing the bay of Naples, the winding river of Paris, <br></br>
              and the canals of Venice, Manila has before it an opportunity  <br></br>
              unique in history of modern times, the opportunity to create  <br></br>
              a unified city equal to the greatest of the Western world  <br></br>
              with the unparalleled and priceless addition of a tropical setting."
            </p>
            <p style={{fontWeight: '600', fontStyle: 'normal', padding: '24px 0px'}}>- Daniel Burnham</p>
          </div>
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
        <div className="container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  )
}