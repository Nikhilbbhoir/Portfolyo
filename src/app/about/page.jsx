"use client";
import Brain from "@/components/brain";
import ProgressBar from "@/components/progressbar";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const AboutPage = () => {
  const apidata = async()=>{
    let data = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`)
    data = await data.json()
    setData(data)
  }
  const [data, setData] = useState([])
  useEffect(()=>{
    apidata() 
  }
  ,[])
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-auto lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-2 sm:p-2 md:p-4 lg:p-8 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src={data.user && data.user.about.avatar.url}
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* NAME CONTACT EMAIL DIV  */}
            <div className="">
            {/* BIOGRAPHY NAME */}
            <h1 className="font-bold text-2xl">{data.user && data.user.about.name}</h1>
              {/* BIOGRAPHY ADDRESS */}
              <p className="italic w-full">
              {data.user && data.user.about.address}
              </p>
              {/* BIOGRAPHY EMAIL */}
              <p className="italic">
              {data.user && data.user.about.contactEmail}
              </p>
              {/* BIOGRAPHY CONTACT */}
              <p className="italic">
              {data.user && data.user.about.phoneNumber}
              </p>

            </div>

            {/* DIV TITLE SUBTITLE  */}
           <div className="">
              {/* BIOGRAPHY TITLE */}
              <h3 className="font-bold text-xl">{data.user && data.user.about.title}</h3>
              {/* BIOGRAPHY SUBTITLE */}
              <span className="italic">
              {data.user && data.user.about.subTitle}
              </span>
           </div>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              {data.user && data.user.about.description}
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            {data.user && data.user.about.quote}
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              { data.user &&
             data.user.skills.map((item)=>{
             return(
             <div className="group relative" key={item._id}>
                <div className="rounded-lg absolute -top-40 hidden w-32 h-32 bg-zinc-500 group-hover:block">
                  <div className="flex items-center justify-center">
                    <Image 
                    className="flex justify-center items-center p-2" 
                    src={item.image.url} alt={item.name} width={100} height={120} />

                  </div>
                  <div className="progress-bar w-30 h-16 p-1">
                    <div className="progress rounded-md" style={{ width: `${item.percentage}%` }}>
                      <span className='flex items-center justify-center rounded-r-md bg-[rgb(17,42,49)] h-full'>{item.percentage}%</span> </div>
                  </div>
                </div>
                

                <div className="rounded-md w-fit p-2  text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                { item.name }
                </div>

              </div>
             )
             }) 
              }
              
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
           
            {/* EXPERIENCE LIST */}
          <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
              >
              {/* JSX Element start here  */}
             { data.user && data.user.timeline.map((item,index)=>{
              return(
                /* EXPERIENCE LIST ITEM */
              <div key={item._id} className={`flex gap-4 justify-between h-100 ${(index % 2 === 0)&& 'flex-row-reverse'} `} >
              {/* LEFT */}
              <div className="w-1/3 pt-5">
                {/* JOB TITLE */}
                <div className="bg-white text-zinc-800  p-3 font-semibold rounded-b-lg rounded-s-lg">
                  {item.jobTitle}
                </div>
                {/* JOB DESC */}
                <div className="p-1 text-sm italic">
                  {item.summary}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  { new Date(item.startDate).toLocaleDateString('en-US', {day: 'numeric',month: 'short',year: 'numeric',})} - { new Date(item.endDate).toLocaleDateString('en-US', {day: 'numeric',month: 'short',year: 'numeric',})}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-zinc-800 text-sm font-semibold w-fit">
                  {item.company_name},
                  <p>{item.jobLocation}</p>
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div> 
            </div>
              )
             })
              
            } 
              {/* JSX Eelement End here  */}
              </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

