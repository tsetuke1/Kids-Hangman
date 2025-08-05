import { motion } from "framer-motion";

interface LetterAnimateProps {
  letter: string;
  color: string;
}

const LetterAnimate: React.FC<LetterAnimateProps> = ({ letter, color }) => {
  return (
    <motion.div
      className="text-8xl md:text-9xl font-extrabold drop-shadow-lg"
      style={{ color }}
      initial={{ y: -50, rotate: -15, opacity: 0 }}
      animate={{ y: 0, rotate: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.3,
      }}
      whileHover={{
        scale: 1.2,
        rotate: 10,
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      {letter}
    </motion.div>
  );
};

export default LetterAnimate;
