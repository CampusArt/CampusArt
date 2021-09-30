import CarouselSlider from "../../../components/CarouselSlider"
import YouTube from "react-youtube"
import {Link} from "react-router-dom"

export default function ManilaMania() {
  const data = [
    {link: "https://i.ibb.co/b5kwQ0r/Soriano-Map01.jpg"},
    {link: "https://i.ibb.co/v1TbHVR/Soriano-Map02.jpg"},
    {link: "https://i.ibb.co/D7X9myH/Soriano-Map03.jpg"},
    {link: "https://i.ibb.co/FY6dt8T/Soriano-Map04.jpg"}
  ]
  const opts = {
    height: '840px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <main id="taft" className="alfspot">
      <div className="container">
        <YouTube videoId="7wOGlalya8g" opts={opts} />
        <section id="about">
          <h1>MANILA MANIA</h1>
          <p>by Gerome Soriano</p>
        </section>
        <section>
          <p style={{textAlign: 'center', margin: '50px 0px'}}><em>“With no intention of making art (I always bring a camera,) I witnessed the situation on the ground. <br/> To be honest, after seeing it and watching all the news, I hate that people are not taking it seriously, <br/> not wearing masks outside, and still going around jogging.”</em></p>
        </section>
        <section>
          <p>My video is about Day 6 of the March 2020 lockdown of Metro Manila,  which eventually included Luzon, then major cities in the Philippines, and around the world. </p>
          <p>It is about me wanting to know about this COVID-19 virus, seeing the picture from social media and news. That it started in China, that the Chinese Communist Party covered it up just like what they did with SARS, that the WHO director might be corrupted or that maybe he got stuck between a rock and a hard place and had to be diplomatic with China so that they will keep sharing the information they have, that the virus came from a wild animal market (the type they had to shut down after SARS but re-legalized again because it's a big market and people in China really use that kind of traditional medicinev</p>
          <CarouselSlider data={data} />
          <p>(It got me thinking about how colonizers would usually disregard indigenous practices because of science ((insert Jesse Breaking Bad meme.)) That maybe there can be guidelines on which indigenous practices should be taken seriously and which to take with a grain of salt, like eating seal penis as aphrodisiac vs the visible effect of viagra. Or maybe calling out China to ban those kinds of markets (but then again if the market is strong, it will just turn underground with guns, gangs, and violence, like the war on drugs.) I think of the kind of love and care that can be given to the traditional-medicine-loving people of China so they will be more careful and sanitary with their markets and wild animals. It's a macro view and it's anxiety-inducing, so I reckon I’d go stack up on canned goods cause this lockdown might get worse and it might be harder to do it later. </p>
          <p>
          With no intention of making art (I always bring a camera,) I witnessed the situation on the ground. To be honest, after seeing it and watching all the news, I hate that people are not taking it seriously, not wearing masks outside, still going around jogging. But it's much stricter now. As of this writing, an enhanced community quarantine was enacted and only one person in a household can go out to get food and stuff. When walking our dog too far from our house, I got reprimanded by local patrols. I guess it's for the better. There's a lot of doom and gloom forecasts of what could happen so I'm trying to temper my expectations and work on what I can while stuck at home.
          </p>
          <p style={{fontWeight: '400'}}>Bio</p>
          <p>Gerome Soriano (b. 1990) is a visual artist who lives in Manila, Philippines. He works mostly with photographs, videos and zines using daily activities and everyday objects as take-off points to tell stories about contemporary issues, history, and ideas. </p>
          <p>Born November 28, 1990 <br/>Graduate of University of Santo Tomas-College of Fine Arts and Design, Major in Advertising Arts,<br/>March 2012</p>
          <p><span style={{fontWeight: '400'}}>Social media accounts </span></p>
          <p><a href="https://geromesoriano.blogspot.com">geromesoriano.blogspot.com</a></p>
          <p><a href="https://www.instagram.com/geromesoriaknow">https://www.instagram.com/geromesoriaknow</a></p>
          <Link to="/exhibit/taft-and-the-burnham-plan/manila-lockdown/" style={{fontSize: '21px', textDecoration: 'underline'}}><p>Return to previous page</p></Link>
        </section>
      </div>
    </main>
  )
}