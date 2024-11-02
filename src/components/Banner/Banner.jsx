import React from "react";
import bannerImg from "../../assets/banner-book.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg" />
        <div>
          <p className="text-[56px] font-bold w-3/5 mb-12">Books to freshen up your bookshelf</p>
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
