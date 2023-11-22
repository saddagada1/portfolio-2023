import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Orbs from "~/components/orbs";
import Socials from "~/components/socials";
import SplitFlap from "~/components/split-flap";

const About: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | About</title>
      </Head>
      <div className="flex flex-1 flex-col gap-2">
        <Socials />
        <div className="section flex flex-col items-center">
          <h1 className="section-label mb-8">Summary</h1>
          <p className="w-5/6 text-sm font-normal text-destructive">
            I&apos;m a 25-year-old developer proficient in both Typescript and
            Javascript, with my home base in Toronto, ON. My background includes
            over two years of hands-on experience in developing full-stack
            applications and projects. I&apos;m well-versed in popular
            technologies like NextJS, NodeJS, MySQL, AWS, and more. While I
            briefly pursued a computer science major at university, my journey
            has primarily been one of self-education. I&apos;ve acquired the
            bulk of my knowledge through online courses and tutorials,
            constantly pushing my boundaries by tackling progressively more
            complex{" "}
            <Link href="/projects" className="underline">
              projects
            </Link>
            . My current aspirations revolve around developing my skills and
            gaining professional experience, with the aim of branching out into
            other domains of programming and software development. As for what
            lies beyond that, the future remains an open question.
          </p>
        </div>
        <div className="section relative flex-1 p-0">
          <Orbs
            identifier="about-orb"
            bounds={50}
            blur="backdrop-blur-2xl"
            grain
            className="aspect-square h-full w-full lg:aspect-auto"
          />
          <h1 className="section-label absolute left-0 top-0 z-30 m-4">Me</h1>
          <p className="button-label absolute bottom-0 right-0 z-30 m-4">
            At Any Given Moment
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col-reverse gap-2 lg:flex-col">
        <div className="section relative aspect-square w-full p-0 lg:aspect-auto lg:h-full lg:w-auto">
          <Image
            unoptimized
            priority
            src="/media/self.JPG"
            alt="Me"
            fill
            className="object-cover object-top grayscale"
          />
        </div>
        <SplitFlap
          target="about*me"
          identifier="about"
          className="text-3xl md:text-7xl"
        />
      </div>
    </>
  );
};

export default About;
