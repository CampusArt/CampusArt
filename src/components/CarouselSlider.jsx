import Slider from "react-slick";

export default function CarouselSlider({data}) {
  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    className: "sliderReact"
  }
  return (
    <div className="reactCarousel">
      <Slider {...settings}>
        {data.map((photo, index) => {
          return(
            <div key={index}>
              <img src={photo.link} width="100%" alt="" />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}