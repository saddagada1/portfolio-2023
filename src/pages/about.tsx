import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | About</title>
      </Head>
      <main className="p space-below flex-1 pt-20">
        <h2 className="p pl-0 text-[8vw] font-medium lg:font-normal">
          a little about me
        </h2>
        <div className="gap flex flex-col lg:flex-row">
          <div className="relative h-[600px] w-full saturate-50 lg:w-1/3">
            <Image
              src="/media/self.jpg"
              alt="moi"
              fill
              className="border object-cover object-top"
            />
          </div>
          <div className="gap flex aspect-video w-full flex-col lg:w-1/2">
            <h2 className="text-strong">Hi, my name is Saivamsi Addagada.</h2>
            <p className="text">But you can call me Sai.</p>
            <p className="text">
              I&apos;m a 25-year-old developer proficient in Java, Javascript
              and Python, based out of Toronto, ON. My background includes over
              3 years of hands-on experience building full-stack applications
              and projects. I&apos;m well-versed in popular technologies like
              Spring Boot, NextJS, NodeJS, MySQL, AWS, and more. While I briefly
              pursued a computer science major at university, I am primarily
              self taught. I&apos;ve acquired the bulk of my knowledge through
              online courses and tutorials, constantly pushing my boundaries by
              tackling progressively more complex projects. My current
              aspirations revolve around developing my skills and gaining
              professional experience, with the aim of branching out into other
              domains of programming and software development. As for what lies
              beyond that, the future remains open.
            </p>
            <p className="text">
              Currently freelancing / looking for a full time gig
            </p>
            <div className="grid grid-cols-3">
              <ul className="text">
                <li>Languages</li>
                <li>Frameworks</li>
                <li>Databases</li>
                <li>Architecture</li>
                <li>Services</li>
                <li>Miscellaneous</li>
              </ul>
              <ul className="text col-span-2">
                <li>Java, Javascript, Typescript, Python</li>
                <li>Spring Boot, NodeJS, NextJS, React Native</li>
                <li>PostgreSQL, MySQL, MongoDB, Redis</li>
                <li>REST, GraphQL, tRPC</li>
                <li>AWS, Google Cloud Platform, Vercel</li>
                <li>Git, Unit Testing, SEO, Prisma, Tailwind</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
