import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { projects } from "~/lib/constants";
import { cn } from "~/lib/utils";

const Projects: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Saivamsi Addagada - Projects</title>
      </Head>
      <main className="p space-below flex-1 pt-20">
        <h2 className="p pl-0 text-[8vw] font-medium lg:font-normal">
          what i&apos;ve made
        </h2>
        <div className="gap flex flex-col">
          {projects.map((p, i) => (
            <div key={i} className="p border">
              <h1 className="text-strong">{p.name}</h1>
              <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
                <p className="text">{p.stack.join(", ")}</p>
                <div className="gap flex items-center">
                  {p.links.map((l, li) => (
                    <Button
                      className={cn("h-fit py-0", li === 0 && "pl-0")}
                      key={li}
                      variant="link"
                      asChild
                    >
                      <Link className="text-strong" href={l.href}>
                        {l.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
export default Projects;
