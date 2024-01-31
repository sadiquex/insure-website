"use client";

import { useEffect, useRef } from "react";
import {
  AffordablePrices,
  HowWeWorkDesktop,
  HowWeWorkMobile,
  PeopleFirst,
  SnappyProcess,
} from "./Assets";
import { useInView, motion } from "framer-motion";

const Services: React.FC = () => {
  const findOutMoreVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const findOutMoreRef = useRef<HTMLDivElement>(null);

  const OurServices = [
    {
      icon: <SnappyProcess />,
      title: "Snappy Process",
      body: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
    },
    {
      icon: <AffordablePrices />,
      title: "Affordable Prices",
      body: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      icon: <PeopleFirst />,
      title: "People First",
      body: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    },
  ];

  return (
    <section className="space-y-4 md:pt-[200px] lg:pt-[400px] pb-10 w-[85vw] max-w-[1440px] mx-auto">
      <hr className="mt-8 md:mt-0 h-[2px] w-[140px] border-0 bg-gray-700" />

      <p className="text-[54px] text-very-dark-violet w-full font-bold text-center md:text-left font-dm-serif-display">
        We're different
      </p>
      <div className="w-full flex flex-col gap-8 md:flex-row md:justify-between">
        {OurServices.map((service, i) => {
          return (
            <div
              key={i}
              className="flex gap-3 flex-col items-center md:items-start"
            >
              <div>{service.icon}</div>
              <h2 className="text-[28px] font-dm-serif-display font-semibold">
                {service.title}
              </h2>
              <p className="leading-6 text-center md:text-left text-dark-grayish-violet">
                {service.body}
              </p>
            </div>
          );
        })}
      </div>

      {/* find out more */}
      <motion.div
        className="w-full h-[320px] md:h-[250px] bg-dark-violet relative flex flex-col items-center justify-center gap-6 md:gap-0 md:flex-row md:justify-between px-8"
        ref={findOutMoreRef}
        variants={findOutMoreVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-0 right-0 hidden md:block">
          <HowWeWorkDesktop />
        </div>
        <div className="absolute top-0 right-0 block md:hidden">
          <HowWeWorkMobile />
        </div>
        <p className="text-[40px] w-full md:w-[40%] font-bold text-center md:text-left font-dm-serif-display text-white">
          Find out more <br /> about how we work
        </p>
        <button className="border z-[200] border-white text-white uppercase py-3 px-8 hover:text-black hover:bg-white">
          How we work
        </button>
      </motion.div>
    </section>
  );
};

export default Services;
