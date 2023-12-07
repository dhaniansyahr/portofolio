import React from "react";
import { motion } from "framer-motion";
import Html from "../../asset/icon/html";
import Css from "../../asset/icon/css";
import Js from "../../asset/icon/javascript";
import Java from "../../asset/icon/java";
import ReactLogo from "../../asset/icon/react";
import Redux from "../../asset/icon/redux";

const BounceIcon = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="w-[5%] h-[5%]"
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-[7%]">
      <div>
        <h1 className="text-white text-6xl font-oswald">Skills</h1>
      </div>
      <div className="flex flex-row gap-10 w-full justify-center">
        <BounceIcon>
          <Html />
        </BounceIcon>
        <BounceIcon>
          <Css />
        </BounceIcon>
        <BounceIcon>
          <Js />
        </BounceIcon>
        <BounceIcon>
          <Java />
        </BounceIcon>
        <BounceIcon>
          <ReactLogo />
        </BounceIcon>
        <BounceIcon>
          <Redux />
        </BounceIcon>
      </div>
    </div>
  );
};

export default Index;
