import { ChevronsDown } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import FilterTransition from "~/components/filterTransition";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { useShuffleText } from "~/lib/hooks";

const experience = [
  {
    company: "Uncrafted Design",
    title: "Professional Development",
    location: "Toronto, ON",
    start: "January 2022",
    end: "Present",
    description: [
      `Learning industry standard technologies and developing my understanding
    of core web application properties.`,
      `Creating personal projects that reflect my progress and showcase my
    proficiency and skills.`,
    ],
    image: "/media/uncrafted-gif.gif",
  },
  {
    company: "Integrity IT Solutions",
    title: "IT Field Technician",
    location: "Toronto, ON",
    start: "March 2019",
    end: "January 2022",
    description: [
      `Working in partnership with Telus Communications; completing Kroll
      software setups, workflow and upgrades at contracted pharmacies.`,
      `Setting up network, computers, peripherals and software in compliance
      with Telus and Integrity protocols.`,
      `Completing thorough check of software to ensure peripherals are
      communicating correctly and pharmacists are able to fill prescriptions and
      carry out all necessary tasks.`,
      `Recording and logging any issues raised during install and compiling a
      complete report of the install to be placed under the client's record.`,
    ],
    image: "/media/it-gif.gif",
  },
];

const skills = [
  { name: "HTML5", stack: ["None"], years: "Four" },
  { name: "CSS3", stack: ["Tailwind"], years: "Four" },
  { name: "Javascript", stack: ["None"], years: "Three" },
  { name: "NodeJS", stack: ["None"], years: "Three" },
  {
    name: "React",
    stack: ["Vanilla", "NextJS", "React Native"],
    years: "Three",
  },
  { name: "REST", stack: ["Express", "Next API Routes"], years: "Three" },
  { name: "SEO", stack: ["None"], years: "Two" },
  { name: "Typescript", stack: ["None"], years: "Two" },
  {
    name: "SQL / DB's",
    stack: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
    years: "Two",
  },
  { name: "ORMs", stack: ["Prisma", "TypeORM"], years: "Two" },
  { name: "GraphQL", stack: ["TypeGraphQL", "GraphQLCodegen"], years: "Two" },
  {
    name: "Authentication",
    stack: ["Sessions", "JWT", "NextAuth"],
    years: "Two",
  },
  { name: "tRPC", stack: ["T3"], years: "One" },
  { name: "AWS", stack: ["S3", "EC2", "Cloudfront"], years: "One" },
  {
    name: "Serverless",
    stack: ["Vercel", "Planetscale", "Upstash"],
    years: "One",
  },
];

const About: NextPage = ({}) => {
  const [shuffle, setShuffle] = useState(false);
  const [filterIndex, setFilterIndex] = useState(0);
  const filter = useShuffleText({
    data: ["Experience", "Skills", "Self"],
    defaultValue: "Experience",
    manual: shuffle,
    onShuffle: (index) => {
      setFilterIndex(index);
      setShuffle(false);
    },
    shuffleDuration: 500,
  });
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | About</title>
      </Head>
      <main
        style={{ perspective: "1080px" }}
        className="relative z-10 flex flex-1 flex-col overflow-hidden px-8 pb-8 pt-16"
      >
        <h1 className="h1 mb-8 text-8xl">
          My&nbsp;
          <button
            onClick={() => setShuffle(true)}
            className="font-display font-thin text-destructive focus:outline-none"
          >
            {filter}
            <ChevronsDown className="inline-block animate-bounce" />
          </button>
        </h1>
        <ScrollArea className="h4 relative w-full flex-1 overflow-hidden">
          <FilterTransition transition={shuffle} />
          {filterIndex === 0 ? (
            <>
              <div className="relative grid grid-cols-5 pb-2">
                <p className="h4">(Dates)</p>
                <p className="h4">(Job)</p>
                <p className="h4 col-start-4">(Description)</p>
                <Separator className="absolute bottom-0 bg-foreground" />
              </div>
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative grid grid-cols-5 grid-rows-4 pt-2 font-medium"
                >
                  <p className="h4 row-span-4 text-destructive">
                    {job.end}
                    <br />
                    {job.start}
                  </p>
                  <div className="col-span-2 row-span-3">
                    <p className="h4">{`${job.title} / ${job.company} / ${job.location}`}</p>
                  </div>
                  <div className="col-span-2 row-span-3">
                    {job.description.map((point, index) => (
                      <p className="h4 hover:text-destructive" key={index}>
                        {point}
                      </p>
                    ))}
                  </div>
                  <Separator className="absolute bottom-0 bg-foreground" />
                </div>
              ))}
            </>
          ) : filterIndex === 1 ? (
            <>
              <div className="relative grid grid-cols-4 overflow-hidden pb-2">
                <p>(Name)</p>
                <p>(Stack)</p>
                <p>(Years)</p>
                <Separator className="absolute bottom-0 bg-foreground" />
              </div>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative grid grid-cols-4 overflow-hidden py-1"
                >
                  <p>{skill.name}&nbsp;</p>
                  <p>
                    {skill.stack.map((item, index) => (
                      <span key={index}>
                        {index !== skill.stack.length - 1 ? `${item} / ` : item}
                      </span>
                    ))}
                  </p>
                  <p className="text-destructive">{skill.years}</p>
                  <Separator className="absolute bottom-0 bg-foreground" />
                </div>
              ))}
            </>
          ) : filterIndex === 2 ? (
            <div className="flex flex-col gap-8">
              <p className="h4 ml-12 w-1/2 indent-44">
                I am a 25 year old full stack Typescript/Javascript developer
                based out of Toronto, ON. I have over 2 years of experience
                making full stack applications and projects using popular
                technologies such as NextJS, NodeJS, MySQL, AWS and more.
                Although having attended university as a computer science major
                for a short period of time, I am largely self taught. I have
                learned most of what I know through online courses and
                tutorials, and by creating more and more challenging projects as
                I progressed. My goals at the moment are to further improve my
                skills and gain experience within a professional setting;
                expanding my expertise to other fields of programming and
                software development. And then who knows what&apos;s next.
              </p>
              <div className="relative ml-auto mr-96 aspect-square w-1/5">
                <Image
                  unoptimized
                  src="/media/IMG_1525.jpg"
                  alt="izzy"
                  fill
                  className="object-cover"
                />
                <p className="absolute bottom-0 z-10 bg-background px-4">
                  Izzy
                </p>
              </div>
            </div>
          ) : null}
        </ScrollArea>
      </main>
    </>
  );
};
export default About;
