"use client";
import Services from "@/components/services";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PortfolioPage = () => {
  const [data, setData] = useState([])
  const apidata = async()=>{
    let data = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`)
    data = await data.json()
    setData(data.user.projects)
  }
  useEffect(()=>{
    apidata() 
  }
  ,[])
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="pt-8 w-auto  h-[100vh] sm:h-[100vh] md:h-auto flex items-center justify-center text-md text-center overflow-auto">
          <Services />
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* <div className="h-screen w-screen flex items-center border-none justify-center bg-zinc-900" /> */}
            {
            data.map((item) => (
              <div className={`h-screen w-screen flex items-center justify-center bg-zinc-900`}
                key={item.id} >
                <div className="flex flex-col p-5 pt-5 gap-4 text-white">
                  <h6 className="text-md font-bold md:text-md lg:text-xl xl:text-2xl">
                    {item.title}
                  </h6>
                  <div className=" flex justify-center rounded-full w-80 h-50 sm:h-50 md:w-96 md:h-54 lg:w-[500px] lg:h-[250px] xl:w-[600px] xl:h-[250px]">
                    <Image src={item.image.url} alt="" width={600} height={400} />
                  </div>
                  <h4 className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    Technologies:- {item.techStack}
                  </h4>
                  <p className="text-sm w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.description}
                  </p>
                  <Link href={item.githuburl} className="flex justify-end">
                    <button className="p-2 text-sm md:p-2 md:text-md lg:p-4 lg:text-md bg-white text-gray-600 font-semibold m-2 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className=" h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl text-black pt-8">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl pt-4">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
