import { Github, Globe, MoveLeft, MoveRight } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Pixels from "~/components/pixels";
import { Button } from "~/components/ui/button";
import { projects } from "~/lib/constants";
import { cn } from "~/lib/utils";

const Projects: NextPage = ({}) => {
  const [project, setProject] = useState(projects[0]);
  return (
    <>
      <Head>
        <title>Saivamsi Addagada - Projects</title>
      </Head>
      <main className="flex flex-1 flex-col">
        <div className="flex items-center border-b">
          <h1 className="h1 flex-1 p-2 uppercase">
            <span className="text-destructive">Pro</span>jects
          </h1>
          <div className="flex h-full flex-col hr:flex-1 hr:flex-row">
            <Button
              onClick={() => {
                if (!project) return;
                if (project.id === 1) {
                  setProject(projects[projects.length - 1]);
                } else {
                  setProject(projects[project.id - 2]);
                }
              }}
              variant="outline"
              size="nav"
              className="border-r-0 border-t-0 hr:border-b-0 hr:border-r"
            >
              <p className="section-label">Previous</p>
              <MoveLeft strokeWidth={0.5} className="icon" />
            </Button>
            <Button
              onClick={() => {
                if (!project) return;
                if (project.id === projects.length) {
                  setProject(projects[0]);
                } else {
                  setProject(projects[project.id]);
                }
              }}
              variant="outline"
              size="nav"
              className="border-y-0 border-r-0 hr:border-0"
            >
              <p className="section-label">Next</p>
              <MoveRight strokeWidth={0.5} className="icon" />
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col hr:flex-row-reverse">
          <Pixels glyph={project?.glyph} />
          <div className="flex flex-1 flex-col border-t hr:border-r hr:border-t-0">
            <div className="flex flex-1 flex-col justify-end p-2">
              <h1 className="h2">{project?.name}</h1>
              <p className="p hr:w-5/6">{project?.summary}</p>
            </div>
            <div className="flex h-20 border-t hr:h-40">
              {project?.links.map(({ link, type, href }, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="nav"
                  asChild
                  className={cn(
                    index !== 0 ? "border-y-0 border-r-0" : "border-0",
                  )}
                >
                  <Link href={href}>
                    <p className="section-label">{link}</p>
                    {type === "Github" ? (
                      <Github strokeWidth={0.5} className="icon" />
                    ) : (
                      <Globe strokeWidth={0.5} className="icon" />
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Projects;
