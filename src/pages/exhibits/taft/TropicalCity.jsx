import React from "react";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";
import CarouselSlider from "../../../components/CarouselSlider";

export default function TropicalCity() {

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
            videoId="Bf8Syoj9g0U"
            opts={opts}
          />
          <p><em>“The challenges were bringing back the streets to the people when the heat discouraged walking and being environmentally responsible in a poorly planned city, its concerns addressed by band-aid solutions rather than an overall vision.”</em></p>
          <p style={{textAlign: 'center'}}>- Tracie Bejar and Kevin Nuñez</p>
        </div>
      </section>
      <section>
        <div className="container">
          <p>The project looks to give justice to Manila’s past and respect its history by proposing possibilities for its future. A story told from the perspective of an American planner, Daniel Burnham, the Burnham Plan gave us a glimpse of the complexities, considerations, and parameters in urban planning. It was a challenge to us given the scale of the project. The challenge of planning opened urban design to us on a deeper, more personal level. 
            It taught us how to be sensitive to diverse cultural experiences, emphasize interventions for thermal comfort and give the streets back to pedestrians.</p>
          <p>When we revisited Burnham's Manila, we took his vision and asked what was applicable to the current city and its culture. We noticed that his approach to the plan was predestined to a certain style, mirroring the American dream, a culture of the west injected into a post-Spanish colonial Philippines. 
            His vision, though coined from the grandly named, “City Beautiful Movement,” lacked emphasis on elements that defined Manila and the effects of a tropical climate on the culture</p>
          <p>We envisioned Manila as a true tropical city. When Burnham said “Possessing the bay of Naples, the winding river of Paris, and the canals of Venice, Manila has before it an opportunity unique in the history of modern times, the opportunity to create a unified city to the greatest of the Western world with the unparalleled and priceless addition of a tropical setting,”  we knew that this was the core of our process. 
            This was expressed by studying the masterplan, designing with the amihan winds, the path of the sun, and streets walkable within a 200-meter radius. We studied and applied these factors on the building program, its components, and the building massing to make it more comfortable for people to explore the city on foot and immerse themselves with its beauty and culture.</p>        
        <CarouselSlider data={data}/>
          <p>The challenges were bringing back the streets to the people when the heat discouraged walking and being environmentally responsible in a poorly planned city, its concerns addressed by band-aid solutions rather than an overall vision. Our reliance on vehicles, the poorly planned streets, and the polluted environment created disconnected spaces that discourage walking. By navigating these questions, we engaged in a conversation of how good urban planning can make a city responsive to the needs of the people.</p>
          <p>The project could have been more engaging and interesting if it was safe to explore the site amidst the pandemic. We were frustrated since we could have spent time immersing ourselves in the area and interviewing the locals. Doing so would have sparked an immersive exploration of our project. The challenge made us want to experience Manila more, thankfully, with the internet, we got enough information as a basis for designing the tropical city.</p>
          <p>We worked as a pair on online platforms that allowed us to sketch in real-time. Maximizing the digital helped greatly with the brainstorming, feedback, and allowed us to simulate the face-to-face. There are many interesting vistas, especially from the new Manila City Hall and the Ma’Had Islamic Mosque that create a clear view across the Pasig River. We continued the narrative of the National Museum complex to a new Green Strip that invites agri-tourism with a horticultural and botanical garden, and a bamboo forest that celebrates the diverse fauna of the Philippines.</p>
          <p>Our message to fellow Benildeans is to learn from visionaries, just as Burnham did, and from your daily experiences. He had a clear picture of the potential of Manila and expressed it through urban design. But we have the privilege to experience it today. Start a dialogue, question where it was great and where it lacked, then create a new vision that can disrupt and change its future for the better.</p>
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