import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Orbs from "~/components/orbs";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Button } from "~/components/ui/button";
import ContactSection from "~/components/contactSection";
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | Portfolio</title>
      </Head>
      <main className="overflow-x-hidden">
        <Orbs className="-z-10 h-screen" />
        <section className="absolute left-0 top-0 h-screen w-full pt-20">
          <p className="text p w-2/3 md:w-1/2 2xl:w-1/4">
            An independent, creative, full stack developer with a passion for
            crafting exceptional digital experiences and creating art through
            code.
          </p>
          <h1 className="p absolute bottom-0 whitespace-pre text-[16vw] font-medium leading-none lg:font-normal hr:pb-0">
            {"saivamsi".split("").map((l, i) => (
              <span key={i} className="letter inline-block">
                {l}
              </span>
            ))}
          </h1>
        </section>
        <section className="p relative h-[30vh] border-b xl:h-[50vh]">
          <div className="p absolute bottom-0 right-0 flex justify-end hr:right-[10%]">
            <h3 className="text-strong w-1/3">Who I am</h3>
            <p className="text w-2/3 text-right md:w-1/2">
              A multidisciplinary creator, with over 3 years of experience,
              crafting and managing remarkable projects for remarkable
              individuals across various disciplines.
              <span className="block pt-8">Based out of Toronto, CA.</span>
            </p>
          </div>
        </section>
        <section className="p space">
          <div className="p flex items-end justify-between px-0">
            <h2 className="overflow-hidden whitespace-pre text-[8vw] font-medium lg:font-normal">
              {"what i've done".split("").map((l, i) => (
                <span key={i} className="letter inline-block">
                  {l}
                </span>
              ))}
            </h2>
            <ArrowUpRight strokeWidth={0.5} className="h-[10vw] w-[10vw]" />
          </div>
          <div className="gap flex flex-col">
            <div className="flex flex-1 flex-col lg:flex-row">
              <div className="p gap relative flex flex-1 flex-col border">
                <div className="relative aspect-video">
                  <Image
                    src="/media/remaster/2.png"
                    alt="remaster"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/media/remaster/1.png"
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
                      src="/media/remaster/4.png"
                      alt="remaster"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p gap flex border border-t-0 lg:border-l-0">
                  <div className="relative aspect-video w-3/4">
                    <Image
                      src="/media/remaster/3.png"
                      alt="remaster"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video w-1/4">
                    <Image
                      src="/media/remaster/mobile-1.png"
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
            <div className="flex flex-1 flex-col">
              <div className="p gap flex border">
                <div className="relative aspect-video w-3/4 border">
                  <Image
                    src="/media/bella/1.png"
                    alt="bella"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video w-1/4 border">
                  <Image
                    src="/media/bella/mobile-1.png"
                    alt="bella"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="p gap flex flex-col border border-t-0 lg:flex-row">
                <div className="relative aspect-video flex-1 border">
                  <Image
                    src="/media/bella/2.png"
                    alt="bella"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video flex-1 border">
                  <Image
                    src="/media/bella/3.png"
                    alt="bella"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video flex-1 border">
                  <Image
                    src="/media/bella/4.png"
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
        <section className="p space grid grid-cols-3 border-b pl-[5%]">
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
            <li>Spring Boot, NodeJS, React, NextJS, React Native</li>
            <li>PostgreSQL, MySQL, MongoDB, Redis</li>
            <li>REST, GraphQL, tRPC</li>
            <li>AWS, Google Cloud Platform, Vercel</li>
            <li>Git, Unit Testing, SEO, Prisma, Tailwind</li>
          </ul>
        </section>
        <ContactSection className="space" />
      </main>
    </>
  );
};

export default Index;
