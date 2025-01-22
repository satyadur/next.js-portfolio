import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="footer logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="footer logo"
            className="w-6"
          />
          satyakudupudi8500@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Satya. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/satyadur">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/satya-kudupudi-5b015a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://x.com/Satya80084?t=OYSkhpaovs2_uxmcgEVCmA&s=09"
            >
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
