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

const App = () => {
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
    <div className="bg-lime-500 h-screen">
      <h1 className="text-center text-black text-4xl mb-40">Social Buttons</h1>
      <div className="menu relative w-280 h-280 flex justify-center items-center">
        <div
          className={`w-16 h-16 bg-white rounded-full flex justify-center items-center cursor-pointer ${
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
                  className="absolute transition-transform duration-300 ease-in-out p-4 bg-white shadow-2xl rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${
                      45 * index
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

export default App;
