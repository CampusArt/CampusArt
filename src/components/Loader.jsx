import React, { useEffect } from "react";
import {motion} from "framer-motion";
import Logo from "../assets/images/CCALOGO_white 1.png"
// import AnimatedCharacters from "../components/AnimatedText";

// Variants
const container = {
  show: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 100,
    y: 1000,
  }
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  show: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
  }
}

const wrapper = {
  visible: {
    transition: {
      staggerChildren: 0.025
    }
  }
};

const Loader = ({ setLoading }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer)
  })

  return (
    <motion.div
      id="loader"
      variants={container}
      initial="hidden" 
      animate="show"
      exit="exit"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={wrapper}
        style={{
          textAlign: "center",
          width: "100%"
        }}
      >
        <motion.img 
          src={Logo} 
          alt="Center for Campus Art"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={imageAnimation}
          style={{
            textAlign: "center",
            width: "100vw",
            color: "#fff"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Loader;