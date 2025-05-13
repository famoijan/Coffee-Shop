import React from "react";
import footerbg from "../../assets/images/more/13.jpg";
import SectionHeading from "../ui/sectionHeading";
import logo from "../../assets/images/more/logo1.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footerbg})` }}
      className="bg-cover bg-center pt-[121px] pb-[48px] bg-no-repeat "
    >
      <div className="max-w-7xl mx-auto gap-36 flex flex-row items-center justify-between border-2">
        {/* Left */}

        <div className="w-full border-2">
          <div className="w-[75px] h-[90px]">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <SectionHeading title={"Espresso Emporium"} />
          <p className="pt-7 text-[#1B1A1A] text-xl font-normal font-raleway leading-10">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="mt-7 text-xl flex flex-row items-center gap-5 text-[#331A15]">
            <a href="" className="">
              <FaFacebook />
            </a>
            <a href="" className="">
              <FaTwitter />
            </a>
            <a href="" className="">
              <FaInstagram />
            </a>
            <a href="" className="">
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-8">
            <SectionHeading title={"Get in Touch"} />
            <div className="fmt-8 flex flex-row items-center gap-5">
              <FaPhoneAlt className="text-2xl" />
              <p className="text-xl font-raleway text-[#1B1A1A]">
                +88 01533 333 333
              </p>
            </div>
            <div className="fmt-8 flex flex-row items-center gap-5">
              <FaEnvelope className="text-2xl" />
              <p className="text-xl font-raleway text-[#1B1A1A]">
                info@gmail.com
              </p>
            </div>
            <div className="fmt-8 flex flex-row items-center gap-5">
              <FaLocationDot className="text-2xl" />
              <p className="text-xl font-raleway text-[#1B1A1A]">
                72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full border-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
