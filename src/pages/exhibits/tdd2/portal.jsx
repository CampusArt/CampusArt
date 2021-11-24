import { useEffect } from "react"
import Youtube from "react-youtube";
import {Link} from "react-router-dom"
import PortalPoster from "../../../assets/images/PortalPoster.jpg"
import PortalBanner from "../../../assets/images/PortalBanner.jpg"
import portal1 from "../../../assets/images/portal1.jpg"
import portal2 from "../../../assets/images/portal2.jpg"

export default function Portal() {

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
    <main id="tdd2" className="template leni">
      <div className="container">
        <Youtube
          videoId="s6oTM2sR1VI"
          opts={opts}
        />
        <h1 className="title glow">“PORTAL”</h1>
        <h3 className="author glow">HANNAH SISON</h3>
        <p style={{textAlign: 'center' }}><em>“The story through its hidden meanings and symbolism also aims to open our eyes to the darkness and the love during this pandemic. And that despite our physical isolation, we can still be together in our own world.”</em></p>
      </div>
      <section>
        <div className="container">
          <p>“Portals” is an allegory with its narrative inspired from the isolation, the danger, and the anxieties we face during this pandemic. Media has been our mirror to the outside world—seeing the atrocities, being jealous of those who have it better, seeing deaths, but at the same time, it is also our portal and space to be together with loved ones and our last time to be with those who depart. It is also a portal to learn from each other and reach out to people. Set in an imaginary kingdom in virtual space—a space that we also share and travel too everyday.</p>
          <div className="flex">
            <div>
              <img src={portal1} alt="" style={{padding: '24px', width: '100%'}} />
            </div>
            <div>
              <img src={portal2} alt="" style={{padding: '24px', width: '100%'}} />
            </div>
          </div>
          <p>Portals, hopefully can become a series, if time and efforts persist. But it is one part for now. What was supposedly a series of intricate drawings, turned out to be more simple illustrations with added music and little animation because hopefully, the story will be best shown that way. </p>
          <p>The covid pandemic has affected my family, hence doing this project felt very persona to me. Challenging because of time, energy, and some limitations in knowledge,yet learning never stops.</p>
          <div className="flex">
            <div style={{flex: '1'}}>
              <img src={PortalPoster} alt="" style={{padding: '24px', width: '100%'}} />
            </div>
            <div style={{flex: '2'}}>
              <p>I Would like to acknowledge CCA, Sir Gerry Torres, Ms Karen Flores, Ms Aena, for making this possible. Eli Guieb III, my Phd professor for making me understand the virtual and its affect. Angela Sison-Mijares for being an inspiration and also being my assistant colourist and illustrator. Jordan Santos for being an assistant illustrator as well and for the suggestions and affirmations on my work. Volty Garcia for telling me not to cram. My Family for always being an inspiration. </p>
              <p>The victims of this pandemic and the Filipinos who had to go through al of these hardships. My close friends who had undergone so much through this pandemic. And our beloved Co-faculty, one of my best friend, and brother-in-law, Mark Mijares who is with the Lord now and left a Mark on all of us.</p>
              <p>Let us all stay safe and give light to one another during these dark times.</p>
            </div>
          </div>
          <img src={PortalBanner} style={{width: '100%'}} alt="" />
          <p>Hannah Ruth Sison, is a multimedia artist and is in the academe. She took up multimedia Arts in De La Salle - College of St. Benilde, Masters of Arts in communication Major in applied Media Studies at De La Salle University. She is currently taking up her Phd in Media Studies at the University of the Philippines Diliman. Her research interests are all about the virtual, new media, and of course the nexus between media and her love for music, games, art, and more. </p>
          <p>She has been a part-time faculty in Benilde teaching MMA since 2010. She has been working as a freelance multimedia artist since 2007 and working with various brands, events, and companies. Mostly Graphic Design, Photography, and Illustration. At the same time she also does part-time Modelling on the side. Basically, she is a part-timer. But her dream is to do no work, sleep and just play music, make art, and play games. </p>
          <p>You can find her in</p>
          <p>Instagram <a href="https://instagram.com/hannahruthsison">@hannahruthsison</a> <br/>
          Facebook <a href="https://facebook.com/haruth">facebook.com/haruth</a> <br/>
          Tiktok <a href="https://tiktok.com/@hannahruthsison">@hannahsison</a> <br/>
          Twitter <a href="https://twitter.com/hannahsison">@hannahsison</a> <br/>
          LinkedIn <a href="https://linkedin.com/hannahruthsison">hannahruthsison</a> <br/>
          IG <a href="https://instagram.com/hannahsisonart">hannahsisonart</a> <br/>
          Behance <a href="https://www.behance.net/hannahsison">hannahsison</a></p>
          <Link to="/exhibit/to-differ-digitally/">Return to previous page &gt;</Link>
        </div>
      </section>
    </main>
  )
}