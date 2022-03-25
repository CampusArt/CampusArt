import React from "react";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";
import CarouselSlider from "../../../components/CarouselSlider";

export default function MultigenCity() {

  const data = [
    {link: "https://i.ibb.co/Bg6VFFy/1-Site-analysis-Zoning.jpg"},
    {link: "https://i.ibb.co/N1ZXYzw/2-Site-analysis-Surrounding-context.jpg"},
    {link: "https://i.ibb.co/55WGm73/3-Site-analysis-Traffic-diagram.jpg"},
    {link: "https://i.ibb.co/GVJPmxB/4-Site-analysis-Flow-of-vehicles.jpg"},
    {link: "https://i.ibb.co/VLDms6H/5-Site-Analysis-Pedestrian.jpg"},
    {link: "https://i.ibb.co/LND28jx/6-Site-analysis-River-Ferry-and-LRT.jpg"},
    {link: "https://i.ibb.co/xFr31mV/7-Site-analysis-Site-Potential.jpg"},
    {link: "https://i.ibb.co/wsfH01F/8-Site-Progression-1-Problems-Solutions-Site-Potential.jpg"},
    {link: "https://i.ibb.co/0CwkRSJ/9-Site-Progression-2-New-Road-Layout.jpg"},
    {link: "https://i.ibb.co/FsFhLfz/10-Site-Progression-3-Accessibility.jpg"},
    {link: "https://i.ibb.co/L5VCsJC/11-Site-Progression-4-Zoning.jpg"},
    {link: "https://i.ibb.co/kgQtbw0/12-Site-progression-5-Node-Based-System.jpg"},
    {link: "https://i.ibb.co/D1R6hkx/13-Site-iterations-1-Initial-Iteration.jpg"},
    {link: "https://i.ibb.co/4dKfF52/14-Site-iterations-2-Diversifying-Spaces.jpg"},
    {link: "https://i.ibb.co/9nHHzZn/15-Site-iterations-3-Massing-of-Buildings.jpg"},
    {link: "https://i.ibb.co/8gnRQCC/16-Site-iterations-3-4-Multigenerational-spaces.jpg"},
    {link: "https://i.ibb.co/f9xTdJJ/17-Site-iterations-3-3-social-spaces.jpg"},
    {link: "https://i.ibb.co/K7zVCbn/18-Site-iterations-3-2-tourism.jpg"},
    {link: "https://i.ibb.co/g9ZfsLG/19-Site-iterations-3-1-Reframed-Problems-and-Solutions.jpg"},
    {link: "https://i.ibb.co/6nXYfJh/20-Site-iterations-4-Walkability-of-Major-Nodes.jpg"},
    {link: "https://i.ibb.co/zschG0Z/21-Site-iterations-1-Expansion-of-nodes.jpg"},
    {link: "https://i.ibb.co/9YRr0BD/22-Site-iterations-4-Intersecting-Spaces.jpg"},
    {link: "https://i.ibb.co/nLxKLzY/23-Site-iterations-5-City-Vision.jpg"},
    {link: "https://i.ibb.co/5jfPqRR/24-final-iteration-1.jpg"},
    {link: "https://i.ibb.co/Bsx1f66/25-final-iteration-2-Defined-Nodes.jpg"},
    {link: "https://i.ibb.co/BCxKW1N/26-final-iteration-6-1-Landmarks.jpg"},
    {link: "https://i.ibb.co/PmMGW5B/27-final-iteration-6-2-Added-Landmarks.jpg"},
    {link: "https://i.ibb.co/xzW9Cy6/28-final-iteration-3-Mobility-of-Nodes.jpg"},
    {link: "https://i.ibb.co/By2hpgS/29-final-iteration-4-Pedestrian-Access.jpg"},
    {link: "https://i.ibb.co/PhhQRTZ/30-final-iteration-5-Public-Transport.jpg"},
    {link: "https://i.ibb.co/ThBbkHY/31-final-iteration-6-Road-Access.jpg"},
    {link: "https://i.ibb.co/qWbgLS2/32-final-iteration-7-Zoning.jpg"},
    {link: "https://i.ibb.co/hm6R2Cg/33-final-iteration-8-Zoning.jpg"},
    {link: "https://i.ibb.co/mvX9tRg/34-final-iteration-9-Zoning-Social-Spaces.jpg"},
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
            videoId="g8okgO-ybCw"
            opts={opts}
          />
          <p><em>“Despite all that, we kept on pushing forward knowing that all this hardship would be worth it in  the end, this project invoked something we both truly believe in, the beauty and potential manila could  have had. We prided ourselves in the different variety we provided for public spaces and functions in  hopes of encompassing everyone and their many different lifestyles. We wanted our city to be usable by  everyone and to create bonds through these many functions they can perform with the others that  share the space with them.”</em></p>
          <p style={{textAlign: 'right'}}>-Abacahin and Buencamino</p>
        </div>
      </section>
      <section>
        <div className="container">
          <p>The project that we were given was very different from any of our previous experiences within  our college experience thus far. From designing structures, we now had to design cities. In doing so, we  had to consider the beliefs, livelihood, and identity of the people within the area as well as the average  Filipino. We also had to look back in time and envision what it was Daniel Burnham saw and attempted  to build in manila. From what we gathered, we pictured Burnham’s manila to be pedestrianized and to focus on the ability of people to get in and around the many different points of interest within the site. A Manila where the city was built to try and emphasize the communal culture we hold so while also  highlighting the many public institutional and relevant structures in the site. A city reminiscent of Paris,  with a tropical twist to it.</p>
          
        <CarouselSlider data={data}/>
        <p>Our project tackled this vision of manila by highlighting and emphasizing the many heritage  structures in the area and using them to front our many public areas giving each a unique landmark, and  function in relation to the overall site. We wanted to create grand landscapes around these heritage  structures while contrasting them in residential areas with tight, intimate, and narrow streets to bring  people together as well. By contrasting the spaces even in their design style, the functions of the locations become evident allowing you to have a general idea where you are still while exploring the many different locations within the site. We were heavily inspired by how neatly Daniel Burnham would  emphasize the location by what style was prominent in the area. For more public and institutional  locations, he used neo-classical architecture and symmetry to imbue power and grandeur while using a more Filipino style for the private and residential making things more comfortable and recognizable for  the population. Other than this, we noticed he truly emphasized the public spaces and tried to make locations that can really create experiences and memorable landscapes for people to explore. This made the place a lot more personal and relatable for everyone ensuring that we felt in tune with the design. </p>
        <div className="flex" style={{alignItems: 'center'}}>
          <div style={{margin: '10px'}}>
            <Youtube videoId="lj2S00o6sZs"/>
          </div>
          <p>To ensure quality in our work, it was important to really immerse yourself in the site and try to  understand on a deeper level what it is that would improve the quality of life within the area. This was  quite difficult given the inability to actually go out and visit the site. In making up for that inability, we had to research online about every detail and look back at reference images in trying to visually map out  the area. We then focused on the scale and size of everything ensuring that it would be designed with  people in mind, this was important to keep in mind as not having much experience with the area left a lot of information to still be found when working the project. </p>
        </div>
        <p>Other factors that really challenged us in designing during the lockdown was the fact that Andre and I are quite new to this level as this was our first taste of the studio. Many late nights were spent toiling away and even at times breaking down at  the uncertainty of finishing on time. It was mentally and emotionally challenging. </p>
        <p>With this, we hope to encourage everyone to appreciate our country and the culture that comes  with it. We want to embody a sense of community where we all contribute to a universal benefit of all  whilst not forgetting the many efforts and historically relevant factors that helped us get to where we  are today. Know that the is hope yet for our country to develop and improve, if we all do our part  however small it may be. </p>
        
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