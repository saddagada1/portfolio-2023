import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Avatar from "boring-avatars";
import { ChevronsDown } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { useElementSize, useWindowSize } from "usehooks-ts";
import FilterTransition from "~/components/filterTransition";
import { useShuffleText } from "~/lib/hooks";
import { cn } from "~/lib/utils";

enum Types {
  project = "Project",
  experiment = "Experiment",
  resource = "Resource",
}

enum Links {
  git = "Github",
  web = "Website",
  about = "About",
}

const projects = [
  {
    id: 1,
    name: "Bella",
    type: "project",
    bg: "/media/bella-hero.mp4",
    links: [
      { link: "git", href: "https://github.com/saddagada1/bella-t3" },
      { link: "web", href: "https://bella.saivamsi.ca" },
      // { link: "about", href: "/portfolio/bella" },
    ],
  },
  {
    id: 2,
    name: "Sloopy",
    type: "project",
    bg: "/media/sloopy-hero.mp4",
    links: [
      { link: "git", href: "https://github.com/saddagada1/sloopy" },
      { link: "web", href: "https://sloopy.saivamsi.ca" },
      // { link: "about", href: "/portfolio/sloopy" },
    ],
  },
  {
    id: 3,
    name: "JWT Auth",
    type: "resource",
    links: [
      {
        link: "git",
        href: "https://github.com/saddagada1/graphql-jwt-auth-boiler-plate",
      },
      // { link: "about", href: "/portfolio/auth" },
    ],
  },
  {
    id: 4,
    name: "Session Auth",
    type: "resource",
    links: [
      {
        link: "git",
        href: "https://github.com/saddagada1/graphql-session-auth-boiler-plate",
      },
      { link: "about", href: "/portfolio/auth" },
    ],
  },
  {
    id: 5,
    name: "Progres",
    type: "experiment",
    links: [
      {
        link: "git",
        href: "https://github.com/saddagada1/progres",
      },
    ],
  },
  // {
  //   id: 6,
  //   name: "Chord Diagrams",
  //   type: "experiment",
  //   links: [
  //     {
  //       link: "git",
  //       href: "https://github.com/saddagada1/chord-diagrams",
  //     },
  //   ],
  // },
  {
    id: 6,
    name: "Uncrafted Design",
    type: "experiment",
    links: [
      {
        link: "git",
        href: "https://github.com/saddagada1/uncrafted-design",
      },
    ],
  },
];

const Portfolio: NextPage = ({}) => {
  const [container, { width, height }] = useElementSize();
  const { width: windowWidth } = useWindowSize();
  const splideRef = useRef<Splide>(null!);
  const [shuffle, setShuffle] = useState(false);
  const [disabled, setDisabled] = useState<string | null>("left");
  const [filterIndex, setFilterIndex] = useState(0);
  const filter = useShuffleText({
    data: ["Works", "Projects", "Resources", "Experiments"],
    defaultValue: "Works",
    manual: shuffle,
    onShuffle: (index) => {
      setFilterIndex(index);
      setShuffle(false);
    },
    shuffleDuration: 500,
  });

  const data = useMemo(() => {
    if (filterIndex === 0) {
      return projects;
    }
    return projects.filter(
      (item) => Object.keys(Types).indexOf(item.type) + 1 === filterIndex,
    );
  }, [filterIndex]);

  return (
    <>
      <Head>
        <title>Saivamsi Addagada | Portfolio</title>
      </Head>
      <main className="relative z-10 flex-1 px-4 pb-4 pt-6 lg:px-8 lg:pb-8 lg:pt-16">
        <div className="relative h-1/2 text-right">
          <h1 className="h1 font-display text-6xl font-thin lg:text-8xl">
            Selected&nbsp;
            <button
              onClick={() => setShuffle(true)}
              className="font-sans font-medium text-destructive focus:outline-none"
            >
              {filter}
              <ChevronsDown className="inline-block animate-bounce" />
            </button>
          </h1>
          <p className="h4">
            A collection of work which reflects
            <br /> my skills and progress as a developer.
          </p>
          <div className="absolute bottom-0 flex w-full justify-between pb-4">
            <button
              disabled={disabled === "left"}
              onClick={() => splideRef.current.go("-")}
            >
              <p
                className={cn(
                  "h1",
                  disabled === "left" && "text-muted-foreground",
                )}
              >
                Prev
              </p>
            </button>
            <button
              disabled={disabled === "right"}
              onClick={() => splideRef.current.go("+")}
            >
              <p
                className={cn(
                  "h1",
                  disabled === "right" && "text-muted-foreground",
                )}
              >
                Next
              </p>
            </button>
          </div>
        </div>
        <div ref={container} className="relative h-1/2 overflow-hidden">
          <FilterTransition
            transition={shuffle}
            blurIntensity="backdrop-blur-md"
          />
          <div className="dots-pattern absolute h-full w-full" />
          <Splide
            ref={splideRef}
            options={{
              perPage: windowWidth > 1024 ? 3 : 1,
              perMove: 1,
              height,
              arrows: false,
            }}
            aria-label="Selected Works"
            onMoved={(_, index) =>
              index === 0
                ? setDisabled("left")
                : windowWidth < 1024 && index === data.length - 1
                ? setDisabled("right")
                : (windowWidth > 1024 && index === data.length - 3) ||
                  data.length < 4
                ? setDisabled("right")
                : setDisabled(null)
            }
          >
            {data.map((project, index) => (
              <SplideSlide
                key={project.id}
                style={{ height }}
                className={cn("overflow-hidden", index !== 0 && "border-l")}
              >
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
                  <Avatar
                    size={windowWidth > 1024 ? width / 3 : width}
                    name={project.name}
                    variant="marble"
                    square
                  />
                )}
                <div className="absolute bottom-0 flex h-1/2 w-full flex-col justify-between border-t p-4 text-background backdrop-blur-xl">
                  <div className="flex justify-between">
                    <h1 className="h1 w-full">
                      <span className="font-display font-thin text-destructive">
                        {(project.id / 100).toString().replace(".", "")}&nbsp;
                      </span>
                      {project.name}
                    </h1>
                    <p className="text-sm">
                      {
                        Object.values(Types)[
                          Object.keys(Types).indexOf(project.type)
                        ]
                      }
                    </p>
                  </div>
                  <div className="flex border-t">
                    {project.links.map(({ link, href }, index) => (
                      <Link
                        key={index}
                        href={href}
                        className={cn(
                          "flex-1 pt-1 hover:underline",
                          index !== 0 && "border-l pl-2",
                        )}
                      >
                        {Object.values(Links)[Object.keys(Links).indexOf(link)]}
                      </Link>
                    ))}
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </main>
    </>
  );
};
export default Portfolio;
