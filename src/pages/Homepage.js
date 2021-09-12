import React, {useState, useEffect} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {AnimatePresence, motion} from "framer-motion"

// Components
import Loader from "../components/Loader";
import AnimatedCharacters from "../components/AnimatedText";


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
  }, [loading])


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
                  <p>The Center for Campus Art takes charge of the creative direction of Benilde through the design, curation, administration, and management of spaces and activities of the College that interface with the public. It provides creative vision and guidance to our Schools and other members of the Benildean Community in the design, selection and implementation of specific projects, productions, outreach programs, performances, exhibit shows, symposia, partnerships, and tours. The Center enhances the public areas of the three campuses of Benilde through thoughtful curation of these spaces by selecting, managing and approving appropriate shows and exhibits, art and design artefacts, exhibit and installation systems, lighting, video, sound and other media systems, graphics and curatorial text, among others. </p>
                </motion.div>
                <div
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    position: 'absolute'
                  }}
                >
                  
                  <motion.div
                    id="topscreenPic" 
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0, transition: {delay: 2}}}
                  >
                  </motion.div>
                </div>
              </section>
              
            </div>
          </div>
        </motion.main>
      )
    }
  </AnimatePresence>
  )
}