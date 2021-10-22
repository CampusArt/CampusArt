
import {useEffect} from "react";
import {Link } from "react-router-dom"
import YouTube from "react-youtube";

export default function ExhibitBrief() {
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
  const opts2 = {
    height: '400px',
    width: '100%', 
    playerVars: {
      autoplay: false
    }
  }

  return (
    <main id="musicxart">
      <section id="exhibit-brief">
        <div className="container">
          <YouTube
            videoId="p4nWsCK798E"
            opts={opts}
          />
          <p>For the artwork assigned to me, I had initially visualized this as something more ominous or evil sounding because of how the masks looked. But after being given the description and context from the artist’s descriptions, I had thought of the artwork as something more, spiritual and ethereal. According to Zeus Bascon, the images for this work were inspired from an excerpt of Khavn De La Cruz’s film which showed a terminal of lost souls leading into a portal. From these short descriptions, I was able to come up with a concept for my music. </p>
          <p>My personal concept was to create something spiritual and ethereal that reflects the atmosphere of going into the afterlife. For the instrumentation, I chose instruments like the piano, synthesizer, violin, and cello since I find these instruments to be my personal favorites when it comes to expressive performances. As for the mask, I had an idea to use a woodwind instrument to represent this. Instead of going with a regular one however, I decided to go with a crystal flute, as the sound for me has a more ethereal timbre to it. And lastly, I used a women’s choir as it gave a religious and divine impression, something that I personally wanted to add for the atmosphere of the afterlife. </p>
          <p>The way that I arranged the piece was sort of to tell a story in the process. The introduction of the piece was to establish the setting. The next section, which I’ll call the “verse”, is used to represent the lost souls wandering around aimlessly. As a response to this, I arranged the next section, which I will call the “pre-chorus”, in a slow crescendo manner, as an illustration of the ascension towards the afterlife. This section leads to the “chorus” of the piece, where the joining of souls and the afterlife is signified. Finally, the piece ends with a calm arrangement, to show that the souls are finally at rest. </p>
          <p>To be honest, I wasn’t that sure if my interpretation completely matches the intention of the original art. My idea was to write a song in a minor key as I felt that this matched the theme of death, which is truly a sorrowful and heavy topic. However, using the theme of death while also intending to create something ethereal/divine ended up with a very ambiguous, melancholic type of composition. I hope that my piece will express the emotions and themes that I truly intend to convey.
          </p>
          <p className="glow" style={{textAlign:"right"}}>&bull; Daniel Carlos</p>
          <h1 style={{textAlign: "center",fontWeight: "500"}}>COMING SOON</h1>
          <div className="flex" style={{padding: '21px 0px', margin: '24px 0px', justifyContent: 'center'}}>
            <div style={{flex: '1', padding: '0px 5px'}}>
              <YouTube videoId="9sso-fGW2Rs" opts={opts2}/>
            </div>
            <div style={{flex: '1', padding: '0px 21px'}}>
              <YouTube videoId="7DZXWptw4eo" opts={opts2}/>
            </div>
          </div>
          <Link to="/" style={{textDecoration: "none", color: "#000"}}>RETURN TO HOMEPAGE</Link>
        </div>
      </section>
    </main>
  )
}