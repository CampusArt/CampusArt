
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
          <div className="flex">
            <div>
              <p>For the artwork assigned to me, I had initially visualized this as something more ominous or evil sounding because of how the masks looked. But after being given the description and context from the artist’s descriptions, I had thought of the artwork as something more, spiritual and ethereal. According to Zeus Bascon, the images for this work were inspired from an excerpt of Khavn De La Cruz’s film which showed a terminal of lost souls leading into a portal. From these short descriptions, I was able to come up with a concept for my music. </p>
              <p>My personal concept was to create something spiritual and ethereal that reflects the atmosphere of going into the afterlife. For the instrumentation, I chose instruments like the piano, synthesizer, violin, and cello since I find these instruments to be my personal favorites when it comes to expressive performances. As for the mask, I had an idea to use a woodwind instrument to represent this. Instead of going with a regular one however, I decided to go with a crystal flute, as the sound for me has a more ethereal timbre to it. And lastly, I used a women’s choir as it gave a religious and divine impression, something that I personally wanted to add for the atmosphere of the afterlife. </p>
            </div>
            <div>
              <p>The way that I arranged the piece was sort of to tell a story in the process. The introduction of the piece was to establish the setting. The next section, which I’ll call the “verse”, is used to represent the lost souls wandering around aimlessly. As a response to this, I arranged the next section, which I will call the “pre-chorus”, in a slow crescendo manner, as an illustration of the ascension towards the afterlife. This section leads to the “chorus” of the piece, where the joining of souls and the afterlife is signified. Finally, the piece ends with a calm arrangement, to show that the souls are finally at rest. </p>
              <p>To be honest, I wasn’t that sure if my interpretation completely matches the intention of the original art. My idea was to write a song in a minor key as I felt that this matched the theme of death, which is truly a sorrowful and heavy topic. However, using the theme of death while also intending to create something ethereal/divine ended up with a very ambiguous, melancholic type of composition. I hope that my piece will express the emotions and themes that I truly intend to convey.
              </p>
            </div>
          </div>
          <p className="glow" style={{textAlign:"right"}}>- Daniel Carlos <br/> AB Music Production <br/> SY. 2020 - 2021</p>
        </div>
      </section>
      <section>
        <div className="container">
          <YouTube
            videoId="ja7-jBHXLlk"
            opts={opts}
          />
          <div className="flex">
            <div>
              <p>What I realized about the artwork is how there are so much more stories of lives in the Philippines that we are not fully aware of. A lot more lives and issues that somehow does not get noticed much in the  city life. Growing up in the city, we often take necessities such as education for granted. We often not realize how privileged and blessed we are that we have a choice to go to school and to even choose a  school that we will be going to. How we can take a jeepney or take our car going to school without and  fear of the military taking over everything that we own. </p>
              <p>I realized as well how bad the situation it when it comes to the government of this country. No matter how much “threat” there could be in a community of people (proven or not proven). The  government should not say bizarre statements such as bombing the school of said community or  classifying everyone in that community as rebels or bad people. It affects the community, all the men,  women, and children involved, and it can cause division between communities. It can make other Filipinos look at these people differently because of the false accusation of the government. </p>
              <p>It makes me sad at how these things are happening in The Philippines, we are a country known  for our hospitality but towards our own people we are not. Hospitality is very hard to see right now in our  country, especially through the actions of our government. I honestly wish that what we are known for remains the same and does not fade eventually. But in the recent years, I personally think that it will fade, unless we decide to do something about it now. </p>
            </div>
            <div>
              <p>The artwork is a sigh to be experienced in real life, I had the privileged to see it personally during  pre-covid classes and I can see the work and effort that the artist put to accomplish the mural. This amount  of work can only be partnered with and even bigger meaning and purpose for the project and hopefully I can relay the same meaning and purpose in my own composition.</p>
              <p>For my composition I would like to create 3 themes or mood. Starting off with something very  light and spacious, reflecting the provincial life, something a bit major in tonality and high up in register.  Next is a heavier, tensed, possibly atonal music to represent the oppression that these Lumads are facing.  Lastly, a theme that could somehow represent hope and retaliation towards the oppressors, something simple but elegant and grand at the same time.</p>
              <p>Honestly, I was generally happy with what I did, and I hope that it is able to reflect the life of the  people being shown in the mural. The composition was very different from what I usually do, the final  composition resulted in 4 very different sections but is still connected to each other . Other than the  technicalities of things, I hope that the people who will listen to my composition would enjoy it and feel  the same way as I did when I looked at the mural and understood the meaning behind it.</p>
              <p className="glow" style={{textAlign: 'right'}}>- Benedix Jan Ayes <br/> AB Music Production <br/> SY. 2020 - 2021</p>
            </div>
          </div>
          
          <h1 style={{textAlign: "center",fontWeight: "500"}}>COMING SOON</h1>
          <div className="flex" style={{padding: '21px 0px', margin: '24px 0px', justifyContent: 'center'}}>
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