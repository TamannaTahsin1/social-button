import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Social = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
      setIsActive(!isActive);
    };
  
    const socials = [
      { icon: <FaFacebook /> },
      { icon: <FaTwitter /> },
      { icon: <FaInstagram /> },
      { icon: <FaLinkedin /> },
      { icon: <FaYoutube /> },
      { icon: <FaPinterest /> },
      { icon: <FaReddit /> },
      { icon: <FaSnapchat /> },
  
    ];
    return (
        <div className=" h-[50vh]">
        <h1 className="text-center text-black text-4xl mb-40">Social Buttons</h1>
        <div className=" relative w-280 h-280 flex justify-center items-center">
          <div
            className={`w-16 h-16 bg-lime-500 rounded-full flex justify-center items-center cursor-pointer ${
              isActive ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            <IoMdShare className={`text-2xl ${isActive ? "rotate-180" : ""}`} />
            {isActive && (
              <ul className="absolute flex flex-wrap justify-center items-center list-none p-0 m-0">
                {socials.map((social, index) => (
                  <li
                    key={index}
                    className="absolute transition duration-700 ease-in-out p-4 bg-lime-500 shadow-2xl rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${
                        (360 / socials.length) * index
                      }deg) translate(120px)`,
                      opacity: 1,
                    }}
                  >
                    <a href="" className="flex">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
};

export default Social;