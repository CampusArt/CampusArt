import React from "react";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";
import CarouselSlider from "../../../components/CarouselSlider";

export default function ManilaSymbioticCity() {

  const data = [
    {link: "https://i.ibb.co/4WN6gkk/0-CONCEPT.jpg"},
    {link: "https://i.ibb.co/f4RTph0/1-SITE-ANALYSIS-FIGURE-GROUND-MAP.jpg"},
    {link: "https://i.ibb.co/tsYgngb/2-SITE-ANALYSIS-WORKABLE-SITE.jpg"},
    {link: "https://i.ibb.co/Z6ybC9N/3-SITE-ANALYSIS-EXISTING-ZONING.jpg"},
    {link: "https://i.ibb.co/XDp8F55/4-SITE-ANALYSIS-LANDMARKS.jpg"},
    {link: "https://i.ibb.co/HpdYrH3/5-SITE-ANALYSIS-SUN-AND-WIND-ANALYSIS.jpg"},
    {link: "https://i.ibb.co/vmgmLvv/6-SITE-ANALYSIS-MOBILITY.jpg"},
    {link: "https://i.ibb.co/pbgwNc4/7-SITE-ANALYSIS-ROAD-NETWORK-AND-TRAFFIC.jpg"},
    {link: "https://i.ibb.co/q53MBdr/8-SITE-ANALYSIS-VIEWS.jpg"},
    {link: "https://i.ibb.co/3cMfC8Q/9-SITE-ANALYSIS-POINTS-OF-INTEREST.jpg"},
    {link: "https://i.ibb.co/ss1f4kJ/10-SITE-ANALYSIS-RADIUS.jpg"},
    {link: "https://i.ibb.co/Xb2jFPf/11-SITE-ANALYSIS-EXISTING-WATERWAYS.jpg"},
    {link: "https://i.ibb.co/4p7VTzs/12-BURNHAM-PLAN-VISION-MASTERPLAN.jpg"},
    {link: "https://i.ibb.co/R4dqL3w/13-BURNHAM-PLAN-ZONING.jpg"},
    {link: "https://i.ibb.co/PCgH0mB/14-SALEABILITY.jpg"},
    {link: "https://i.ibb.co/dpNPCQy/15-BURNHAM-URBAN-IDEAS-STREET-SYSTEM.jpg"},
    {link: "https://i.ibb.co/tZfYYyb/16-BURNHAM-PLAN-ACCESS.jpg"},
    {link: "https://i.ibb.co/wBZwRQD/17-BURNHAM-PLAN-ROAD-NETWORK.jpg"},
    {link: "https://i.ibb.co/nQmNTMt/18-BURNHAM-PLAN-MOBILITY.jpg"},
    {link: "https://i.ibb.co/TLPR59T/19-BURNHAM-PLAN-LANDMARKS.jpg"},
    {link: "https://i.ibb.co/nQgHwYd/20-BURNHAM-VIGNETTES-INSIDE-TRAIN.jpg"},
    {link: "https://i.ibb.co/JCcPF6Q/21-BURNHAM-VIGNETTES-CITY-HALL-TERMINAL.jpg"},
    {link: "https://i.ibb.co/JkzhFYg/22-BURNHAM-VIGNETTES-CITY-HALL-GSIS.jpg"},
    {link: "https://i.ibb.co/rZk27qS/23-BURNHAM-VIGNETTES-POST-OFFICE.jpg"},
    {link: "https://i.ibb.co/vP0cbkS/24-BURNHAM-PLAN-VIEWS.jpg"},
    {link: "https://i.ibb.co/TKRwj6X/25-BURNHAM-VIGNETTES-CITY-HALL-VISTA.jpg"},
    {link: "https://i.ibb.co/HTqFChq/26-BURNHAM-VIGNETTES-MOSQUE.jpg"},
    {link: "https://i.ibb.co/2n8Jdp3/27-BURNHAM-URBAN-IDEAS.jpg"},
    {link: "https://i.ibb.co/fDQ2HNw/28-BURNHAM-URBAN-IDEAS-STEPWELLS.jpg"},
    {link: "https://i.ibb.co/VJgmT4J/29-BURNHAM-VIGNETTES-INTRAMUROS-BRIDGE.jpg"},
    {link: "https://i.ibb.co/bgmhhxR/30-BURNHAM-PLAN-BAY-SECTION.jpg"},
    {link: "https://i.ibb.co/8nkwTCw/31-BURNHAM-VIGNETTES-PASIG-RIVER.jpg"},
    {link: "https://i.ibb.co/7gpNyG9/32-BURNHAM-VIGNETTES-BRIDGE-TO-MOSQUE.jpg"},
    {link: "https://i.ibb.co/Q8hHZwn/33-BURNHAM-PLAN-NEW-WATERS.jpg"},
    {link: "https://i.ibb.co/HTX4GMk/34-BURNHAM-URBAN-IDEAS-ESTEROS.jpg"},
    {link: "https://i.ibb.co/1q9v0Yt/35-BURNHAM-VIGNETTES-BIRDS-EYE.jpg"},
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
          <p style={{textAlign: 'center'}}>-Carague and Timbol</p>
        </div>
      </section>
      <section>
        <div className="container">
          <p>Manila is home to a rich culture and history, with monumental sites, and interesting people. This project aims to embody a sense of energy and inclusiveness. The intention of developing a kinesthetic city is to promote more movement through walking, biking and the like, and to lessen overpowering vehicular activity. With the diverse community within our area, pursuing inclusiveness allowed a sense of belonging for all. Realizing the necessity of the two ideas for the progress of the community, we analyzed how we could tackle both objectives for the re-planning of the area. The main idea was to look at the city in smaller portions, uncovering its potential and finding the connections among these to create a cohesive, active, and inclusive whole. <br/>Planning at a human scale made us more sympathetic towards conditions of the site, especially in identifying issues  with the current planning, and allowing us to be thorough researchers without seeing the site in person.</p>
          
        <CarouselSlider data={data}/>
        <p>For inspiration on the ideal ways of creating cities and to compare (and contrast) the possibilities of building at human scale, we looked at European examples like Renaissance Florence and innovative Scandinavian cities like Malmo in Sweden. We were sensitive to rules in creating ideal Renaissance cities but we manipulated them, like perspective views, to build living, vernacular spaces in our own context. Having different emotive conditions of a tight walkable city where you could lose yourself while exploring its parts, we implemented the perspective of directness. We turned linear vistas into anchor points and the articulation of an undulating skyline where landmarks protrude as reference points, using the idea of personal choice and immediacy.</p>
        <p>Being in lockdown, we realized the intangible nature of designing digitally. To truly understand a place requires complete immersion and the use of all senses to absorb data but it was difficult to collect information and understand the city intimately for our project. We knew how different it was to merely research online for information.  However, it did not stifle our ability to utilize other means in obtaining a clearer view of what the city is and could be. Planning for an active and inclusive city is influenced by studies on certain demographics, the existing buildings, and the culture of the community. As well, utilizing programs to produce 3D outputs of roads and buildings assisted the process of creating memorable movements around the site. </p>
        <p>Touring our proposed city, we hoped our intention of providing unique vistas within the site, both subtle and pronounced would be evident. There are two main residential areas, communities where we provide distinct experiences of walking through its spaces, and to view an interesting skyline. The plotting of the different typologies were thoughtfully created for the individual to explore, discover and enjoy. By placing great value on inclusivity, one could observe it in the area and the surroundings. To those who would take time to understand our process and our design, we hope to share how visions can be made bigger through the planning of small ideas.</p>
        
        <p><strong style={{fontWeight: '600'}}>Next: Symbiotic City by Dionisio and Gan</strong></p>
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