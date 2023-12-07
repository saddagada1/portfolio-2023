import { AtSign, Github, Linkedin, ListTree } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { skills, stack } from "~/lib/constants";
import { cn } from "~/lib/utils";

const About: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | About</title>
      </Head>
      <main className="flex flex-1 flex-col hr:flex-row">
        <div className="flex flex-1 flex-col">
          <div className="relative aspect-square w-full flex-1 border-b hr:aspect-auto">
            <Image
              unoptimized
              priority
              src="/media/self.JPG"
              alt="Me"
              fill
              className="object-cover object-top grayscale"
            />
          </div>
          <div className="flex flex-col border-b p-2">
            <h1 className="section-label mb-10">Summary</h1>
            <p className="p">
              I&apos;m a 25-year-old developer proficient in both Typescript and
              Javascript, with my home base in Toronto, ON. My background
              includes over two years of hands-on experience in developing
              full-stack applications and projects. I&apos;m well-versed in
              popular technologies like NextJS, NodeJS, MySQL, AWS, and more.
              While I briefly pursued a computer science major at university, I
              am primarily self taught. I&apos;ve acquired the bulk of my
              knowledge through online courses and tutorials, constantly pushing
              my boundaries by tackling progressively more complex&nbsp;
              <Link href="/projects" className="underline">
                projects
              </Link>
              . My current aspirations revolve around developing my skills and
              gaining professional experience, with the aim of branching out
              into other domains of programming and software development. As for
              what lies beyond that, the future remains open.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col border-l">
          <h1 className="h1 hidden whitespace-nowrap border-b p-2 uppercase hr:block">
            Me, My<span className="text-destructive">self</span> & I
          </h1>
          <div className="flex flex-1 flex-col border-b hr:flex-row">
            <div className="flex-1 p-2">
              <h1 className="section-label mb-10">Skills</h1>
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
            <div className="flex-1 border-t p-2 hr:border-l hr:border-t-0">
              <h1 className="section-label mb-10">Stack</h1>
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
          </div>
          <div className="grid h-40 grid-cols-2 grid-rows-2 hr:h-auto hr:basis-1/4">
            <Button
              variant="outline"
              size="nav"
              className="border-l-0 border-t-0"
              asChild
            >
              <Link href="mailto:saddagada1@gmail.com">
                <p className="section-label">Email</p>
                <AtSign strokeWidth={0.5} className="icon" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="nav"
              className="border-x-0 border-t-0"
              asChild
            >
              <Link href="https://github.com/saddagada1">
                <p className="section-label">Github</p>
                <Github strokeWidth={0.5} className="icon" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="nav"
              className="border-y-0 border-l-0"
              asChild
            >
              <Link href="https://linkedin.com/in/saivamsi-addagada-32bb80293">
                <p className="section-label">LinkedIn</p>
                <Linkedin strokeWidth={0.5} className="icon" />
              </Link>
            </Button>
            <Button variant="outline" size="nav" className="border-0" asChild>
              <Link href="utils/Saivamsi-Addagada-Resume.pdf" download>
                <p className="section-label">Resume</p>
                <ListTree strokeWidth={0.5} className="icon" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
