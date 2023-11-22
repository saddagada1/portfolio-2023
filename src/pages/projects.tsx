import Avatar from "boring-avatars";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Pixels from "~/components/pixels";
import Socials from "~/components/socials";
import SplitFlap from "~/components/split-flap";
import { projects } from "~/lib/constants";
import { cn } from "~/lib/utils";

const Projects: NextPage = ({}) => {
  const [project, setProject] = useState(projects[0]);
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>Saivamsi Addagada - Projects</title>
      </Head>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-1 flex-col gap-2">
          {projects.map((project) => (
            <div key={project.id} className="section grid flex-1 grid-cols-3 ">
              <div className="col-span-3 flex flex-1 flex-col justify-between lg:col-span-2">
                <h1 className="h1">
                  <span className="font-thin text-destructive">
                    {(project.id / 100).toString().replace(".", "")}&nbsp;
                  </span>
                  {project.name}
                </h1>
                <div className="flex gap-2">
                  {project.links.map(({ link, href }, index) => (
                    <Link
                      key={index}
                      href={href}
                      className={cn(
                        "text-sm hover:underline",
                        index !== 0 && "border-l pl-2",
                      )}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative hidden overflow-hidden lg:block">
                {project.bg ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={project.bg} />
                  </video>
                ) : (
                  <div className="aspect-video h-full overflow-hidden">
                    <Avatar size={400} name={project.name} square />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <Socials />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <SplitFlap
          target="pr*jects"
          identifier="projects"
          className="text-3xl md:text-7xl"
        />
        <div className="section relative flex h-full flex-col p-0">
          <Pixels
            key={theme}
            onComplete={(i) => setProject(projects[i])}
            delay={5}
          />
          <h1 className="section-label absolute left-0 top-0 z-30 m-4">
            {project?.name}
          </h1>
          <p className="button-label absolute bottom-0 right-0 z-30 m-4">
            {project && (project.id / 100).toString().replace(".", "")}
          </p>
        </div>
        <div className="section flex flex-1 flex-col items-center justify-center lg:h-[210px] lg:flex-none">
          <h1 className="section-label mb-8 flex-none">Summary</h1>
          <p className="w-5/6 flex-1 text-sm font-normal text-destructive">
            {project?.summary}
          </p>
        </div>
      </div>
    </>
  );
};
export default Projects;
