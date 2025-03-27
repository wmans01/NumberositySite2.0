import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col, items-center, justify-center content-center pt-[22.75%]">
      <div className="error">404</div>
      <h2 className="text-white text-[14px] font-[400] leading-[49px] m-0">
        This page could not be found.
      </h2>
    </div>
  );
};

export default PageNotFound;
