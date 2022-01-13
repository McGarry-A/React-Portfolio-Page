import "./Home.css";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Home = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-intro">
          <h2>I AM,</h2>
        </div>
        <motion.div
          className="hero-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={item}>A</motion.span>
          <motion.span variants={item}>h</motion.span>
          <motion.span variants={item}>m</motion.span>
          <motion.span variants={item}>e</motion.span>
          <motion.span variants={item}>d</motion.span>
          <motion.span variants={item}>_</motion.span>
          <motion.span variants={item}>a</motion.span>
          <motion.span variants={item}>_</motion.span>
          <motion.span variants={item}>d</motion.span>
          <motion.span variants={item}>e</motion.span>
          <motion.span variants={item}>v</motion.span>
          <motion.span variants={item}>e</motion.span>
          <motion.span variants={item}>l</motion.span>
          <motion.span variants={item}>o</motion.span>
          <motion.span variants={item}>p</motion.span>
          <motion.span variants={item}>e</motion.span>
          <motion.span variants={item}>r</motion.span>
        </motion.div>
        <p className="hero-text">
          Junior Developer equipped with a diverse and promising skill set.
          Proficient in modern front-end technologies including React and Vue.
          Able to effectively self-manage and self-teach during independent
          projects, as well as collaborate as part of a productive team.
        </p>
        <div className="button-div">
          <button>Portfolio</button>
          <button>Github</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
