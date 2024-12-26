import { FaDiscord, FaTwitch, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { discord: "https://discord.com", icon: <FaDiscord /> },
  { twitter: "https://twitter.com", icon: <FaTwitter /> },
  { twitch: "https://twitch.com", icon: <FaTwitch /> },
]

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between 
      gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light lg:text-left">
        ©Zentry 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out 
              hover:text-white">
              {link.icon}
            </a>
          ))}
        </div>

        <a 
          href="#privacy-policy" 
          className="text-center text-sm hover:underline 
          lg:text-right">
            Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer