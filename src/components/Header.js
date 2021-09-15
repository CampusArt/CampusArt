import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom"

// Assets
import Benilde from "../assets/images/Benilde.jpg";
import CCA from "../assets/images/CCA-Logo.svg";
import Banners from "../data.js";


export default function Header({ setIsLoading }) {
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();
  const headerAnimate = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  // const navAnimate = {
  //   hidden: {
  //     opacity: 0,
  //   }
  // }

  useEffect(() => {
    const body = document.querySelector('body');
    if(isActive === true){
      body.classList.add('hide-scroll');
    } else {
      body.classList.remove('hide-scroll')
    }
  }, [isActive])
  return (
    <>
      <motion.header
        id="main-header"
        className={setIsLoading ? null : "loaded"}
      >
        <div className="container">
          <div className="menu-wrapper">
            <img src={Benilde} style={{height: "40px", marginRight: "14px"}} className="logo" alt="De La Salle - College of Saint Benilde" />
            <div className="home-link">
              <Link to="/">
                <img src={CCA} alt="Go to Home" height="25.5px" />
                <span>CENTER FOR CAMPUS ART</span>
              </Link>
            </div>
          </div>
          <div
            id="hamburger"
            onClick={()=> {setIsActive(!isActive)}}
            className={isActive ? "active" : null}
          >
            <span></span>
            <span></span>
            <span></span>
          </div> 
        </div>
      </motion.header>
      <AnimatePresence>
        
      {isActive && (
          <motion.nav
            id="nav-wrapper"
            variants={headerAnimate}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {Banners.length > 0 && (
              <motion.div
                drag="x"
                layout
                dragConstraints={{
                  top: 0, 
                  bottom: 0, 
                  right: Banners.length*112.5,
                  left: Banners.length*-112.5 
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.2}
                whileDrag={{
                  scale: 0.9
                }}
                whileTap={{ cursor: "grabbing" }}
                id="motion-component"
              >
                {Banners.map((banner) => {
                  return (
                    <motion.div
                      style={{
                        width: '100%',
                        minWidth: '50',
                        margin: '10px',
                        height: '100%',
                        cursor: 'grab',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      key={banner.id}
                    >
                      <motion.div
                        whileHover={{ filter: 'grayscale(0)', transition: {duration: 0.2 }}}
                        style={{
                          height: '100%',
                          width: '100%',
                          maxHeight: '400px',
                          borderRadius: '10px',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundImage: `url(${banner.banner})`,
                          cursor: 'pointer',
                          filter: 'grayscale(100%)'
                        }}
                        onClick={() => {
                          history.push(`/exhibits/${banner.url}`);
                          setIsActive(!isActive)
                        }}
                      >
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}