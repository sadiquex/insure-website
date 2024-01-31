import { AnimatePresence, motion } from "framer-motion";
import { MobileNavPattern } from "./Assets";

interface MobileNavProps {
  toggleMobileNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ toggleMobileNav }) => {
  return (
    <AnimatePresence>
      <motion.nav
        className="bg-very-dark-violet text-very-light-gray flex flex-col items-center md:hidden pt-12 absolute top-[64px] z-30 h-screen w-full"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <ul className="flex flex-col gap-8 font-semibold text-[24px] text-center">
          {["HOW WE WORK", "BLOG", "ACCOUNT"].map((link, i) => (
            <motion.li
              onClick={toggleMobileNav}
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7 + i / 10,
              }}
            >
              {link}
            </motion.li>
          ))}
          <li>
            <motion.button
              className="border-2 w-full z-[200] border-white text-white uppercase py-3 px-8 hover:text-black hover:bg-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.2,
              }}
            >
              VIEW PLANS
            </motion.button>
          </li>
        </ul>
        <div className="absolute bottom-0 right-0">
          <MobileNavPattern />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default MobileNav;
