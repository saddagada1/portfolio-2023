import Head from "next/head";
import { Button } from "./ui/button";
import { SunMoon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="p fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b backdrop-blur">
      <Button variant="link" asChild>
        <Link className="text-strong" href="/">
          Portfolio &apos;24 - Saivamsi Addagada
        </Link>
      </Button>
      <div className="hidden md:flex">
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
        >
          <SunMoon />
        </Button>
      </div>
      <Button variant="link" className="md:hidden">
        Menu
      </Button>
    </nav>
  );
};

const Footer: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="p space flex items-center justify-between border-t">
      <h1 className="text-strong">Saivamsi Addagada - &copy;2024</h1>
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
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Saivamsi Addagada's Portfolio - 2@24"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-screen font-sans">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
