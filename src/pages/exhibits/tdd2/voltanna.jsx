import { useEffect } from "react"
import {Link} from "react-router-dom"
import Voltanna360 from "../../../assets/images/Voltanna360.jpg"
import VoltannaBanner from "../../../assets/images/VoltannaBanner.jpg";
import Voltanna1 from "../../../assets/images/Voltanna1.jpg"
import Voltanna2 from "../../../assets/images/Voltanna2.jpg"
import VoltannaBanner2 from "../../../assets/images/VoltannaBanner2.jpg"

export default function Voltanna() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <main id="tdd2" className="template leni">
      <div className="container">
        <div>
          <img src={Voltanna360} alt="" style={{width: '100%'}} />
        </div>
        <h1 className="title glow" style={{fontSize: "clamp(1rem, 3vw, 12vw)"}}>“ACTION SERIES: FRONTLINER HEROES FEATURING VOLTANNA”</h1>
        <h3 className="author glow">VOLTY GARCIA AND HANNAH SISON</h3>
        <p style={{textAlign: 'center' }}><em>“Most have been asking what the current leadership can do for us in this pandemic but there are things we can do ourselves to improve our current situation. We need to step up and do our part as citizens by doing our best to become better versions of ourselves and doing ordinary things extraordinarily well.” - Volty Garcia</em></p>
      </div>
      <section>
        <div className="container">
          <p>”ACTION SERIES: FRONTLINER HEROES FEATURING VOLTANNA” is a series of 3D rendered images by Volty Garcia and Hannah Sison as Voltanna,  showing ordinary people being heroes in the pandemic.</p>
          <img src={VoltannaBanner} alt="" style={{width: '100%'}} />
          <p><strong>Description</strong> <br/> <em>Why did you do the work, what is your intention/objective? </em> <br/> initially to improve my 3D modeling skills by creating a 3D likeness model of a real person. Secondly, to show in a series of images how ordinary people can be heroes in this pandemic despite the hardships and challenges by doing ordinary things extraordinarily well.</p>
          <p><em>When and where was the project started?</em> <br/> I started during the initial pandemic lockdowns at home, in front of my PC.</p>
          <p><em>Was this a part of a series or a show?</em> <br/> It is a personal work in collaboration with Hannah Sison and then we decided to include the work in TDD2. </p>
          <p><em>What was the feeling while doing it?</em> <br/> It was a challenge and there was pressure to make the likeness model look like the real person.</p>
          <div className="flex">
            <div>
              <img src={Voltanna1} alt="" style={{width: '100%', padding: '24px'}} />
            </div>
            <div>
              <img src={Voltanna2} alt="" style={{width: '100%', padding: '24px'}} />
            </div>
          </div>
          <p><em>What was the process in making the project?</em><br/>I asked for a lot of reference photos from Hannah Sison. Modeled her face first in 3dss Max. Used different programs to rig and pose the digital double. Also used photogrammetry to conform and verify my initial 3d model.</p>
          <p><em>Acknowledgements, if any?</em> <br/> Hannah Sison for being the likeness model and always supporting Voltanna.</p>
          <p><em>A message to the viewers?</em> <br/> The simplest definition of "government" is the system of a group of people in an organized society or community. So if we complain much about our current government then are we also to blame? A famous leader once said this:</p>
          <p><em>"ask not what the government can do for you but ask what you can do for the government"</em></p>
          <p>Most have been asking what the current leadership can do for us in this pandemic but there are a lot of things we can do ourselves to improve our current situation. </p>
          <p>We all need to step up and do our part as citizens by doing our best to become better versions of ourselves and doing ordinary things extraordinarily well. </p>
          <div>
            <img src={VoltannaBanner2} alt="" width="100%" />
          </div>
          <p><strong>Bio</strong><br/>I am an experienced 3D Generalist with 20 years of experience specializing in Design and Product Visualization for Architecture, Interior Design, Industrial Design, and Ecommerce companies from the USA and Europe. My goal is to elevate the local 3D industry pricing to international standards because there are very talented 3D artists that deserve more than they are actually paid locally. I teach and share what I have learned from my experience to upcoming 3d artists so that when they join the industry, they have the potential and capacity to earn a prosperous career in the 3D industry.</p>
          <p><a href="www.marvoldigital.com">www.marvoldigital.com</a></p>
          <p>Social Media Accounts: <br/>
            <a href="https://www.instagram.com/mastervolty/?hl=en">https://www.instagram.com/mastervolty/?hl=en</a>
            <a href="https://www.facebook.com/voltygarcia/">https://www.facebook.com/voltygarcia/</a>
            <a href="https://www.linkedin.com/in/arch-john-voltaire-garcia-91409a4b/">https://www.linkedin.com/in/arch-john-voltaire-garcia-91409a4b/</a>
          </p>
          <p>In collaboration with Hannah Sison: <br/>
            <a href="https://www.instagram.com/iamvoltanna/?hl=en  ">https://www.instagram.com/iamvoltanna/?hl=en  </a>
            <a href="https://www.facebook.com/iamvoltanna">https://www.facebook.com/iamvoltanna</a>
          </p>
          <Link to="/exhibit/to-differ-digitally/">Return to previous page &gt;</Link>
        </div>
      </section>
    </main>
  )
}