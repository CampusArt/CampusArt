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
          videoId="U9UxPwuxCVE"
          opts={opts}
        />
        <h1 className="title glow">"RED TAGGED!"</h1>
        <h3 className="author glow">JAY JAVIER</h3>
        <p style={{textAlign: 'center' }}><em>“RED TAGGED! is a satirical riposte to the utter absurdity of Red Tagging: An absurdist retort to an absurdist reality epitomized by the current administration. The slideshow is a literal definition having been red tagged - by having real red tags attached to the objects in the photographs.”</em></p>
      </div>
      <section>
        <div className="container">
          <p>The Project! is a collaboration between the MMA photography classes and I did during the last term of 2020-21. The project originated as part of their Service Learning requirements.  The SL office listed several themes for this requirement, and among these was Human Rights. This brought to mind one of the infamous events which happened during the Pandemic: the nefarious red tagging of the spontaneous, citizen-initiated Community Pantries by a paranoid and incompetent government.</p>
          <p>This collaboration involved primarily curating students' photographs of items found on the Community Pantry tables and assembling them to make a looped slideshow. The photos were shot straight-on, to show how innocuous these objects are, and how useful these objects would be to people who have long suffered from the government's mismanagement of the crisis. That by themselves, nothing on these objects, nor the community pantry itself, can be cause for red-tagging.</p>
          <p>The simplistic approach was purposely utilised to ensure that the red-taggers, who obviously are simple-minded folk, get the point immediately.  Somehow, the Communist- the very group these red taggers profess to oppose- Diktat of  Literal Realism, which discounts any ambiguity of meaning, apparently is the only form of language which they can appreciate and grasp.  American cartoonist Al Jaffee's "Snappy Answers To Stupid Questions," which ran in Mad Magazine, is also an inspiration for this project.</p>
          <p>The music used as the score for the slide show is the famed Italian Anti-Fascist song, Bella Ciao. It was the anthem of the Italian partisans fighting the fascist Axis regimes of Mussolini and Hitler in the 1940s.  The version heard here is also a collaboration: arrangement is by Gin Garcia and interpreted on the piano by Fay Dee, and recorded in Singapore. An anti-fascist song to sass up the fascists and their enablers among us.</p>
          <p>The editing was done by Christian Babista, a photographer and filmmaker.</p>
          <p>Jay Javier. Professional Photographer for 35 years. Photography Educator for 30 years. Has been with Benilde since 2010, handling Historic and Traditional Photography, and Visual Literacy related courses. Advocate of traditional Photography Processes.  Interests run from the 350 cameras in his collection to researching Philippine Photography History.</p>
          
          <Link to="/exhibit/to-differ-digitally/">Return to previous page &gt;</Link>
        </div>
      </section>
    </main>
  )
}