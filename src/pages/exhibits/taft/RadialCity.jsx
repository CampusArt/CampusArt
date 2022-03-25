import React from "react";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";
import CarouselSlider from "../../../components/CarouselSlider";

export default function RadialCity() {

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
            videoId="ytn87Duf3BM"
            opts={opts}
          />
          <p><em>“We anchored our pocket city project on Burnham’s idea of radiating roads that allowed the center to be nodes, branching out to different parts of the city. We used this concept to create a radial park across the whole pocket city that connects everything, thus, the name Radial City.”</em></p>
          <p style={{textAlign: 'center'}}>- Julian Semilla and Lance Sy</p>
        </div>
      </section>
      <section>
        <div className="container">
          <p>Recognizing the need to reshape how we perceive our cities, we took the opportunity to exhibit what can be a beacon of change in Philippine urban planning.</p>
          <p>Forward looking yet rooted from the past; from this ideology, we took a step back to see what was, and what could be. We pondered on Daniel Burnham’s vantage point, equating the Philippines to the best cities of the western world during that time, amplified by the magic of a tropical setting. 
            With the fondness he had for radical ideas, Burnham drew up a plan in 1905 to shape the future of Manila. Unfortunately, it never fully materialized as a result of World War II, which destroyed the city and changed the way Filipinos live.</p>
          <p>More than a century since Burnham’s Plan, we examined how our cities are built. It neglects human comfort and experience in the name of development, and overlooks proper planning, resulting in chaos. To avoid repeating the mistakes of our past, we criticized the shortcomings of Manila as well as Burnham’s plan.</p>
        <CarouselSlider data={data}/>
        <p>The Burnham’s Plan was inclined towards catering to the rich, geared towards luxury and not affordable housing, neglecting the masses. Although stressing on the beauty of a tropical setting, the only solutions he presented were fountains and swimming pools. Coming from the second industrial revolution of America, Burnham’s plan was car-centric and somewhat rigid. With this, we aimed to revolutionize urban design with his principle, “make no little plans,” and align it with what we need today.</p>
        <p>We anchored our pocket city project on Burnham’s idea of radiating roads that allowed the center to be nodes, branching out to different parts of the city. We used this concept to create a radial park across the whole pocket city that connects everything, thus, the name Radial City. To negate the rigidness of Burnham’s city blocks, we synthesized to create a memorable experience, greeting the viewer with new spectacles similar to historical towns around the world. The winding organic roads is the aspect which makes the city a maze for people to explore, creating opportunities and spaces for human Interaction.</p>
        <p>The pandemic pushed us away from the people we hold dearly, and our current situation has reiterated the importance of green, social spaces for us. During the design process, we could not help but realize how being enclosed in a concrete shell deprives us of genuine human connection we can experience outside. The Radial City encapsulates how we see the future of Philippine urban planning, in hopes that it may spark paramount realization that there is a need for human-centered cities.</p>
        
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