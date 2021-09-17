import CarouselSlider from "../../../components/Slider";
import image from "../../../assets/images/whitecity7.jpg";
import { Link, useHistory } from "react-router-dom";

export default function Alfspot() {
  let history = useHistory()
  return (
    <main id="taft" className="alfspot">
      <div className="container">
        <CarouselSlider />
        <section id="about">
          <h1>ALFSPOT QUARANTINE PROJECT</h1>
          <p>by TJ Aquino</p>
        </section>
        <section>
          <p><em>"It's lockdown again, how can I skate?"</em></p>
          <p>It all started with a thought, "lockdown nanaman, paano ako makakapag laro nito?" ("its lockdown again, how can I skate?")</p>
          <p>I saw stories on FB of skaters getting kicked out by the police / barangay tanods from their skate spot. It made me think "swerte ng mga tao dito sa amin sa Taguig buti na lang andyan si Sir Alf pati yung bowl niya” (the people in Taguig are lucky, good thing Sir Alf is there.) When Margielyn Didal got into the Tokyo Olympics and landed 7th place, it was a proud moment for a skater like me. Most of the skaters in the country play in the streets, you're lucky if you know someone who will let you skate on their property. The goal of my project was to send a message to the Philippine government that skaters need a safe place to skate-in. Please lang, puro kayo basketball court, baka naman! (Please, build skateparks not just basketball courts!) </p>
        </section>
        <img src={image} alt="" width="100%" />
        <p>The series started in March 2021 at Alfspot in Tipas, Taguig City. When you say Tipas, the first thing you'll think of is their famous Tipas hopia (a Chinese pastry) made around the area, little do they know there's a thriving skateboarding community at Brgy. Ligid-Tipas. Since 2012, Alfspot has been catering to skateboarders and skateboard enthusiasts from all ages and backgrounds. I feel great doing this series because I'm photographing the community where I started getting serious with photography. Looking at it now makes me miss the pre-pandemic sessions wherein a day at Alfspot seems to be a party because the bowl is full of skaters just having fun.
        </p>
        <p>I want to dedicate this exhibit to all Filipino skaters. Sir Alfie Arguelles thank you for always welcoming skaters at your place, there was never a dull moment there; Dondon Belano many thanks for your advice back in college; I wouldn't reach this moment if I didn’t listen to your advice, "ang skateboard andyan lang yan, unahin mo muna pag-aaral mo" (your skateboard is just on the side, it can wait. Finish your studies first.) Sir Jay Javier, for being open to answering my photography related questions and the guidance. I would like to acknowledge Pedro Santos, Sir Veejay Villafranca, Ms. Orange Omengan, Ms. Ria Torrente, Ms. Kat Bayaban and all the skaters out there. Mask on, stay safe! 
        </p>
        <p style={{fontWeight: '400'}}>Bio</p>
        <p><span style={{fontWeight: '400'}}>TJ Aquino</span> (b.1995) is an artist and photographer based in Taguig City, Philippines. He earned his Bachelor of Arts in Multimedia Arts (AB-MMA) from De La Salle – College of Saint Benilde (2018). He is mainly focused on capturing the skateboarding scene in the Metro and uses chemical based medium for his photographs. In 2016, he did several exhibitions in his alma mater under Kazuo Sumida and participated in the “Moscow International Foto Award: One shot, One Minute” (2018.) Recently, he was part of “Exclusive Access to New Works” (2021) by Ysobel Art Gallery in Taguig City. </p>
        <p><span style={{fontWeight: '400'}}>Social media accounts </span></p>
        <p>FB: <a href="www.facebook.com/TadjoPhoto ">www.facebook.com/TadjoPhoto </a></p>
        <p>IG: <a href="www.instagram.com/tjaquino_ ">www.instagram.com/tjaquino_</a></p>
        <p>Next: Manila Mania by Gerome Soriano</p>
        <Link to="/exhibit/taft-and-the-burnham-plan/manila-lockdown/" style={{fontSize: '21px', textDecoration: 'underline'}}><p>Return to previous page</p></Link>
      </div>
      
      <section id="exhibits">
        <div className="flex container navBoxes">
          <div
            onClick={() => {
              window.scrollTo(0,0);
            }}
          >
            <div>
              <h3>Back to top</h3>
            </div>
          </div>
          <div 
            onClick={() => {
              history.push('/exhibit/taft-and-the-burnham-plan/manila-lockdown')
            }}
          >
            <div>
              <h3>Manila Lockdown</h3>
              <p>Sprawling, unwieldy, undefinable; here are glimpses of the city under lockdown</p>
            </div>
          </div>
          <div
            onClick={() => {
              history.push('/exhibit/taft-and-the-burnham-plan/manila-reimagined')
            }}
          >
            <div>
              <h3>Manila Reimagined</h3>
              <p>Benilde architecture students propose visions of a gentler city, guided by the spirit  of the Burnham plan and their mentor, Ar Jim Caumeron</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}