import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import Name from "~/components/name";
import Orbs from "~/components/orbs";
import Pixels from "~/components/pixels";
import Socials from "~/components/socials";
import { Button } from "~/components/ui/button";

const Index = () => {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>Saivamsi Addagada</title>
      </Head>
      <div className="flex flex-1 flex-col gap-2">
        <Name />
        <div className="section grid grid-cols-4">
          <h1 className="section-label col-span-2">Headline</h1>
          <p className="col-span-2 text-sm text-destructive">
            An independent, creative, full stack developer with a passion for
            crafting exceptional digital experiences and creating art through
            code.
          </p>
        </div>
        <Button
          variant="outline"
          size="nav"
          className="relative p-0 hover:bg-transparent"
          asChild
        >
          <Link href="/projects">
            <Pixels key={theme} />
            <h1 className="section-label absolute left-0 top-0 z-30 m-4">
              Projects
            </h1>
            <p className="button-label absolute bottom-0 right-0 z-30 m-4">
              Selected Works
            </p>
          </Link>
        </Button>
      </div>
      <div className="flex flex-1 flex-col-reverse gap-2 lg:flex-col">
        <Socials />
        <Button
          variant="outline"
          size="nav"
          className="relative p-0 hover:bg-transparent"
          asChild
        >
          <Link href="/about">
            <Orbs
              identifier="side-nav-orb"
              bounds={100}
              blur="backdrop-blur-2xl"
              size="w-1/2"
              grain
              className="hidden h-full w-full lg:flex"
            />
            <Orbs
              identifier="side-nav-orb"
              bounds={50}
              blur="backdrop-blur-2xl"
              size="w-1/2"
              grain
              className="hidden aspect-square h-full w-full sm:flex lg:hidden"
            />
            <Orbs
              identifier="side-nav-orb"
              bounds={50}
              blur="backdrop-blur-2xl"
              size="w-1/3"
              grain
              className="aspect-square h-full w-full sm:hidden"
            />
            <h1 className="section-label absolute left-0 top-0 z-30 m-4">
              About
            </h1>
            <p className="button-label absolute bottom-0 right-0 z-30 m-4">
              Me, Myself and I
            </p>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Index;
