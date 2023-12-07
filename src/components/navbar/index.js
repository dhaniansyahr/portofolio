import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../../asset/MyLogo.jpg";
import { Link } from "react-router-dom";

const index = () => {
  const mail = "dhaniansyahr@gmail.com";
  const urlInstagram = "";
  return (
    <div className="px-[130px] py-4 flex justify-between items-center bg-transparent fixed w-full z-50">
      <div className="flex flex-row items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="h-14 w-14 rounded-full"
          style={{ filter: "grayscale(100%)", objectFit: "cover" }}
        />
        <h1 className="text-3xl font-oswald text-white">Meone</h1>
      </div>
      <div className="flex flex-row gap-4">
        <a href="mailto:dhaniansyahr@gmail.com" target="_blank">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#ffffff" }}
            className="cursor-pointer"
            size="2xl"
            type="button"
          />
        </a>
        <a href="https://www.instagram.com/r.dhaniansyah/" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#ffffff" }}
            className="cursor-pointer"
            size="2xl"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rama-dhaniansyah-523490248/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff" }}
            className="cursor-pointer"
            size="2xl"
          />
        </a>
        <a href="https://github.com/dhaniansyahr" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#ffffff" }}
            className="cursor-pointer"
            size="2xl"
          />
        </a>
      </div>
    </div>
  );
};

export default index;
