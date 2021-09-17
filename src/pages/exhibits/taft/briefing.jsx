import { Link } from "react-router-dom"

export default function Taft() {
  // const history = useHistory();

  return (
    <main id="taft" className="briefing">
      <section id="landing">
        <div className="container">
          <h1 className="title">Taft and The Burnham Plan</h1>

          <p className="quote">
            "On the point of rapid growth, yet still small in area, possessing the bay of Naples, 
            the winding river of Paris, and the canals of Venice, Manila has before it an opportunity 
            unique in the history of modern times , the opportunity to create unified city equal to the 
            greatest of the Western World with the unparalleled and priceless addition of a tropical setting."
            -Daniel Burnham
          </p>

          <p>
            In the early years of the 20th century, when the Philippines was an American colony, Governor-General 
            William Howard Taft commissioned one of the top architects and urban planners of the time, Daniel Burnham 
            to create a new plan for Manila. The city had been the capital of the country since the 16thC when it was 
            a colony under Spain and was also its center of power, commerce, and religion during the Spanish occupation.
          </p>

          <p>
            The Philippines was won over Spain by America on May 1, 1898, after a brief battle at Manila Bay. By 1900, the 
            American military were planning to establish various programs for their new colony. These were in the areas of 
            education, public health, and infrastructure, and included the replanning of old Manila to transform it into a 
            modern, 20th-century city. Burnham went to the Philippines in the latter part of 1904, stayed for six weeks, then 
            went back to America to finish the project. In 1905, Burnham presented his proposal of a new Manila to the 
            Philippine Commission. “Taft and the Burnham Plan” revisits the 1905 plan of Manila and the vision of its creator 
            Daniel Burnham. 
          </p>

          <p>
            The exhibit is divided into three parts. The first is Manila 1905, focusing on Burnham’s plan, its history, and the 
            context of the project. The second is Manila Lockdown, when we look at the city during the pandemic through the works 
            of photographers and video artists. Through their work we obtain glimpses of the city today, now part of the National 
            Capital Region of sixteen cities and one of the world’s densest megalopolis. The last part is Manila Reimagined, a series 
            of proposals from architecture students of the College of Saint Benilde under Ar Jim Caumeron, who share their visions of 
            the city in a gentler future.
          </p>

          <p className="author">-Ar. Gerry Torres, Curator.</p>

          <Link style={{
            textDecoration: 'none',
            color: '#000',
          }} to="/exhibit/taft-and-the-burnham-plan">
            Return to previous page &gt;
          </Link>
        </div>
      </section>
    </main>
  )
}