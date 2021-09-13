import React from "react";
import {motion} from "framer-motion";
import Logo from "../assets/images/CCA-Logo.svg"
import AnimatedCharacters from "../components/AnimatedText";

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

const title = [
  { type: "heading1", text: "CENTER FOR CAMPUS ART" },
];

const Loader = ({ setLoading }) => {

  const loading = true;

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
        // animate="visible"
        animate={loading ? "visible" : "hidden"}
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
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "32px"
        }}>
          <motion.p
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1, transition: {delay: 0.2}}}
            exit={{opacity: 0, scale: 0}}
          >CENTER</motion.p>
          <motion.p
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1, transition: {delay: 0.4}}}
            exit={{opacity: 0, scale: 0}}
          >FOR</motion.p>
          <motion.p
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1, transition: {delay: 0.6}}}
            exit={{opacity: 0, scale: 0}}
          >CAMPUS</motion.p>
          <motion.p
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1, transition: {delay: 0.8}}}
            exit={{opacity: 0, scale: 0}}
          >ART</motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Loader;