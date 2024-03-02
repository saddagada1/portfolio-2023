import Head from "next/head";
import { Button } from "./ui/button";
import { SunMoon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import { cn } from "~/lib/utils";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [animComplete, setAnimComplete] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    if (router.pathname !== "/" || animComplete) return;
    gsap.context(() => {
      const navbarTimeline = gsap.timeline();

      navbarTimeline.fromTo(
        `.navbar`,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "power4.inOut",
          duration: 1,
          delay: 2,
          onComplete: () => {
            setAnimComplete(true);
          },
        },
      );
    });
  });
  return (
    <nav
      className={cn(
        "navbar p fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b backdrop-blur",
        router.pathname === "/" && "opacity-0",
      )}
    >
      <Button variant="link" asChild className="pl-0">
        <Link className="text-strong" href="/">
          Portfolio &apos;24
          <span className="hidden md:inline"> - Saivamsi Addagada</span>
        </Link>
      </Button>
      <div className="flex">
        <Button variant="link" asChild>
          <Link className="text-strong" href="/projects">
            Projects
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link className="text-strong" href="/about">
            About
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link className="text-strong" href="/contact">
            Contact
          </Link>
        </Button>
        <Button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="pr-0"
          variant="link"
        >
          <SunMoon />
        </Button>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="p flex items-center justify-between border-t">
      <h1 className="text-strong">
        <span className="hidden md:inline">Saivamsi Addagada - </span>&copy;2024
      </h1>
      <div className="flex">
        <Button variant="link" asChild>
          <Link className="text-strong" href="/projects">
            Projects
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link className="text-strong" href="/about">
            About
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link className="text-strong" href="/contact">
            Contact
          </Link>
        </Button>
        <Button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          variant="link"
          className="pr-0"
        >
          <SunMoon />
        </Button>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Saivamsi Addagada's Portfolio - 2@24"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-screen flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
