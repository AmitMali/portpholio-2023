import React from "react";

const BackColorDashText = (props) => {
  const { text, textColor, bgColor, fontFamily } = props;
  /*
    text: text to show 
    textColor: text color (class name)
    bgColor: decoration color (class name)

    */
  return (
    <p
      className={`relative text-2xl font-semibold ${textColor} ${fontFamily} tracking-wider mb-8 `}
    >
      <span
        className={`${bgColor} inline-block w-20 h-2 absolute start-0 top-0`}
      ></span>
      <span className="z-10 inline-block absolute ">{text}</span>
    </p>
  );
};

export default BackColorDashText;
