import Head from "next/head";
import Cursor from "./cursor";
import { useRouter } from "next/router";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { SunMoon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Saivamsi Addagada's Portfolio - 2@24"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen flex-col font-sans">
        <nav className="flex items-center border-b pl-2">
          <h1 className="section-label">Portfolio &apos;24</h1>
          <Button
            className={cn(
              "border-y-0",
              router.pathname === "/" && "bg-accent text-accent-foreground",
            )}
            variant="outline"
            asChild
          >
            <Link href="/">Index</Link>
          </Button>
          <Button
            className={cn(
              "border-y-0 border-l-0",
              router.pathname === "/projects" &&
                "bg-accent text-accent-foreground",
            )}
            variant="outline"
            asChild
          >
            <Link href="/projects">Projects</Link>
          </Button>
          <Button
            className={cn(
              "border-y-0 border-l-0",
              router.pathname === "/about" &&
                "bg-accent text-accent-foreground",
            )}
            variant="outline"
            asChild
          >
            <Link href="/about">About</Link>
          </Button>
          <Button
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
            variant="outline"
            size="icon"
            className="flex-none border-x-0 border-y-0"
          >
            <SunMoon strokeWidth={1} />
          </Button>
        </nav>
        {children}
        <Cursor />
      </div>
    </>
  );
};

export default Layout;
