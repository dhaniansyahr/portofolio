/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import Navbar from "../components/navbar";
import Skill from "../components/section-skill";
// import Card from "../components/card";
import BlogCard from "../components/card";
import Data from "../components/card/Data";
import foto from "../asset/MyFoto.jpeg";
import { motion } from "framer-motion";
import Typed from "react-typed";

const Index = () => {
  const skillRef = useRef(null);
  // const time = useTime();
  // const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  const handleCatchMeClick = () => {
    // Scroll to the Skill section
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-primary">
      <Navbar />
      <div className="flex flex-row gap-3 h-screen items-center p-10">
        <div className="w-full pl-[100px] flex flex-col gap-4">
          <div>
            <h1 className="text-white text-6xl font-oswald">
              Hello, I'm Rama Dhaniansyah
            </h1>
            <Typed
              strings={["I'm a Web Developer", "I'm a Frontend Engginer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="text-white text-6xl font-oswald"
            />
            <br />
            <br />
            <p className="text-white text-2xl font-oswald">
              I'm a Web Developer and Frontend Engginer based in Indonesia. I
              have serious passion for Javascript, but I also love to learn new
              things and technology. I'm currently studying at University of
              Syiah Kuala majoring in Informatics Engineering. <br /> <br /> I
              have experience in building a website using MERN Stack and
              Tailwind CSS. I also have experience at Cyber Security and Bug
              Bounty Hunting.
            </p>
          </div>
          <div className="w-full flex justify-start">
            <button
              onClick={handleCatchMeClick}
              className="bg-white text-primary font-oswald text-2xl px-4 py-2 rounded-full mt-5 hover:bg-primary hover:text-white transition duration-300"
            >
              Catch Me
            </button>
          </div>
        </div>
        <div className="w-full pr-[100px] flex justify-end box">
          <motion.img
            src={foto}
            alt="myprofile"
            className="h-[600px] w-[600px] rounded-3xl"
            style={{ filter: "grayscale(100%)", objectFit: "cover" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          />
        </div>
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <div className="flex flex-col gap-10 w-full justify-center items-center py-[7%]">
        <div>
          <h1 className="text-white text-6xl font-oswald">Projects</h1>
        </div>
        <div className="flex flex-row gap-10 w-full justify-center">
          {Data.map((item) => (
            <BlogCard {...{ data: item.child }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
