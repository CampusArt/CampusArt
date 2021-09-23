import React from "react";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";
import CarouselSlider from "../../../components/CarouselSlider";

// Assets
// import PatchworkManila from "../../../assets/images/PatchworkManila.jpg"
export default function Patchwork() {
  const data = [
    {link: "https://i.ibb.co/nwxxtN4/0-Masterplan.jpg"},
    {link: "https://i.ibb.co/cQfVj0J/1-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/9VN4Lfy/2-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/rGcz4HQ/3-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/cY2q8Zg/4-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/pjggKMQ/5-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/FsxCkTD/6-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/6vctCqg/7-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/5v3Xpvs/8-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/GJtgQ99/9-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/Tg1SdmM/10-Site-Analysis.jpg"},
    {link: "https://i.ibb.co/s1DMB8d/11-Mobility-Map.jpg"},
    {link: "https://i.ibb.co/QrnvBNv/12-Zoning-Map.jpg"},
    {link: "https://i.ibb.co/YXkJS6c/13-Macroplan.jpg"},
    {link: "https://i.ibb.co/kMrtJyV/14-Macroplan.jpg"},
    {link: "https://i.ibb.co/vVnLyps/16-Macroplan.jpg"},
    {link: "https://i.ibb.co/pn4HqqV/17-Macroplan.jpg"},
    {link: "https://i.ibb.co/bdyd8LB/18-Building-Height-Parameters.jpg"},
    {link: "https://i.ibb.co/6DLF0GJ/19-B648-Planning.jpg"},
    {link: "https://i.ibb.co/V3nLbnR/20-B384-Planning.jpg"},
    {link: "https://i.ibb.co/GFShGRM/21-B659-A-Planning.jpg"},
    {link: "https://i.ibb.co/MsNGWCX/22-B659-A-Planning.jpg"},
    {link: "https://i.ibb.co/09b7ngR/23-B659-Planning.jpg"},
    {link: "https://i.ibb.co/FJ9pGQ6/24-B659-A-Planning.jpg"},
    {link: "https://i.ibb.co/BgQ02Sc/25-Land-Area.jpg"},
    {link: "https://i.ibb.co/m9R3mRQ/26-Road-Accessibility.jpg"},
    {link: "https://i.ibb.co/fkHq4Rq/27-Road-Accessibility.jpg"},
    {link: "https://i.ibb.co/mhPWm4J/28-Vista-Map.jpg"},
    {link: "https://i.ibb.co/TB4hJbt/29-Render.jpg"},
    {link: "https://i.ibb.co/jT0ZBjB/31-Render.jpg"},
    {link: "https://i.ibb.co/9y9yCpW/32-Render.jpg"},
    {link: "https://i.ibb.co/JcC6CwT/33-Render.jpg"},
    {link: "https://i.ibb.co/0ndP0QX/34-Render.jpg"},
    {link: "https://i.ibb.co/YksFn3z/35-Render.jpg"},
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
            videoId="7ZtdK8b1t_E"
            opts={opts}
          />
          <p><em>“What also helped motivate us working on the project was the culture in our studio. Despite having groups with different concepts, we still managed to communicate with each other, exchange ideas and opinions, and further develop our design with Sir Jim’s guidance and critique. What inspired us the most to design were the relationships within the studio, that things don’t always need to be academically related for students and mentors to connect.”</em></p>
          <p style={{textAlign: 'right'}}>-Fabico and Martin</p>
        </div>
      </section>
      <section>
        <div className="container">
          <p>Urban planning was new and challenging to us when we were tasked to create a whole proposal for a plot of land in Manila, specifically in the areas of Ermita and San Miguel, for a whole academic term. Despite these challenges, the Burnham project is one of the most interesting projects we’ve done. It allowed us to come up with ideas never thought of before and helped us immerse ourselves in the works of Daniel Burnham, especially his plans for the beautiful city of Manila.</p>
          <p>Going back in history, the Burnham Plan could’ve had a great influence today if it was continued. It involved numerous positive aspects for in a city which we lack in present Manila. One of the objectives of the project was to investigate what the Burnham Plan could’ve been with regards to our concept. Burnham had interesting ideas from working on large government projects to utilizing urban green spaces. It’s really unfortunate that Burnham’s ideas during the early 1900’s were not preserved, they could’ve been key factors to Manila’s sustainability. </p>

          <CarouselSlider data={data}/>

          <p>Nonetheless, the city still has hope for sustainability as we continue to analyze the Burnham plan and, as architects, continue to advocate the “City Beautiful Movement”. After we were briefed about the project and the weeks of concept thinking, we decided to create a patchwork layout between buildings and public spaces to celebrate the communities within the site. The patchwork idea stemmed from observing the urban poor communities present in San Miguel,  how their houses were laid out, and how it relates to their neighbors in the small yet densely populated Barangay 648. Taking inspiration from the communities, we were able to create small clusters of micro-communities that are able to access their needs in their immediate surroundings, generating a more practical approach to everyday life for them in the site while still following the patchwork arrangement of forms they are familiar with.</p>
          <p>Talking aside the project, we said that urban planning was really new and challenging, and difficult to find inspiration from. The hardest part of the process was the formulation of ideas needed to create the essential parts of the project. Communication was fairly hard, given that we worked as partners with different schedules for different subjects that gave us difficulties in collaborating, although in the end, we were able to compromise to bring the ideas that we had for Patchwork City to life.</p>
          
          <div className="flex" style={{alignItems: 'center'}}>
            <div style={{margin: '10px'}}>
              <Youtube videoId="Y7oXUFjUwoI"/>
            </div>
            <p><em>What also helped motivate us working on the project was the culture in our studio. Despite having groups with different concepts, we still managed to communicate with each other, exchange ideas and opinions, and further develop our design with Sir Jim’s guidance and critique. What inspired us the most to design were the relationships within the studio, that things don’t always need to be academically related for students and mentors to connect.</em></p>
          </div>
          <p>Most of the initial phase of the design process was trying to understand how other cities were planned. One disadvantage of studying urban planning in an online setting was the difficulty in tackling most of its physicality. For the initial phases, we were not able to explore the site, we relied heavily on maps, 3D softwares, and history. Despite inaccuracies, we really couldn’t do anything but assume the best. Through visualizations and precedents that enabled us to come up with the patchwork concept, we designed the dimensions of the city and how it shapes the spatiality of the community.</p>
          <p>The patchwork communities concept is basically the backbone of the project and this is what we want the viewers to see. Besides the video presentation, we want them to see the Walkthrough and see the vistas of the city that were based on Burnham’s imagination and principles for Manila.</p>
          <p>To our fellow Benildeans, we know how difficult it is especially being design students and finding inspiration during the lockdown when you’re stuck at home with the same setting. Studies can be overwhelming, unmotivating, sometimes a burnout. Take a break and rest. Sometimes the best ideas come from a random conversation with your friends or certain readings from a book. Stop letting your career wrap around your head. Life is more than just your personal career, it’s about where you are now because of the people who were there for you throughout your journey.</p>

          <p><strong style={{fontWeight: '600'}}>Next: A Multigenerational City by Abacahin and Buencamino</strong></p>
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