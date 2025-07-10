"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type FolderCardProps = {
  index: string;
  title: string;
  description: string;
  tabColor: string;
  textColor: string;
};

const FolderCard: React.FC<FolderCardProps> = ({
  index,
  title,
  description,
  tabColor,
  textColor,
}) => {
  return (
    <motion.div
      className="relative w-full bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-500 flex flex-col aspect-[4/3] justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Tab */}
      <div
        className="absolute -top-6 left-0 px-6 py-2 text-white font-bold uppercase text-sm rounded-t-md z-10"
        style={{ backgroundColor: tabColor }}
      >
        THE JK COURSE LIBRARY
      </div>

      {/* Top bar */}
      <div
        className="h-6"
        style={{
          backgroundColor: tabColor,
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />

      {/* Content */}
      <div className="p-6 flex flex-col md:flex-row items-start justify-between gap-4 flex-1">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h4 className="text-2xl font-extrabold mr-2" style={{ color: textColor }}>
              {index}
            </h4>
            <p className="uppercase text-sm tracking-wider text-gray-600">
              {description}
            </p>
          </div>
          <h2 className="text-3xl font-serif text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Ready to leverage the internet’s favorite inspo board to be your #1
            driver of web traffic? Get my 4-step, proven strategy that helps
            creators grow their audience and convert clicks to customers.
          </p>
        </div>

        <div className="flex justify-center items-center w-[180px] md:w-[200px] flex-shrink-0">
          <Image
            src="/phone.png"
            alt="Phone demo"
            width={180}
            height={360}
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FolderCard;
