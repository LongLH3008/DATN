import React from "react";
import { Link } from "react-router-dom";

const BannerBlogDetail = () => {
  return (
    <>
      <div
        className={`min-[320px]:px-[5%] xl:px-[11.5%] 2xl:px-[17.5%] w-full bg-banner-blog bg-cover bg-center  mb-11 py-24 *:text-[#333333]`}
      >
        <div className="">
          <h1 className="text-center text-[43px] font-semibold">
            Testing has a signficant info number of benefits
          </h1>
          <div className=" flex justify-center items-center *:px-2 mt-4">
            <Link className="hover:text-[#00BFC5]" to="/">
              Home
            </Link>
            <i className="fa-solid fa-angle-right "></i>
            <Link className="hover:text-[#00BFC5]" to="/blog">
              New
            </Link>
            <i className="fa-solid fa-angle-right "></i>
            <p className="text-[#00BFC5]">
              Testing has a signficant info number of benefits
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerBlogDetail;