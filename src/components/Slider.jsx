import Slider from "react-slick";

// Assets
import one from "../assets/carousel-images/1.jpg";
import two from "../assets/carousel-images/2.jpg";
import three from "../assets/carousel-images/3.jpg";
import four from "../assets/carousel-images/4.jpg";
import five from "../assets/carousel-images/5.jpg";
// import six from "../assets/images/6.jpg";
import seven from "../assets/carousel-images/7.jpg";
import eight from "../assets/carousel-images/8.jpg";
import nine from "../assets/carousel-images/9.jpg";
import ten from "../assets/carousel-images/10.jpg"

export default function CarouselSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="reactCarousel">
      <Slider {...settings}>
        <div>
          <img src={one} alt="" />
          <p>Donation bottle where skaters put their donations for the spot and Sir Alf as well. Mainly his Rules on Alfspot his source of income this pandemic.</p>
        </div>
        <div>
          <img src={two} alt="" />
          <p>Rules on Alfspot.</p>
        </div>
        <div>
          <img src={three} alt="" />
          <p>Portrait of Sir Alf</p>
        </div>
        <div>
          <img src={four} alt="" />
          <p>Newcomer</p>
        </div>
        <div>
          <img src={five} alt="" />
          <p>Bail</p>
        </div>
        {/* <div>
          <img src={} alt="" />
          <p>Man Cave, this is where the locals and visitors alike hangout before the pandemic.</p>
        </div> */}
        <div>
          <img src={seven} alt="" />
          <p>Skaters from the Americas that frequently visits Alfspot to skate (L-R) Drew (USA), Lucas (Costa Rica) and, Renato (Costa Rica)</p>
        </div>
        <div>
          <img src={eight} alt="" />
          <p>Nicoyan "Baca" Concepcion, rolling around the bowl.</p>
        </div>
        <div>
          <img src={nine} alt="" />
          <p>Sandy Paredes (16 y/o) a local of Alfspot attempts to do a boneless.</p>
        </div>
        <div>
          <img src={ten} alt="" />
          <p>Kwentuhan</p>
        </div>
      </Slider>
    </div>
  )
}