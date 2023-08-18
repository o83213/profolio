"use client";
import React from "react";
import Image from "next/image";
import TechnologyTag from "@/components/TechnologyTag";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
import LiveProjectPop from "./LiveProjectPop";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface Project_data {
  id: string;
  image: string;
  title: string;
  description: string;
  url: string;
  repo: string;
  codeStack: string[];
}

interface Props {
  data: Project_data;
}

function Projectcard({ data }: Props) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-[1fr_2fr] xl:grid-rows-1 justify-items-center gap-4 w-full h-full  px-8 pb-8">
      <div>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center xl:text-left"
        >
          {data.title}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-auto lg:mx-0"
        >
          {data.description}
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-4 mx-auto lg:mx-0 hidden xl:block"
        >
          <TechnologyTag technologyFeatures={data.codeStack} />
          <Link
            href={data.repo}
            target={"_blank"}
            className="inline-flex gap-2 items-center cursor-pointer bg-slate-300 px-1 py-0.5 rounded-lg ease-in duration-300 hover:bg-white "
          >
            <FaGithub color="#000" />
            <span className="text-[#000] font-bold">Github</span>
          </Link>
        </motion.div>
      </div>
      <Link
        href={data.url}
        target={"_blank"}
        className="relative rounded-lg overflow-hidden flex  items-center group w-4/5 xl:w-full xl:h-full"
      >
        <Image src={data.image} fill alt="" />
        <LiveProjectPop />
      </Link>
    </div>
  );
}

export default Projectcard;
