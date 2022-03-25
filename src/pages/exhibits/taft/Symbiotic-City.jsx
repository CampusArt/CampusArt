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
            videoId="N0CBvlPNVbQ"
            opts={opts}
          />
          <p><em>“What motivated us was curiosity in exploring the possibilities of water that had not been tapped 
            before in order to achieve our new version of Manila.”</em></p>
          <p style={{textAlign: 'center'}}>- Kierstenn Dionisio and Janelle Gan</p>
        </div>
      </section>
      <section>
        <div className="container">
        <p>Burnham’s sensitivity to water provided opportunities for this project to open up multiple avenues to incorporate it into the urban fabric to strengthen sensibilities and coexistence with nature, especially waterscapes, in an urban setting. 
          With careful urban layouts and well curated programs that rejuvenate the surrounding atmosphere and promote a healthy lifestyle, we named our project, the “Symbiotic City.”</p>

        <p>In the case of the 1905 Plan for Manila, we were intrigued by how Burnham captured different unsung aspects of the city that, when designed, could turn hindrances into opportunities. In particular, we noticed how he described Manila’s river and bay as reflections of prominent Western counterparts, such as the Bay of Naples, canals of Venice, and rivers of Paris. Moreover, he pushed for the preservation and rejuvenation of esteros and highlighted the role of waterfronts in beautifying and enlivening the life of a city. 
          As such, we chose to embrace the idea of developing Manila’s waterscapes by integrating it into our overarching concept for this project.</p>    
        <CarouselSlider data={data}/>
        <p>Burnham’s sensitivity to water provided opportunities for this project to open up multiple avenues to incorporate it into the urban fabric to strengthen sensibilities and coexistence with nature, especially waterscapes, in an urban setting. With careful urban layouts and well curated programs that rejuvenate the surrounding atmosphere and promote a healthy lifestyle, we named our project, the “Symbiotic City.”</p>
        <p>Dedicating to this concept, several epiphanies and visions came to us almost immediately. What motivated us was curiosity in exploring the possibilities of water that had not been tapped before in order to achieve our new version of Manila. We were interested to dive into speculative and radical designs and introduce new perspectives. We were glad that Studio Archilablife and this exhibition trusted and provided us an outlet to freely perform such explorations, especially on a site as vast and culturally significant as Ermita, Manila. These site characteristics also turned into one of our biggest challenges. </p>
        <p>Given the limited time to work on a large scope while respecting existing heritage landmarks, we had to strategize our design and planning in order to tackle the site. To this day, we still contemplate different routes we could have taken or overlooked. Designing under the constraints of lockdown ebbed our creative flow. We were accustomed to having authentic experiences fuel our creativity pre-pandemic and this project became a learning experience as we rediscovered ways to acquire knowledge online. In spite of this challenge, we are grateful for the strong camaraderie of our design studio, which encouraged us to move onwards.</p>        
        <p>We are delighted to share to our viewers a fresh perspective of Manila, one that entails new ways of using water in an urban environment. We want to introduce a newly revitalized city as an urban oasis, with dynamic terraces, sunken gardens, and waterways that flow within and around it. </p>
        <p>We hope that viewing our project would instill a sense of hope and optimism for our country, especially in these uncertain times. We wish to remind young designers that their voices and opinions, no matter how far-stretched, are capable of igniting relevant conversations that may lead to the shaping of a future they like for the country. As Daniel Burnham once said: “Make no little plans; they have no magic to stir men’s blood... make big plans; aim high in hope and work.”</p>
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