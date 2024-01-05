import gsap from "gsap";
import { AtSign, Github, Linkedin, ListTree } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useEffectOnce } from "usehooks-ts";
import Orbs from "~/components/orbs";
import { Button } from "~/components/ui/button";

const Index = () => {
  useEffectOnce(() => {
    gsap.fromTo(
      ".blank",
      {
        width: "0%",
      },
      { width: "100%", duration: 2.5, ease: "expo.inOut", delay: 2 },
    );
  });
  return (
    <>
      <Head>
        <title>Saivamsi Addagada</title>
      </Head>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex flex-1 flex-col hr:flex-row">
          <div className="relative flex-1 border-b hr:border-b-0 hr:border-r">
            <Orbs
              identifier="index-orbs"
              bounds={100}
              size="w-full hr:w-1/2"
              className="h-full"
              blur="backdrop-blur-3xl"
              grain
            />
            <h1 className="section-label absolute top-0 z-10 m-2">
              Shapes & Colours
            </h1>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col border-b p-2">
              <h1 className="section-label">Headline</h1>
              <p className="p-lg md:w-2/3">
                An independent, creative, full stack developer with a passion
                for crafting exceptional digital experiences and creating art
                through code.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 grid-rows-2">
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
        </div>
        <h1 className="border-t pt-2 text-[22.1vw] font-medium uppercase leading-[19vw] hr:flex hr:items-end hr:justify-end hr:text-[12vw] hr:leading-[10vw]">
          <span className="text-destructive">Sai</span>
          <span className="blank mb-4 hidden h-2 bg-foreground hr:block" />
          vamsi
        </h1>
      </main>
    </>
  );
};

export default Index;
