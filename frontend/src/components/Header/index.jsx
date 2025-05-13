import React from "react";

import headerBgImg from "../../assets/images/more/15.jpg";
import cupIcon from "../../assets/images/more/logo1.png";

const Header = () => {
  return (
    <header
      style={{ backgroundImage: `url(${headerBgImg})` }}
      className="py-4 bg-cover bg-center bg-no-repeat flex justify-center items-center flex-row gap-4"
    >
      Header
      <div className="w-[75px] h-[90px]">
        <img src={cupIcon} alt="" className="w-full h-full" />
      </div>
      <h1 className="text-6xl text-white text-center font-rancho-regular">
        Espresso Emporium
      </h1>
    </header>
  );
};

export default Header;
