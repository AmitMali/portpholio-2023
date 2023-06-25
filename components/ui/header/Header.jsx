import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-100 h-80 bg-white p-4 flex items-center justify-center  relative">
      <div className=" text-red text-center">
        <h1 className=" text-4xl ">
          <span className="text-darkGray text-2xl"> Hello, I'm</span> <br />
          <span className="font-bold uppercase tracking-widest my-4 inline-block">
            Amit Mali
          </span>
        </h1>
        <h2>
          <span className="text-gray font-semibold "> I do</span>
          <span className="capitalize text-lightGreen">
            {" "}
            full stack development
          </span>
        </h2>
      </div>
      {/* <div>
        <Image
          src={"/images/amit-mali-potrait.png"}
          width={256}
          height={240}
          alt="Amit Mali Fullstack Developer"
          className="absolute bottom-0 right-8"
        />
      </div> */}
    </div>
  );
};

export default Header;
