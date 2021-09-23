import { useEffect } from "react"
import Youtube from "react-youtube";
import {Link} from "react-router-dom"

export default function HallOfHeroes() {
  

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const opts = {
    height: '840px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <main id="tdd2" className="template">
      <div className="container">
        <Youtube
          videoId="qm21uNkLTjg"
          opts={opts}
        />
        <h1 className="title glow">"HALL OF HEROES"</h1>
        <h3 className="author glow">BENJIE MARASIGAN</h3>
        <p>When the COVID-19 pandemic struck early last year, we were all caught by surprise.  The sudden disruption brought by the lockdowns gave anxieties to all of us. As I was watching the news about the deaths and difficulties faced by the frontline health workers, I felt helpless, frightened, sad, and guilty. Guilty of not being able to help because I cannot get out of the house. I tried to think of ways on how to best contribute to the effort against COVID-19, given the limitation of the situation. What immediately crossed my mind was how I can use my God-given skills to give hope to others, through art, during this time of hopelessness. Because of the community quarantine, the social media became the natural venue to share these artworks, specifically Facebook and Instagram. Since the start of the pandemic up to the present, I tried to document what was happening in our country, through my digital illustration and paintings.</p>
        <p>The following were the main themes of my digital creations:</p>
      </div>
      <section>
        <div className="container">
          <div className="section">
            <h3>TRIBUTE TO OUR FRONTLINERS AND TO THE FALLEN HEROES OF THE PANDEMIC</h3>
            <p>As a tribute to the sacrifices of our frontliners and our fallen frontline health workers, I did several illustrations honoring them. For the first four months of the pandemic, I tried to memorialize our country’s fallen doctors and nurses by illustrating each one of them.</p>
          </div>
          <div className="section">
            <h3>My Response to the Government’s Response to the Pandemic</h3>
            <p>Since there are so many hatreds and negativity in social media, I tried to focus on sharing a more inspiring, hopeful, and positive vibes online. But there were instances that I just had to respond in protest to the response or non-response of the Philippine Government during the pandemic, just like the issues on mass testing and anti-terrorism. For this, I did several editorial cartoon type illustrations showing the burning issues of the day.</p>
          </div>
          <div className="section">
            <h3>Volunteerism and Bayanihan During the Pandemic</h3>
            <p>I also did several homages to the spirit of Bayanihan and volunteerism of our countrymen.  One such volunteer group is the Art Relief and Mobile Kitchen (ARMK), headed by my friends, Alex Baluyut and Precious Leaño. Their advocacy to give decent meals to communities affected by both natural and human calamities is very inspiring.  In the same spirit, I volunteered to document their initiatives by painting the ingredients they used, the food they cooked, the people they feed, and the ARMK volunteers in action, themselves.</p>
            <p>The Community Pantry movement is also an inspiration during this time of economic hardship.  I also did several artworks to show my support to these selfless volunteers.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section">
            <h3>Digital Tools and My Evolving Art Style</h3>
            <p>All the art works that I produced during this period were created using an iPad Pro, an Apple Pencil, and an illustration app, called Procreate 5.  The versatility of the iPad Pro to simulate a traditional drawing/painting experience made me easily adapt to the digital process of creating art works. I just naturally gravitated to the iPad Pro as my favorite drawing and painting tool. My experience has also proven that this small digital gadget can produce professionally made art works. It is a reliable piece of digital tool that you can use professionally in the industry.</p>
            <p>The lockdown has given me more time to learn how to use the iPad Pro and Procreate in digital painting. As a traditional 2D animator for almost three decades, I was trained to produce my animated drawings using line art only. Putting colors and rendering painterly styles are quite difficult for me.  But during the pandemic I slowly broke the barrier of just drawing line art into creating colored digital illustrations and paintings. </p>
            <p>To compile all my artworks, I created a virtual hall using the Oculus Rift S Virtual Reality Headset and controller together with Oculus Quill, a VR software for illustration and animation. Through the help of technology, I was able to launch my one-man virtual exhibit which several years ago was quite impossible to achieve.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <p>I am Benjamin M. Marasigan Jr., a Fulltime Instructor and the founding Chairperson of the Animation Program of the School of Design and Arts, De La Salle-College of St. Benilde, from 2007 to 2018. I have been teaching in Benilde since 2001. My career in animation started in 1992 at Filcartoons Inc., a subsidiary of Hanna-Barbera Studio in the Philippines.  I started out as an inbetweener and later became a 2D animator. I animated on shows like The Flintstones, Powerpuff Girls, Dexter’s Lab, Jonny Quest, Captain Planet, Young Tom and Jerry.  I also did freelance work for Toon City Animation where I worked on TV shows like Lilo and Stitch, The Emperor’s New School, and Curious George.</p>
          <p>I was the President of the Animation Council of the Philippines Inc. (ACPI) from 2013 to 2015 and was part of its Board of Directors from 2006 to 2018. </p>
          <p>In Benilde, I headed the Toonbro production of “Frere: De La Salle, Patron Saint of Teachers,” (2013) a 46 minute an animated movie on the life of St. John Baptist De La Salle and “The Little One,” the life of St. Benilde Romancon (2015), a 15 minute animated shorts. </p>
          <p>At present, I am teaching courses on Animation Principles, Character Design, 2D Tradigital Animation, and Cut Out Animation.  I’m also into VR animation using Oculus Rift S and Oculus Quill.</p>
          <p style={{margin: '0 !important'}}>My Animated Introduction video: <br/> <a href="https://youtu.be/OsT4BMQAtjI" target="_blank" rel="noreferrer">https://youtu.be/OsT4BMQAtjI</a></p>
          <p style={{margin: '0 !important'}}>My animation demo reel: <br/> <a href="https://youtu.be/GpP2TNIqmZA" target="_blank" rel="noreferrer">https://youtu.be/GpP2TNIqmZA</a></p>
        </div>
      </section>
      <section>
        <div className="container">
          <p style={{padding: "25px 0px"}}>soc med accounts</p>
          <p style={{margin: "5px 0px"}}>Facebook Account: <br/> <a href="https://www.facebook.com/benjiemmarasiganjr/" target="_blank" rel="noreferrer">https://www.facebook.com/benjiemmarasiganjr/</a></p>
          <p style={{margin: "5px 0px"}}>My Instagram Account <br/> <a href="https://www.instagram.com/benjiemarasiganjr/" target="_blank" rel="noreferrer">https://www.instagram.com/benjiemarasiganjr/</a></p>
          <div 
            style={{
              color: "#000",
              padding: '50px 0px'
            }}
          >
            <Link to="/exhibit/to-differ-digitally/">Return to previous page &gt;</Link>
          </div>
        </div>
      </section>
    </main>
  )
}