import Head from "next/head";
import PageTransition from "./pageTransition";
import Link from "next/link";
import Avatar from "boring-avatars";
import { Button } from "./ui/button";
import { AtSign, Github, Linkedin, ListTree } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Orbs from "./orbs";
import { useState } from "react";

const SideNavbar = () => {
  return (
    <nav className="mr-2 hidden w-[300px] shrink-0 flex-col justify-end border lg:flex">
      <Orbs
        identifier="side-nav-orb"
        bounds={30}
        blur="backdrop-blur-2xl"
        size="w-2/5"
        className="w-full border-b"
      />
      <div className="relative flex-1 p-2">
        <Link href="/" className="text-2xl font-medium">
          Saivamsi Addagada
        </Link>
        <p className="mt-4 text-sm">
          An independent, creative, full stack developer with a passion for
          crafting exceptional digital experiences and creating art through
          code.
        </p>
        <div className="mt-12 space-y-2">
          <Button variant="nav" size="nav" asChild>
            <Link href="/" className="flex gap-2">
              <Avatar size={40} square name="Projects" />
              <div>
                <p className="text-sm">Selected Works</p>
                <p className="font-normal text-destructive">
                  Applications and Experiments.
                </p>
              </div>
            </Link>
          </Button>
          <Button variant="nav" size="nav" asChild>
            <Link href="/about" className="flex gap-2">
              <Avatar size={40} square name="About" />
              <div>
                <p className="text-sm">About</p>
                <p className="font-normal text-destructive">
                  Me, Myself and I.
                </p>
              </div>
            </Link>
          </Button>
        </div>
        <p className="absolute bottom-2 left-2 text-xs">
          2<span className="text-destructive">@</span>23
        </p>
        <div className="absolute bottom-2 right-2 flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:saddagada1@gmail.com">
              <AtSign strokeWidth={1} />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/saddagada1">
              <Github strokeWidth={1} />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://linkedin.com/in/saivamsi-addagada-32bb80293">
              <Linkedin strokeWidth={1} />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="utils/Saivamsi-Addagada-Resume.pdf" download>
              <ListTree strokeWidth={1} />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="mb-2 flex h-[80px] w-full shrink-0 justify-between gap-2 border p-2 lg:hidden">
      <Orbs identifier="nav-orb" bounds={5} className="h-full border" />
      <Sheet open={open} onOpenChange={(o) => setOpen(o)}>
        <SheetTrigger asChild>
          <Button variant="outline">Menu</Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-3/4 p-2">
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className="text-2xl font-medium"
          >
            Saivamsi Addagada
          </Link>
          <p className="mt-4 text-sm">
            An independent, creative, full stack developer with a passion for
            crafting exceptional digital experiences and creating art through
            code.
          </p>
          <div className="mt-12 space-y-2">
            <Button
              onClick={() => setOpen(false)}
              variant="nav"
              size="nav"
              asChild
            >
              <Link href="/" className="flex gap-2">
                <Avatar size={40} square name="Projects" />
                <div>
                  <p className="text-sm">Selected Works</p>
                  <p className="font-normal text-destructive">
                    Applications and Experiments.
                  </p>
                </div>
              </Link>
            </Button>
            <Button
              onClick={() => setOpen(false)}
              variant="nav"
              size="nav"
              asChild
            >
              <Link href="/about" className="flex gap-2">
                <Avatar size={40} square name="About" />
                <div>
                  <p className="text-sm">About</p>
                  <p className="font-normal text-destructive">
                    Me, Myself and I.
                  </p>
                </div>
              </Link>
            </Button>
          </div>
          <div className="mt-auto">
            <p className="absolute bottom-2 left-2 text-xs">
              2<span className="text-destructive">@</span>23
            </p>
            <div className="absolute bottom-2 right-2 flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:saddagada1@gmail.com">
                  <AtSign strokeWidth={1} />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/saddagada1">
                  <Github strokeWidth={1} />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com/in/saivamsi-addagada-32bb80293">
                  <Linkedin strokeWidth={1} />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="utils/Saivamsi-Addagada-Resume.pdf" download>
                  <ListTree strokeWidth={1} />
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Saivamsi Addagada's Portfolio - 2@23"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen flex-col p-2 font-sans lg:flex-row">
        <SideNavbar />
        <Navbar />
        {children}
        <PageTransition />
      </div>
    </>
  );
};

export default Layout;
