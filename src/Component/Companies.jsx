import { motion } from "framer-motion";
import { companiesData } from "../utils/data";
import React from "react";

export const Companies = () => {
  return (
    <section>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="w-[1400] mx-auto wrapper flex justify-evenly items-center py-10"
      >
        {companiesData.map((company) => (
          <div key={company.id} className="text-2xl font-semibold text-gray-400 text-center">
            <img className="h-[100px] w-[100px]" src={company.image} alt="" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};
