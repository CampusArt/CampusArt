import React from "react";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";
import CarouselSlider from "../../../components/CarouselSlider";


export default function SmallisBig() {
  const data = [
    {link: "https://i.ibb.co/1JYRrBD/01-OVERVIEW.jpg"},
    {link: "https://i.ibb.co/0qDyp9F/02-CONTEXT.jpg"},
    {link: "https://i.ibb.co/dfRqpGS/03-ZONING.jpg"},
    {link: "https://i.ibb.co/4KZs10r/04-MOBILITY-AND-ACCESS.jpg"},
    {link: "https://i.ibb.co/Tkq0KSv/05-BAY-SECTION.jpg"},
    {link: "https://i.ibb.co/vDRtcCd/06-URBAN-IDEAS.jpg"},
    {link: "https://i.ibb.co/xh2t4WX/07-URBAN-IDEAS.jpg"},
    {link: "https://i.ibb.co/K2hzD2P/08-SKATE-PARK-ISOMETRIC.jpg"},
    {link: "https://i.ibb.co/zmvmx8h/09-PINAVIA-ISOMETRIC.jpg"},
    {link: "https://i.ibb.co/Q9MB1Fr/10-GREEN-BRIDGE-ISOMETRIC.jpg"},
    {link: "https://i.ibb.co/c2p6sv9/11-ISLAMIC-COMMUNITY-ISOMETRIC.jpg"},
    {link: "https://i.ibb.co/hKsQZyR/12-OFFICE-EMPHASIS-ISOMETRIC.jpg"},
    {link: "https://i.ibb.co/CmFzct7/13-GOVERNMENT-CAMPUS-ISOMETRIC.jpg"},
    {link: "https://i.ibb.co/PTFF4mK/14-ELEVATED-RESIDENTIAL-ISOMETRIC.jpg"},
    {link: "https://i.ibb.co/jL3s1vk/15-AERIAL-VIEW-ISOMETRIC.jpg"},
    {link: "https://i.ibb.co/9q8jNzd/16-MANILA-POST-OFFICE-FROM-GREEN-BRIDGE-AND-MET-GARDEN.jpg"},
    {link: "https://i.ibb.co/HNLrrmC/17-GOVERNMENT-CAMPUS.jpg"},
    {link: "https://i.ibb.co/K7zVCbn/18-Site-iterations-3-2-tourism.jpg"},
    {link: "https://i.ibb.co/RNt8hmY/19-ELEVATED-RESIDENTIAL.jpg"},
    {link: "https://i.ibb.co/PFMjyWy/20-SKATE-PARK.jpg"},
    {link: "https://i.ibb.co/CvfKJX3/21-URBAN-MOSQUE.jpg"},
    {link: "https://i.ibb.co/nLsRx7Z/22-MANILA-CITY-HALL-FROM-PEDESTRIAN-BRIDGE.jpg"}
  ]
  const opts = {
    height: '840px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <main id="taft" className="template">
      <section id="landing">
        <div className="container">
          <Youtube 
            videoId="tgkT5Ny78dA"
            opts={opts}
          />
          <p><em>“Burnham believed in a beautiful Manila. By thinking big and the continuation of his initiative, a city of interesting views, culture, and life would have been born. Unfortunately, through the years, we witnessed this vision unravel. What once could have developed into a city displaying treasures is now not what we hoped it would be. Approaching this project of redesigning a portion of Manila, we studied Burnham’s ideas on what developments would benefit the city. By understanding his ideas of utilizing uplifted waterfront areas and creating vistas, we were able to apply these into our own vision for a new Manila.”</em></p>
          <p style={{textAlign: 'right'}}>-Carague and Timbol</p>
        </div>
      </section>
      <section>
        <div className="container">
          <p>Manila is home to a rich culture and history, with monumental sites, and interesting people. This project aims to embody a sense of energy and inclusiveness. The intention of developing a kinesthetic city is to promote more movement through walking, biking and the like, and to lessen overpowering vehicular activity. With the diverse community within our area, pursuing inclusiveness allowed a sense of belonging for all. Realizing the necessity of the two ideas for the progress of the community, we analyzed how we could tackle both objectives for the re-planning of the area. The main idea was to look at the city in smaller portions, uncovering its potential and finding the connections among these to create a cohesive, active, and inclusive whole. Planning at a human scale made us more sympathetic towards conditions of the site, especially in identifying issues with the current planning, and allowing us to be thorough researchers without seeing the site in person.</p>
          <CarouselSlider data={data}/>
          <p>For inspiration on the ideal ways of creating cities and to compare (and contrast) the possibilities of building at human scale, we looked at European examples like Renaissance Florence and innovative Scandinavian cities like Malmo in Sweden. We were sensitive to rules in creating ideal Renaissance cities but we manipulated them, like perspective views, to build living, vernacular spaces in our own context. Having different emotive conditions of a tight walkable city where you could lose yourself while exploring its parts, we implemented the perspective of directness. We turned linear vistas into anchor points and the articulation of an undulating skyline where landmarks protrude as reference points, using the idea of personal choice and immediacy.</p>
          <p>Being in lockdown, we realized the intangible nature of designing digitally. To truly understand a place requires complete immersion and the use of all senses to absorb data but it was difficult to collect information and understand the city intimately for our project. We knew how different it was to merely research online for information.  However, it did not stifle our ability to utilize other means in obtaining a clearer view of what the city is and could be. Planning for an active and inclusive city is influenced by studies on certain demographics, the existing buildings, and the culture of the community. As well, utilizing programs to produce 3D outputs of roads and buildings assisted the process of creating memorable movements around the site.</p>
          <p>Touring our proposed city, we hoped our intention of providing unique vistas within the site, both subtle and pronounced would be evident. There are two main residential areas, communities where we provide distinct experiences of walking through its spaces, and to view an interesting skyline. The plotting of the different typologies were thoughtfully created for the individual to explore, discover and enjoy. By placing great value on inclusivity, one could observe it in the area and the surroundings. To those who would take time to understand our process and our design, we hope to share how visions can be made bigger through the planning of small ideas.</p>
          
          <div 
            style={{
              color: "#000",
              padding: '50px 0px'
            }}
          >
            <Link to="/exhibit/taft-and-the-burnham-plan/manila-reimagined/">Return to previous page &gt;</Link>
          </div>
        </div>
      </section>
    </main>
  )
}