import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import SideDots from "./components/SideDots";
import Landing from "./components/Landing";
import { motion } from "motion/react";
import ExperienceComponent from "./components/Experience";

function App() {
  const [selectedNav, setSelectedNav] = useState<string>("home");
  const isAboveMobileScreens = useMediaQuery("(min-width: 1060px)");
  const [isTop, setIsTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      }
      if (window.scrollY !== 0) {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTop={isTop}
        selectedNav={selectedNav}
        setSelectedNav={setSelectedNav}
      />
      <div className="w-5/6 mx-auto md:h-full mt-10">
        {isAboveMobileScreens && (
          <SideDots selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        )}
        <motion.div
          style={{ margin: "0 0 -200px 0" }}
          viewport={{ once: true, amount: "all" }}
          onViewportEnter={() => setSelectedNav("home")}
        >
          <Landing setSelectedNav={setSelectedNav} />
        </motion.div>
        <motion.div
          style={{ margin: "0 0 -200px 0" }}
          viewport={{ once: true, amount: "all" }}
          onViewportEnter={() => setSelectedNav("skills")}
        >
          <ExperienceComponent />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
