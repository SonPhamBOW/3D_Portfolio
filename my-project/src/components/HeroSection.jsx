import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row
    flex-col-reverse items-center justify-between lg:px-24 px-10 relative
    overflow-hidden gap-4"
    >
      {/* Left Section */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br /> Reliable Result
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-xl md:text-xl lg:text-2xl text-purple-200
        max-w-2xl"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum
          voluptates adipisci reprehenderit, pariatur placeat atque consectetur
          perferendis, in aut quis, dicta hic sunt fugit. Ut, optio!
          Perferendis, voluptatem ad.
        </motion.p>
      </div>

      {/* Right Section */}
      <Spline
        className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/2q5jkzsmpgu9th0P/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;
