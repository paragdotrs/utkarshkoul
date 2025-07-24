"use client";
import React, { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import mapImage from "@/assets/images/Map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { TechToolbox } from "@/components/TechToolBox";
import { motion } from "framer-motion";
import Image from "next/image";

export const hobbies = [
  { title: "Coding", emoji: "💻", left: "5%", top: "5%" },
  { title: "UI/UX Design", emoji: "🎨", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "30%" },
  { title: "Music", emoji: "🎵", left: "70%", top: "45%" },
  { title: "Basketball", emoji: "�", left: "5%", top: "75%" },
  { title: "Movies", emoji: "�", left: "30%", top: "60%" },
  { title: "Learning", emoji: "📚", left: "40%", top: "40%" },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="Who am I?"
          description="I am a passionate Frontend Developer with a love for creating engaging user experiences."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 overflow-hidden flex flex-col">
              <CardHeader
                title="Education"
                description="My current education and learning journey."
              />
              <div className="flex-1 overflow-y-auto px-12 hide-scrollbar">
                 <ul className="list-disc space-y-3 text-sm text-gray-300">

                  <li>
                    <strong>High School - VBPS</strong> - <a href="https://universalpublicschool.in/" target="_blank" rel="noopener noreferrer">Vishwa Bharati Public School, New Delhi</a>
                    <br />
                    <span className="text-gray-500">Currently in 12th Grade (2025)</span>
                  </li>
                  <li>
                    <strong>Self-Learning Web Development</strong>
                    <br />
                    <span className="text-gray-500">Passionate about frontend technologies and modern web development</span>
                  </li>
                </ul>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Tech Stack"
                description="Technologies I love working with for frontend development."
              />
              <TechToolbox />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond The Code"
                description="Explore my interests and hobbies."
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full py-1 sm:py-1.5 absolute text-xs sm:text-sm"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span className="text-xs sm:text-sm">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-3 md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />    
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="Smile Memoji" className="size-20"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

