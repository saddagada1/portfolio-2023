import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Orbs from "~/components/orbs";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Button } from "~/components/ui/button";
import ContactSection from "~/components/contactSection";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useLayoutEffect(() => {
    gsap.context(() => {
      const heroTimeline = gsap.timeline();

      heroTimeline
        .fromTo(
          `.welcome`,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            ease: "power4.inOut",
            duration: 1,
          },
        )
        .to(`.welcome`, {
          opacity: 0,
          ease: "power4.inOut",
          duration: 1,
        })
        .fromTo(
          `.hero-text`,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            ease: "power4.inOut",
            duration: 1,
          },
        )
        .fromTo(
          `.name-letter`,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power4.inOut",
            duration: 1,
            stagger: {
              each: 0.03,
            },
          },
          "-=1",
        );

      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.about`,
          start: "center bottom",
        },
      });

      aboutTimeline.fromTo(
        ".about",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power4.inOut",
          duration: 1,
          stagger: {
            each: 0.3,
          },
        },
      );

      const projectsTitleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.projects-letter`,
          start: "top bottom",
        },
      });

      projectsTitleTimeline
        .fromTo(
          ".projects-letter",
          { yPercent: 50, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power4.inOut",
            duration: 1,
            stagger: {
              each: 0.03,
            },
          },
        )
        .fromTo(
          `.projects-link`,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power4.inOut",
            duration: 1,
          },
          "-=1",
        );

      const project1Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.project-1`,
          start: "top bottom",
        },
      });

      project1Timeline.fromTo(
        `.project-1`,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
          duration: 1,
        },
      );

      const project2Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.project-2`,
          start: "top bottom",
        },
      });

      project2Timeline.fromTo(
        `.project-2`,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
          duration: 1,
        },
      );

      const stackTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.stack`,
          start: "center bottom",
        },
      });

      stackTimeline.fromTo(
        `.stack`,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
          duration: 1,
        },
      );

      const contactTitleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.contacts-letter`,
          start: "top bottom",
        },
      });

      contactTitleTimeline.fromTo(
        ".contacts-letter",
        { yPercent: 50, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power4.inOut",
          duration: 1,
          stagger: {
            each: 0.03,
          },
        },
      );

      const contactFormTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.contact-form`,
          start: "center bottom",
        },
      });

      contactFormTimeline.fromTo(
        ".contact-form",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
          duration: 1,
        },
      );

      const socialButtonTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.social-button`,
          start: "bottom bottom",
        },
      });

      socialButtonTimeline.fromTo(
        ".social-button",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power4.inOut",
          duration: 1,
          stagger: {
            each: 0.1,
          },
        },
      );
    });
  });
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | Portfolio</title>
      </Head>
      <main className="flex-1">
        <Orbs className="-z-10 h-[100dvh]" />
        <section className="absolute left-0 top-0 h-[100dvh] w-full pt-20">
          <p className="hero-text text p w-2/3 opacity-0 md:w-1/2 2xl:w-1/4">
            An independent, creative, full stack developer with a passion for
            crafting exceptional digital experiences and creating art through
            code.
          </p>
          <h1 className="p absolute bottom-0 whitespace-pre text-[16vw] font-medium leading-none lg:font-normal hr:pb-0">
            {"saivamsi".split("").map((l, i) => (
              <span key={i} className="name-letter inline-block opacity-0">
                {l}
              </span>
            ))}
          </h1>
          <p className="welcome text-strong absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0">
            Welcome
          </p>
        </section>
        <section className="p relative h-[30vh] border-b xl:h-[50vh]">
          <div className="p absolute bottom-0 right-0 flex justify-end hr:right-[10%]">
            <h3 className="text-strong about w-1/3">Who I am</h3>
            <p className="text about w-2/3 text-right md:w-1/2">
              A multidisciplinary creator, with over 3 years of experience,
              crafting and managing remarkable projects for remarkable
              individuals across various disciplines.
              <span className="block pt-8">Based out of Toronto, CA.</span>
            </p>
          </div>
        </section>
        <section className="p space saturate-50">
          <div className="p flex items-end justify-between px-0">
            <h2 className="whitespace-pre text-[8vw] font-medium lg:font-normal">
              {"what i've made".split("").map((l, i) => (
                <span
                  key={i}
                  className="projects-letter inline-block opacity-0"
                >
                  {l}
                </span>
              ))}
            </h2>
            <Button
              variant="link"
              asChild
              className="projects-link h-fit p-0 opacity-0"
            >
              <Link className="text-strong" href="/projects">
                <ArrowUpRight
                  strokeWidth={0.5}
                  className="h-[10vw] w-[10vw] transition-transform will-change-transform hover:rotate-45"
                />
              </Link>
            </Button>
          </div>
          <div className="gap flex flex-col">
            <div className="project-1 flex flex-1 flex-col lg:flex-row">
              <div className="p gap relative flex flex-1 flex-col border">
                <div className="relative aspect-video">
                  <Image
                    src="/media/remaster/2.webp"
                    alt="remaster"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/media/remaster/1.webp"
                    alt="remaster"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="p border border-t-0 lg:border-l-0 lg:border-t">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="/media/remaster/4.webp"
                      alt="remaster"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p gap flex border border-t-0 lg:border-l-0">
                  <div className="relative aspect-video w-3/4">
                    <Image
                      src="/media/remaster/3.webp"
                      alt="remaster"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video w-1/4">
                    <Image
                      src="/media/remaster/mobile-1.webp"
                      alt="remaster"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="p flex flex-1 items-end justify-end border border-t-0 bg-background lg:border-l-0">
                  <Button variant="link" className="h-fit py-0" asChild>
                    <Link
                      className="text-strong"
                      href="https://remaster.saivamsi.ca"
                    >
                      Remaster&nbsp;2023
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="project-2 flex flex-1 flex-col">
              <div className="p gap flex border">
                <div className="relative aspect-video w-3/4 border">
                  <Image
                    src="/media/bella/1.webp"
                    alt="bella"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video w-1/4 border">
                  <Image
                    src="/media/bella/mobile-1.webp"
                    alt="bella"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="p gap flex flex-col border border-t-0 lg:flex-row">
                <div className="relative aspect-video flex-1 border">
                  <Image
                    src="/media/bella/2.webp"
                    alt="bella"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video flex-1 border">
                  <Image
                    src="/media/bella/3.webp"
                    alt="bella"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video flex-1 border">
                  <Image
                    src="/media/bella/4.webp"
                    alt="bella"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p border border-t-0 bg-background text-right">
                <Button variant="link" className="h-fit py-0" asChild>
                  <Link
                    className="text-strong"
                    href="https://bella.saivamsi.ca"
                  >
                    Bella&nbsp;2023
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="p space stack grid grid-cols-3 border-b pl-[5%]">
          <h3 className="text-strong basis-1/3 sm:flex-1">How I did it</h3>
          <ul className="text hidden md:block">
            <li>Languages</li>
            <li>Frameworks</li>
            <li>Databases</li>
            <li>Architecture</li>
            <li>Services</li>
            <li>Miscellaneous</li>
          </ul>
          <ul className="text col-span-2 md:col-span-1">
            <li>Java, Javascript, Typescript, Python</li>
            <li>Spring Boot, NodeJS, NextJS, React Native</li>
            <li>PostgreSQL, MySQL, MongoDB, Redis</li>
            <li>REST, GraphQL, tRPC</li>
            <li>AWS, Google Cloud Platform, Vercel</li>
            <li>Git, Unit Testing, SEO, Prisma, Tailwind</li>
          </ul>
        </section>
        <ContactSection className="space space-below" />
      </main>
    </>
  );
};

export default Index;
