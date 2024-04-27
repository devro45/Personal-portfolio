"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Accordian from "./AccordionItem";
import AccordionItem from "./AccordionItem";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>MySql</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.tech CSE</li>
        <li>Graphic Era University, Dehradun</li>
      </ul>
    ),
  },
  {
    title: "Coding Stats",
    id: "codingstats",
    content: (
      <ul className="list-disc pl-2">
        <li>Leetcode rating- 1883</li>
        <li>Codechef rating- 1907</li>
        <li>AIR 623 in Google Kickstart</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open == index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const accordionData = [
    {
      title: "Who am I?",
      desc: "🙋‍♂️ I am Dev Arora, a Full Stack Software Engineer and Computer nerd who is passionate about coding and development",
    },
    {
      title: "What I do?",
      desc: "👨‍💻 I spend my time building cool and innovative stuffs , and learn more and more about Coding and Computers in my free time.",
    },
    {
      title: "What is my education background",
      desc:
        `🎓 I have done Computer Engineering from Graphic Era Hill University, Dehradun.\n` +
        `🧑‍🎓 I have completed my graduation in 2023.\n` +
        `🏫 I have completed my schooling from Shivedale School, Haridwar.`,
    },
  ];

  return (
    <>
      {/* <Accordian /> */}
      <section className="bg-[#121212] text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            style={{ borderRadius: "50%" }}
          />

          {/* <section className="bg-[#121212]  grid place-items-end"> */}
          {/* <div className="text-black px-[40px] max-w-[800px]"> */}
          <div className=" mt-4 md:mt-0 text-left flex flex-col h-full border-radius-[50px] sm:border-[#213061] sm:border sm:shadow-lg sm:rounded-md ">
            {accordionData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
        {/* </section> */}
      </section>
      {/* <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            style={{ borderRadius: "50%" }}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express,
              PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I am
              a team player and I am excited to work with others to create
              amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("codingstats")}
                active={tab === "codingstats"}
              >
                {" "}
                Coding Stats{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutSection;
