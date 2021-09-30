import { useEffect } from "react"
import {Link} from "react-router-dom"

export default function MgaMata() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <main id="tdd2" className="template">
      <div className="container">
        <div class="sketchfab-embed-wrapper" dangerouslySetInnerHTML={{ __html: '<iframe title="Mga di nakikita ng mata" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cba919a215af447aaaedc489552033ff/embed"> </iframe>'}} />
        
        <h1 className="title glow">"MGA ‘DI NAKIKITA NG MATA"</h1>
        <h3 className="author glow">YOLEC HOMICILLO</h3>
        <p style={{textAlign: 'center'}}><em>“Mga ‘Di Nakikita ng Mata’ is an immersive illustration that aims to show <br/> the unseen experiences we faced during the online learning setup. We met people through our <br/>screens, zoom meetings, chats, and emails yet we failed <br/> to empathize with them.”</em></p>
      </div>
      <section>
        <div className="container">
          <p>The transition to online learning amidst the pandemic was challenging for everyone. It came as a surprise and gave us the teachers a short amount of time to absorb and learn how to teach in the online mode. Students were expected to possess a conducive online learning environment even though having a decent internet connection was already a challenge. Everyone was exhausted, frustrated, and hurt. </p>
          <p>Because of this, the idea of empathizing with others was overlooked. I always checked the social media feeds of my students, peers, and co-teachers and tried to understand what they felt. During the early months of the pandemic, I saw posts that were full of hate, teachers hating on their students and students hating on their teachers. Everyone forgot to empathize with one another. We failed to realize that we were in the same storm but not in the same boat. This fueled my idea for my artwork. Luckily, To Differ Digitally 2 became a medium with which I can share it with people.</p>
          <p>Mga ‘Di Nakikita ng Mata is an immersive illustration that aims to show the unseen experiences we faced during the online learning setup. We met people through our screens, zoom meetings, chats, and emails yet failed to empathize with them. With this piece, I was hoping to spark a little empathy in the hearts of the audience. The more they immerse themselves and explore the virtual world I created, the more they will empathize with the characters and their experiences. I hope that this empathy will translate to the people they meet, talk to, and interact with online.</p>
          <p>The artwork was painted using Oculus Quill VR rendered through 3D software and uploaded on an online 3D Viewer. I used Sketchfab online 3D viewer so that the audience can freely explore the different angles of the artwork. Since my message revolves around empathy, I’ve decided that the audience be the ones to start empathizing with the characters. By using a 3D viewer, they can choose how to immerse themselves in the artwork, with the characters, and seeing the bigger picture. Sometimes to understand a person, you need to look at their background.</p>
          <p>Working on this artwork allowed me to release what I felt inside. It made everything lighter and more bearable. I was able to look back on my experiences and remind myself to empathize with the people around me. I learned a lot from this experience and I hope that the audience, as they immerse themselves in the illustration, learn a lot from it as well. </p>
          <p>Yo Homecillo is a Filipino-born motion graphics artist. He uses motion graphics to tell stories from life; and, with a hopeful heart, wishes to open the minds of the people with his art. He believes that art and animation are great tools for disseminating information, telling stories, and sharing experiences with people. Yo took AB-Multimedia Arts at De La Salle-College of Saint Benilde as his undergraduate degree. Soon after, He finished his postgraduate degree in MA in Fine Arts and Design at Philippine Women's University. He works as a Full-time faculty at De La Salle-College of Saint Benilde Animation department teaching motion graphics, virtual reality, and thesis. </p>
          <p>You may reach him through the following social media:</p>
          <p><a href="https://www.behance.net/yohomecillo" target="_blank" rel="noreferrer">https://www.behance.net/yohomecillo</a><br/><a href="https://www.facebook.com/yomotiondesign" target="_blank" rel="noreferrer">https://www.facebook.com/yomotiondesign</a><br/><a href="https://www.instagram.com/yomotiondesign" target="_blank" rel="noreferrer">https://www.instagram.com/yomotiondesign</a></p>
          <div 
            style={{
              color: "#000",
              padding: '50px 0px'
            }}
          >
            <Link to="/exhibit/to-differ-digitally/">RETURN TO PREVIOUS PAGE &gt;</Link>
          </div>
        </div>
      </section>
    </main>
  )
}