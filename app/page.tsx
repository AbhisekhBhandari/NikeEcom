import Image from "next/image";
import React from "react";
import Video from "@/Components/Video";
const Home = () => {
  return (
    <div className=" flex flex-col gap-9 py-6  items-center justify-centerpy-3 lg:px-7 font-sans">
      <p className=" w-full text-2xl">The Nike App</p>
      <Video source={"/Vid1.mp4"} />
      <div className="  md:w-[650px]  mx-auto px-3">
        <h1 className=" py-3 text-xl lg:text-2xl font-semibold">
          Your Personal Guide to Nike
        </h1>
        <p className="  lg:text-xl">
          The Nike App has everything you need to get moving. That means the
          latest gear, engaging stories and a worldwide community. It’s all
          here, personalized for you.
        </p>
      </div>
      <Video source={"/Vid2.mp4"} />
      <div className="  md:w-[650px] px-3">
        <h1 className=" py-3 text-xl lg:text-2xl font-semibold">
          Join the Community{" "}
        </h1>
        <p className=" lg:text-xl">
          Once you’re in the App, you’re a Nike Member. So you’ll have first and
          exclusive access to the newest footwear and apparel, birthday rewards,
          plus free shipping on orders $50+ and other unique Member experiences.{" "}
        </p>
      </div>
      <div className="flex  flex-col text-xl  items-center">
        <Image
          src={"/QR.webp"}
          alt="qr"
          width={900}
          height={900}
        />
        <p>Scan the QR to download the App</p>
      </div>
      <div>
        <h1>More Apps From Nike</h1>
      </div>
    </div>
  );
};

export default Home;
