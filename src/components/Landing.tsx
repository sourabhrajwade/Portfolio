import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "motion/react";
import SocialMediaIcons from "./SocialMediaIcons";

interface LandingProps {
  setSelectedNav: React.Dispatch<React.SetStateAction<string>>;
}

function Landing({ setSelectedNav }: LandingProps) {
  const isAboveMobileScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMobileScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-10 before:rounded-t-[400px] before:w-[70%] before:max-w-[300px] md:before:max-w-[600px] before:h-[110%] before:border-2 before:border-purple-900 before:z-[-1]">
            <div className=" relative z-0 ml-20 before:absolute before:-top-10 before:-left-50 before:rounded-t-[400px] before:w-[80%] before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-purple-950 before:bg-gradient-purplehue  before:z-[-1]">
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-[80%] max-w-[400px] md:max-w-[600px] filter saturate-100 opacity-95"
                src="assets/face.png"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center relative z-10 mx-5 before:absolute before:-top-10 before:-left-50 before:rounded-t-[400px] before:w-[100%] before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-purple-950 before:bg-gradient-purplehue  before:z-[-1]">
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/face.png"
            />
          </div>
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Sourabh {""}
            <span>Rajwade</span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Full Stack developer with decade of experience in building web
            applications. I specialize in JavaScript, React, Node.js, and
            Python.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedNav("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedNav("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;
