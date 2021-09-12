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
            width: "clamp(1rem, 100vw, 20rem)"
          }}
        />
        <div>
          {
            title.map((item, index) => {
              return <AnimatedCharacters {...item} key={index} />;
            })
          }
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Loader;