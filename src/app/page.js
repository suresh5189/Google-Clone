import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import React from "react";
import googleLogo from "../../image/googleLogo.webp";
import HomeSearch from "@/components/HomeSearch";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src={googleLogo}
          width={300}
          height={100}
          alt="Google Logo"
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default Home;
