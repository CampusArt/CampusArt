import React, {useState, useEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import { Link } from "react-router-dom"
import {
  useViewportScroll,
  AnimatePresence, 
  useTransform,
  motion
} from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Components
import Loader from "../components/Loader";
import AnimatedCharacters from "../components/AnimatedText";
import Banners from "../data";

// Assets
import topScreenPic from "../assets/images/TopScreenPic.jpg"

export default function Homepage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ?  document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove('loading');
  }, [loading])


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },4000)
  }, [loading]);


  const wrapper = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const landingParagraph = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  }

  // Titles
  const title = [
    {type: "paragraph", text: "DE LA SALLE-COLLEGE OF SAINT BENILDE"},
    {type: "heading1", text: "CENTER"},
    {type: "heading1", text: "FOR" },
    {type: "heading1", text: "CAMPUS ART"}
  ];

  // Parallax
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 1080], [0, 300]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // GSAP
  useEffect(() => {
    window.addEventListener("resize", () => ScrollTrigger.refresh());
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange, DOMContentLoaded, load"
    });

    if(!loading) {
      ScrollTrigger.matchMedia({

        // Desktop
        "(min-width: 812px)": () => {
          gsap.to("#banner-wrapper .banner-details", {
            scrollTrigger: {
              scroller: document.body,
              trigger: "#featured-exhibits",
              end: "center center",
              scrub: true,
              invalidateOnRefresh: true,
              // markers: true,
            },
            y: "-300px",
            ease: "none"
          });
          
          gsap.to("#banner-wrapper .banner h1", {
            scrollTrigger: {
              scroller: document.body,
              trigger: "#featured-exhibits",
              end: "bottom bottom",
              scrub: true,
              invalidateOnRefresh: true,
              // markers: true
            },
            y: "350px",
            ease: "none"
          });

          gsap.to("#banner-wrapper .banner .banner-bg", {
            backgroundPosition: "50% 100%",
            ease: "easeIn",
            scrollTrigger: {
              trigger: "#featured-exhibits",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          })
        },
        "all": () => {
          // Kill it
        }
      })
    }
  }, [loading])
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.main
          id="homepage"
        >
          {/* React Helmet */}
          <HelmetProvider>
            <Helmet>
              <meta name="title" content="Center for Campus Art | Art &amp; Design Installations and exhibits of De La Salle-College of Saint Benilde" />
              <title>Center for Campus Art &mdash; The official De La Salle-College of Saint Benilde</title>
            </Helmet>
          </HelmetProvider>
          <div className="container">
            <div className="grid">

              <section id="landing">
                <motion.div
                  id="main-title"
                  initial="hidden"
                  // animate="visible"
                  animate={loading ? "hidden" : "visible"}
                  variants={wrapper}
                  style={{
                    y: y2
                  }}
                >
                  <div style={{paddingRight: "10px"}}>
                    {
                      title.map((item, index) => {
                        return <AnimatedCharacters {...item} key={index} />;
                      })
                    }
                  </div>
                </motion.div>
                <motion.div
                  id="about-landing"
                  variants={landingParagraph}
                  initial="hidden"
                  animate="visible"
                >
                  <p>The Center for Campus Art / CCA explores the intersections of art, design, society, communities, and the environment through exhibitions. The CCA operates under the Office of the President of the De La Salle-College of Saint Benilde, Manila, Philippines and is headed by Ar Gerry Torres as Director and Curator.</p>
                </motion.div>
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    position: 'absolute',
                  }}
                >
                  
                  {/* <motion.div
                    id="topscreenPic"
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0, transition: {delay: 2}}}
                    style={{
                      y: y1,
                      zIndex: '0',
                      isolation: "isolate"
                    }}
                  >
                  </motion.div> */}
                  <motion.img
                    id="topscreenPic"
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0, transition: {delay: 2}}}
                    src={topScreenPic}
                    alt=""
                    style={{
                      y: y1,
                      isolation: "isolate"
                    }}
                  />
                </motion.div>
              </section>
              <section id="featured-exhibits">
                <div className="wrapper">
                  <div className="title flex">
                    <h1>EXHIBITS<br/>2021</h1>
                    <p>Upcoming exhibits this coming September</p>
                  </div>
                  <div id="banner-wrapper">
                    <div style={{position: 'relative'}}>
                      {
                        Banners.map((banner) => {
                          return (
                            <div
                              key={banner.id}
                              className="banner"
                            >
                              <div className="banner-content">
                                <h1
                                  style={{
                                    y: y1,
                                  }}
                                  dangerouslySetInnerHTML={{__html: banner.title}}
                                />
                                <Link to={`/exhibit/${banner.id}`}>
                                  <div 
                                    className="banner-bg"
                                    style={{
                                      backgroundImage: `url(${banner.banner})`
                                    }}
                                  ></div>
                                </Link>
                                <div className="banner-details">
                                  <p className="banner-date">{banner.date}</p>
                                  <p className="banner-description">{banner.description}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </section>
              {/* <section></section> */}
            </div>
          </div>
        </motion.main>
      )
    }
  </AnimatePresence>
  )
}