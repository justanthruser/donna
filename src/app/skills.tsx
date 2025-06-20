"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Social Work:",
    children:
      "I am a Social Worker with a passion for helping others. I specialize in providing support and guidance to individuals and families in need.",
  },
  {
    icon: FingerPrintIcon,
    title: "Painting",
    children:
      "I specialize in creating beautiful and functional paintings that captivate and engage viewers. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: SwatchIcon,
    title: "Design",
    children:
      "I'm well-versed in the industry's most popular design tools, including Canva, Figma, and Adobe XD.",
  },
  // {
  //   icon: HashtagIcon,
  //   title: " Web Optimization",
  //   children:
  //     "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  // },
  // {
  //   icon: EyeIcon,
  //   title: "User-Centric Design",
  //   children:
  //     "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  // },
  // {
  //   icon: DocumentTextIcon,
  //   title: "Testing and Quality Assurance",
  //   children:
  //     "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  // },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a Social Worker; I&apos;m an artist and a dreamweaver.
          Crafting immersive experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
