import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black px-[5%] py-[1%] text-center">
      <p className="footerText">
        © 2025 Numberosity Academy. All Rights Reserved.
      </p>
      <p className="footerText">
        Interested in our website? Learn more about it{" "}
        <a
          href="https://github.com/wmans01/NumberositySite2.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          here!
        </a>
      </p>
      <p className="footerText">
        For general questions, please contact us at{" "}
        <a href="mailto:numberosityacademy@gmail.com">
          numberosityacademy@gmail.com.
        </a>
      </p>
    </div>
  );
};

export default Footer;
