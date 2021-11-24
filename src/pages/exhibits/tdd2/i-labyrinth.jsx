import { useEffect } from "react"
import Youtube from "react-youtube";
import {Link} from "react-router-dom"
import LabPoster from "../../../assets/images/LabPoster.jpg"
import Lab1 from "../../../assets/images/Labyrinth-1.jpg"
import Lab2 from "../../../assets/images/Labyrinth-2.jpg"

export default function ILabyrinth() {

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
          videoId="OaC0XsjlROw"
          opts={opts}
        />
        <h1 className="title glow">“I, LABYRINTH”</h1>
        <h3 className="author glow">JAG GARCIA</h3>
        <p style={{textAlign: 'center' }}><em>“If we consider that a labyrinth is an ancient spiritual exercise for mediation, prayer, and contemplation, this film project was that for me. It was a chance to focus, to consider, to get – and stay – on a path towards a center.  It was a journey of discovery, introspection, and realization.”</em></p>
      </div>
      <section>
        <div className="container">
          <p><strong>Synopsis</strong> <br/>The Pilgrim finds himself faceless in the crowd. The city is noisy, the world is chaotic… he wanders. His wandering brings him to a labyrinth. Labyrinths are an ancient spiritual exercise used for meditation, prayer, and contemplation; but unlike a maze, it has only one path that leads towards the center. Reaching the center of the labyrinth is a journey around the labyrinth itself.</p>
          <p>I, Labyrinth is The Pilgrim's journey to the center. Within is a mystery that beckons. Within may be an answer to his questions. </p>
          <p>Inside he will face challenges, distractions on his path to the center. He will confront stifling Normalcy, resist the need to please Others, and struggle against Perfection and his sense of Self.</p>
          <p>I, Labyrinth is not just about The Pilgrim's journey to find himself. It is also the story of finding ourselves.</p>
          <p style={{textAlign: 'center'}}><strong><em>“In order to love who you are, you cannot shape the experiences that shape you”</em> – Andrea Dykstra</strong></p>
          <p><strong>Director's Note</strong> <br/>This project was born when I was teaching an elective in basic video production for non-film students. Evonne Limsui, an architecture student enrolled in the class reached out to me – “Sir, I don’t know who else to ask but…”. She was entering a silent book competition and did not have anyone around her to consult with regarding the story, its structure, or how to communicate the narrative visually and without words.</p>
          <p>She presented me with a simple story, but one rich in meaning and metaphor. She showed me her concept art as well, and from that point I was hooked – aside from helping her with the book competition, I asked if we could collaborate to turn the story into an animated film. She agreed!</p>
          <p>Fast-forward to the early part of 2021, sadly the book did not win at the competition, but we took this as a sign that there was no longer any legal (or moral, or technical) hindrance to proceeding with the film.</p>
          <p>I wrote the screenplay (for a silent film) in April of 2021, and Evonne sent me her art materials in May and I began the animation process. It was in June of 2021 that the Center for Campus Art made a call for proposals for the To Differ Digitally 2 Exhibition, and I, Labyrinth was a work I felt would resonate with the theme. On a separate note, I also hoped that by being accepted into the Show, I would have a solid motivation to finish the film within a reasonable timeframe.</p>
          <p>Over the next few months the film became a more intensive experience than I had figured. While I had planned from the beginning to leverage on Adobe After Effects as the primary development platform, it had been many years since I’d last used it, and I have never had to work on it as extensively as the film required. In developing the film I learned functions and techniques that I’d never heard of before; I was forced to explore the platform’s functionality to achieve the effects I envisioned for the film.</p>
          <div className="flex">
            <div>
              <img src={Lab1} alt="" style={{padding: '24px', width: '100%'}} />
            </div>
            <div>
              <img src={Lab2} alt="" style={{padding: '24px', width: '100%'}} />
            </div>
          </div>
          <p>Throughout the process I gained a greater degree of respect for people that work in animation. It was not so much the physical labor involved, as it was the tedium, the minutiae, the attention to detail, and how future plans and effects were incredibly dependent on how raw and initial artworks were prepared.</p>
          <p>One thing that was an enlightenment, as well as a cross to bear, was the nature of animation itself. In an animated film there was absolute freedom to create anything that needed to exist. There were no limitations, no physics, no realities to contend with. If you needed something to move, you moved it, if you needed something to fly a certain way, you made it fly a certain way.</p>
          <p>But this was also a double-edged sword… There were no excuses! Since I created the world, everything in it, or not in it, was my doing. If I needed a particular shot to communicate something, I had the means to create the shot… There was no hiding behind excuses such as “it was a bad take”, “I had the wrong lens”, or even “we forgot to shoot a close up”. If I needed a close up, I had to create the close up.</p>
          <p>If we consider that a labyrinth is an ancient spiritual exercise for mediation, prayer, and contemplation, this film project was that for me. It was a chance to focus, to consider, to get – and stay – on a path towards a center.  It was a journey of discovery, introspection, and realization.</p>
          <div className="flex">
            <div style={{flex: '1'}}>
              <img src={LabPoster} alt="" style={{padding: '24px', width: '100%'}} />
            </div>
            <div style={{flex: '2'}}>
              <p>I’m writing this after I’ve just sent my revision notes to my musical scorer and sound design team. I look back at a process that began just 6 months ago yet feels like it’s all I’ve been doing for over a year. It’s surreal to be this close to completion.</p>
              <p>I, Labyrinth would not have been possible without the amazing help of my small team that took up the cause on the premise of some art and a rough cut: my assistant directors Trixie Vertera and Justine Garcia, my editor Anya Fajardo, my sound design boys Xyron Parapara and Tyrone Luanzon, the amazing Tala Gil who did the score, and of course, Evonne Limsui whose original idea put me on the path of the labyrinth.</p>
              <p>I, Labyrinth is dedicated to my girls who have been nothing but supportive of this endeavor.</p>
              <p>To the viewer: We live in a time when “self-love” has become a matter of personal achievement for many among us; ironically though, many of us “find” self-love in what society defines for us as self-love. We engage in actions, tasks, people, and thoughts that are supposed to tell us that we love ourselves… even if, ultimately, we still don’t. This film is about finding yourself despite what society tells you who or what you are supposed to be. Walk your path, discover yourself, know that loving yourself means loving all of you and what makes you, you.</p>
            </div>
          </div>
          <p><strong>BIO</strong> <br/>Jag Garcia began professional media work during his sophomore year in college and has since spent 30 years in various fields of the media industry. Has been teaching with the De La Salle-College of Saint Benilde for 20 years where he was, among other things, the Founder and former Chairperson of the Digital Filmmaking Program.</p>
          <p>He has a Bachelor’s Degree in Communication Arts, is a candidate for a Master’s Degree in Communication Major in Applied Media Studies from De La Salle University, and he’s a recipient of the Senior Artist for Asia Fellowship at the University of New South Wales in Sydney where he earned a Masters in Cross Disciplinary Art &amp; Design.</p>
          <p>Jag Garcia is the author of The Media Kit: A Frame-by-Frame Guide to Visual Production, a contributor to The Encyclopedia of Philippine Art, a developer of DepEd and TESDA curricula for Media Arts, a corporate trainer, and an avid underwater photographer.</p>
          <p>I, Labyrinth is his first animated film.</p>
          <p>You may reach him through the following Social Media:</p>
          <p>FB: <a href="https://facebook.com/jaggarcia.official">@jaggarcia.official</a> <br/> IG: <a href="https://instagram.com/thejaggarcia">@thejaggarcia</a> <br/> TW: <a href="https://twitter.com/jaggarcia">@jaggarcia</a> <br/> FB: <a href="https://facebook.com/anemonepictures">@anemonepictures</a></p>
          <Link to="/exhibit/to-differ-digitally/">Return to previous page &gt;</Link>
        </div>
      </section>
    </main>
  )
}