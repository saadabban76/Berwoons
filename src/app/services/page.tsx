import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import ServiceCard from "./ServiceCard";

const page = () => {
  return (
    <main className="p-10 px-12">
      {/* header */}
      <h2 className="text-gray-200 text-[1.1rem] xl:text-[1.2rem]">
        <span className="text-[1.3rem] text-white mr-4 xl:text-[1.4rem] font-semibold">
          Services
        </span>
        We offer a comprehensive suites of creative and digital services
        tailored to meet the diverse needs of our clients. Our team of experts
        is dedicated to helping you succeed in the digital landscape. Here{"'"}s
        how we can support your goals.
      </h2>
      {/* main component */}
      <section className="flex flex-col pt-10 pb-3">
        <ServiceCard
          index={0o1}
          title="Video Editing"
          description="Create short videos optimized for social media platforms to grab attention and drive engagement. Also editing and coloring long videos in highest quality."
        />
        <ServiceCard
          index={0o2}
          title="Graphic Designs"
          description="Our graphic design and motion graphics expertise bring your concepts to life with stunning precision and captivating motion."
        />
        <ServiceCard
          index={0o3}
          title="Strategic Marketing"
          description="Our marketing strategies are designed to boost your brand visibility and drive growth."
        />
        <ServiceCard
          index={0o4}
          title="Creating Contents"
          description="We craft engaging and captivating content to tell your story and connect with your audience."
        />
        <ServiceCard
          index={0o5}
          title="3D Design"
          description="From 3D renders to animations and enhance your videos and projects with cutting-edge visual effects for that wow factor."
        />
        <ServiceCard
          index={0o6}
          title="Website Creation"
          description="We design and develop tailored websites that are both visually stunning and highly functional."
        />
        <ServiceCard
          index={0o7}
          title="Merchandise Design"
          description="Make your brand into wearable art with our unique merchandise designs."
        />
      </section>
    </main>
  );
};

export default page;
