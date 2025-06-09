import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { navbarItem } from "../const/index";

const Header = () => {
  return (
    <header
      className="absolute w-full z-50 transition-all 
    duration-300"
    >
      <div
        className="container mx-auto px-4 sm:px-6 
      lg:px-8 flex items-center justify-between h-16 md:h-20"
      >
        {/* logo name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div
            className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100
            flex items-center justify-center text-purple-600 font-bold text-xl mr-3"
          >
            S
          </div>

          <span
            className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100
            bg-clip-text text-transparent"
          >
            SonPham Dev
          </span>
        </motion.div>

        {/* Destop navigation */}
        <nav className="lg:flex hidden space-x-8">
          {navbarItem.map((item, index) => {
            return (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                href=""
                className="relative text-gray-800 dark:text-gray-200
                  hover:via-violet-600 dark:hover:text-violet-400 font-medium
                  transition-colors duration-300 group"
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5
                  bg-violet-600 group-hover:w-full transition-all
                  duration-300"
                ></span>
              </motion.a>
            );
          })}
        </nav>

        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600
          dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiGithub className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
