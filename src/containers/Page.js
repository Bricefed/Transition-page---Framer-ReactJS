import { motion } from "framer-motion";

export default function Page({ img, title }) {
  const animSection = {
    hidden: {
      opacity: 0,
      transition: { ease: "easeIn", duration: 0.5 },
      y: "50vh",
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
      y: 0,
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.5 },
      y: "-50vh",
    },
  };

  const animImg = {
    hidden: {
      opacity: 0,
      transition: { ease: [0, 1.34, 0.75, 0.76], duration: 0.75 },
      y: "50vh",
    },

    visible: {
      opacity: 1,
      transition: { duration: 1 },
      y: 0,
    },
    exit: {
      opacity: 0,
      transition: { ease: [0.76, 0.75, 1.34, 0], duration: 0.75 },
      y: "-50vh",
    },
  };
  return (
    <motion.section
      variants={animSection}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.img
        src={process.env.PUBLIC_URL + "/assets/pict-" + img + ".jpg"}
        alt="Abstract"
        variants={animImg}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover={{ scale: 1.2 }}
      />
      <h1>{title}</h1>
    </motion.section>
  );
}
