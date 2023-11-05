import Avatar from "boring-avatars";
import Head from "next/head";
import Link from "next/link";
import { useElementSize } from "usehooks-ts";
import { ScrollArea } from "~/components/ui/scroll-area";
import { cn } from "~/lib/utils";

const projects = [
  {
    id: 1,
    name: "Bella",
    type: "Project",
    summary:
      "An e-commerce marketplace, inspired by Depop and Grailed, with a robust array of features. This includes user authentication, account and store setup, product creation, advanced search and filtering options, product sorting, shopping cart management, checkout and secure payment processing, shipping and order management, and streamlined refund procedures. While certain elements, like the forgot password feature and the implementation of reviews and ratings, are still in development, the core functionality is fully operational and functions seamlessly.",
    bg: "/media/bella-hero.mp4",
    links: [
      { link: "Github", href: "https://github.com/saddagada1/bella-t3" },
      { link: "Live Website", href: "https://bella.saivamsi.ca" },
    ],
  },
  {
    id: 2,
    name: "Sloopy",
    type: "Project",
    summary:
      "Inspired by Ultimate Guitar, Sloopy is a platform for users to connect, learn and create compositions for all of their favourite songs. Integrated with Spotify to allow for streaming audio and a seamless connection to their personal music libraries, users are able to break down songs into loops, access and annotate keys, bpm, modes and scales, and sync individual sections with chords or tablature. Turning once previously complex musical progressions into much more manageable and accessible arrangements, Sloopy fosters creativity and musical exploration for users of all skill levels.",
    bg: "/media/sloopy-hero.mp4",
    links: [
      { link: "Github", href: "https://github.com/saddagada1/sloopy" },
      { link: "Live Website", href: "https://sloopy.saivamsi.ca" },
    ],
  },
  {
    id: 3,
    name: "Arcade",
    type: "Project",
    summary:
      "A growing collection of video games created using JavaScript, WebGL, or Unreal Engine. Currently only includes the classic game Tetris but you can look forward to an exciting Pokemon-inspired game which is currently under development. This is a passion project to demonstrate the creative potential of web-based gaming and gain a thorough understanding of game engine mechanics.",
    links: [
      { link: "Github", href: "https://github.com/saddagada1/arcade" },
      { link: "Live Website", href: "https://arcade.saivamsi.ca" },
    ],
  },
  {
    id: 4,
    name: "Auth",
    type: "Experiment",
    summary:
      "A collection of foundational setups for GraphQL backends with user authentication; designed for either web or mobile applications. Encompassing essential features such as email verification using Nodemailer, support for password recovery, and comprehensive endpoints for user data manipulation, configuration is finely tuned for secure authentication through JWT or database sessions.",
    links: [
      {
        link: "JWT",
        href: "https://github.com/saddagada1/graphql-jwt-auth-boiler-plate",
      },
      {
        link: "JWT for Mobile",
        href: "https://github.com/saddagada1/graphql-jwt-auth-boiler-plate",
      },
      {
        link: "Session",
        href: "https://github.com/saddagada1/graphql-session-auth-boiler-plate",
      },
    ],
  },
];

const Index = () => {
  const [container, { width }] = useElementSize();
  return (
    <>
      <Head>
        <title>Saivamsi Addagada</title>
      </Head>
      <main className="flex">
        <ScrollArea className="pb-2 lg:pb-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "grid grid-rows-4 border lg:h-[200px] lg:shrink-0 lg:grid-cols-4 lg:grid-rows-1",
                index !== 0 && "mt-2",
              )}
            >
              <div className="flex flex-col justify-between border-b p-2 lg:border-b-0 lg:border-r">
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
              <div className="row-span-2 flex flex-col border-b p-2 lg:col-span-2 lg:border-b-0 lg:border-r">
                <h1 className="section-label">Summary</h1>
                <p className="text-sm">{project.summary}</p>
              </div>
              <div className="relative p-2">
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
                  <div ref={container} className="aspect-video overflow-hidden">
                    <Avatar size={width} name={project.name} square />
                  </div>
                )}
              </div>
            </div>
          ))}
        </ScrollArea>
      </main>
    </>
  );
};

export default Index;
