import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useIsClient } from "usehooks-ts";
import { cn, rand } from "~/lib/utils";

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
  },
];

const skills = [
  { experience: "4 Years", skills: ["HTML5", "CSS3"] },
  {
    experience: "3 Years",
    skills: ["Javascript", "NodeJS", "React", "REST API's"],
  },
  {
    experience: "2 Years",
    skills: [
      "Typescript",
      "SEO",
      "SQL",
      "Redis",
      "GraphQL API's",
      "Authentication",
    ],
  },
  { experience: "1 Year", skills: ["tRPC", "AWS", "Serverless"] },
  { experience: "Under a Year", skills: ["WebGL", "ThreeJS"] },
];

const stack = [
  {
    name: "Frontend",
    stack: ["Typescript", "NextJS", "React Native", "TailwindCSS", "WebGL"],
  },
  { name: "Backend", stack: ["NodeJS", "Next API Routes", "tRPC"] },
  { name: "Storage", stack: ["MySQL", "PostgreSQL", "Redis", "S3"] },
  {
    name: "Services",
    stack: ["Vercel", "Upstash", "Neon", "Planetscale", "Resend", "AWS"],
  },
];

const essentials = [
  "https://www.youtube.com/watch?v=DYHng61lftA&ab_channel=CarreroQuirogaDanielAlejandro",
  "https://www.youtube.com/watch?v=6TWdLqER014&ab_channel=WalterCalloni",
  "https://www.youtube.com/watch?v=cJunCsrhJjg&ab_channel=JimiHendrixVEVO",
  "https://www.youtube.com/watch?v=NWJwj4tZMOU&ab_channel=PaulRatcliff",
  "https://www.youtube.com/watch?v=3c_8VUL5jks&ab_channel=stevierayvaughnVEVO",
  "https://www.youtube.com/watch?v=VSLc0tCnOrM&ab_channel=stevie%27sblues",
  "https://www.youtube.com/watch?v=hHHY3eRUMsM&ab_channel=feedbackbro",
  "https://www.youtube.com/watch?v=AU432SxopNM&ab_channel=HoraceWinkk",
  "https://www.youtube.com/watch?v=PDLFoKwTtk4&ab_channel=belinleelo",
  "https://www.youtube.com/watch?v=WZn9QZykx10&ab_channel=neilyoungchannel",
  "https://www.youtube.com/watch?v=OuVIJlSDOs0&ab_channel=neilyoungchannel",
  "https://www.youtube.com/watch?v=pKwQlm-wldA&ab_channel=EricClaptonVEVO",
  "https://www.youtube.com/watch?v=P701paKEMXs&ab_channel=EchelonEntertainment",
  "https://www.youtube.com/watch?v=fJlkkRub6MU&ab_channel=Hayato0313",
  "https://www.youtube.com/watch?v=ZPwCnNwhgFA&ab_channel=johnmayerVEVO",
  "https://www.youtube.com/watch?v=yVrMqvu2_fE&ab_channel=tavarinho123",
];

const About: NextPage = ({}) => {
  const isWindow = useIsClient();
  const [showIzzy, setShowIzzy] = useState(false);
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | About</title>
      </Head>
      <main className="flex w-full flex-col gap-2 pb-2 lg:grid lg:grid-cols-6 lg:grid-rows-6 lg:pb-0">
        <div className="col-span-4 row-span-2 flex flex-col gap-2 border p-2 lg:flex-row">
          <div className="relative aspect-square h-full">
            <Image
              unoptimized
              priority
              src={showIzzy ? "/media/izzy.jpg" : "/media/self.jpg"}
              alt="Me"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col text-sm">
            <h1 className="section-label mb-8">Summary</h1>
            <p>
              I&apos;m a 25-year-old developer proficient in both Typescript and
              Javascript, with my home base in Toronto, ON. My background
              includes over two years of hands-on experience in developing
              full-stack applications and projects. I&apos;m well-versed in
              popular technologies like NextJS, NodeJS, MySQL, AWS, and more.
              While I briefly pursued a computer science major at university, my
              journey has primarily been one of self-education. I&apos;ve
              acquired the bulk of my knowledge through online courses and
              tutorials, constantly pushing my boundaries by tackling
              progressively more complex projects. My current aspirations
              revolve around developing my skills and gaining professional
              experience, with the aim of branching out into other domains of
              programming and software development. As for what lies beyond
              that, the future remains an open question.
            </p>
          </div>
        </div>
        <div className="row-span-3 flex flex-col border p-2 text-sm">
          <h1 className="section-label mb-8">Skills</h1>
          {skills.map((section, index) => (
            <div
              key={index}
              className={cn("grid grid-cols-2", index !== 0 && "mt-2")}
            >
              <p className="text-destructive">{section.experience}&nbsp;</p>
              <ul>
                {section.skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="row-span-3 flex flex-col border p-2 text-sm">
          <h1 className="section-label mb-8">Stack</h1>
          {stack.map((area, index) => (
            <div
              key={index}
              className={cn("grid grid-cols-2", index !== 0 && "mt-2")}
            >
              <p className="text-destructive">{area.name}&nbsp;</p>
              <ul>
                {area.stack.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-4 row-span-3 flex flex-col border p-2 text-sm">
          <h1 className="section-label mb-8">Experience</h1>
          {experience.map((job, index) => (
            <div
              key={index}
              className={cn("grid grid-cols-6", index !== 0 && "mt-8")}
            >
              <p className="text-destructive">
                {job.end}
                <br />
                {job.start}
              </p>
              <div className="col-span-2">
                <p>{job.title}</p>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
              <div className="col-span-3">
                {job.description.map((point, index) => (
                  <p key={index}>{point}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 row-span-2 flex flex-col border p-2">
          <h1 className="section-label mb-8">Essentials</h1>
          <div className="aspect-video w-full">
            {isWindow && (
              <ReactPlayer
                width="100%"
                height="100%"
                url={essentials[rand(0, essentials.length - 1)]}
                config={{
                  youtube: { playerVars: { controls: 0, showInfo: 0 } },
                }}
              />
            )}
          </div>
        </div>
        <div
          onClick={() => setShowIzzy(!showIzzy)}
          className="order-first col-span-6 cursor-pointer overflow-hidden border p-2 lg:order-none"
        >
          <h1 className="marquee text-2xl font-bold uppercase lg:text-9xl">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index}>
                &nbsp;Hello I&apos;m{" "}
                <span className="text-destructive">
                  {showIzzy ? "Izzy" : "Sai"}
                </span>
              </span>
            ))}
          </h1>
        </div>
      </main>
    </>
  );
};
export default About;
