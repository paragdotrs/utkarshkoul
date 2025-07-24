import BetaMLSA from "@/assets/images/LevelBeta.png";
import DesignHub from "@/assets/images/designhub.png";
import SIH from "@/assets/images/SIH.png";
import Hacktober from "@/assets/images/hacktober.png";
import Bertelsmann from "@/assets/images/Bertelsmann.png";
import AtCoder from "../../public/atcoder.png"
import WebCraft from "../../public/Webcraft_logo.png"
import GenAI from "../../public/IIT delhi.png"
import Ethical from "../../public/ethical-hacker.png"
import RaspberryPi from "../../public/rasberry-pi.png"
import Desingathon from "../../public/designathon.png"
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

export const Achievements = [
  {
    title: "AtCoder Competition - Rank 7/900+",
    description: "Secured Rank 7 out of 900+ participants in an online competition hosted on Discord by Naohiro Takahashi, CEO of AtCoder! It was an incredible experience to test my skills against so many talented individuals and learn from this challenging and engaging event. Grateful for the opportunity and looking forward to more such experiences!",
    year: "2024",
    icon: AtCoder,
  },
  {
    title: "Webcraft Competition Winner - 1st Position",
    description: "Secured 1st Position in the Webcraft competition (Web Development) at Enovators, held in Noida! It was an incredible journey to showcase my web development skills and compete with talented participants. Grateful for the recognition and the opportunity to learn and grow.",
    year: "2024",
    icon: WebCraft,
  },
  {
    title: "Generative AI Certification - IIT Delhi",
    description: "Successfully completed the Generative AI certification from IIT Delhi! Grateful for the opportunity to deepen my knowledge in this transformative field. Looking forward to applying these insights and continuing the journey of innovation in artificial intelligence and machine learning.",
    year: "2024",
    icon: GenAI,
  },
  {
    title: "Ethical Hacking Certificate - IIT Delhi",
    description: "Successfully completed a Certificate in Ethical Hacking after attending a workshop held on 24th & 25th August 2024 at IIT Delhi. The workshop was organized by World Techocon in association with Rendezvous 2024, providing deep insights into cybersecurity, ethical hacking, and vulnerability testing.",
    year: "2024",
    icon: Ethical,
  },
  {
    title: "Raspberry Pi Workshop & Competition - IIT Delhi",
    description: "Participated in an insightful workshop and competition on Raspberry Pi, hosted by IIT Delhi! Grateful for the opportunity to learn, innovate, and grow alongside brilliant minds. Focused on leveraging technology for impactful solutions through hands-on experience with embedded systems.",
    year: "2024",
    icon: RaspberryPi,
  },
  {
    title: "Designathon Winner - UI/UX Design",
    description: "Won 2nd place in a design competition for creating an innovative mobile app interface with exceptional user experience design.",
    year: "2024",
    icon: Desingathon,
  },
];


export const AchivementsSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-full md:max-w-4xl lg:max-w-[100rem] mx-auto">
        <SectionHeader
          eyebrow="Achivements"
          title="What I have accomplished so far?"
          description="Building amazing web experiences has been my passion throughout school. Each project and achievement has taught me something new about frontend development."
        />

        <div
          className="mt-12 flex overflow-x-clip py-4 -my-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:70s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {Achievements.map((achievement) => (
                  <Card
                    key={achievement.title}
                    className="max-w-[23rem] md:max-w-md p-6 md:p-8 lg:max-w-lg hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 lg:size-20">
                        <Image
                          src={achievement.icon}
                          alt={achievement.title}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold lg:text-2xl">
                          {achievement.title}
                        </div>
                        <div className="text-sm text-white/40 lg:text-lg">
                          {achievement.year}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm text-justify md:text-base lg:text-lg">
                      {achievement.description}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
