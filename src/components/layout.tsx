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
          content="Saivamsi Addagada's Portfolio - 2@23"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen flex-col gap-2 overflow-x-hidden overflow-y-scroll p-2 lg:overflow-hidden">
        <main
          className={cn(
            "flex flex-1 gap-2 font-sans lg:flex-row",
            router.pathname === "/" ? "flex-col" : "flex-col-reverse",
          )}
        >
          {children}
        </main>
        <div className="flex gap-2 text-sm ">
          <div className="section flex flex-1 items-center py-2">
            <p className="text-destructive">2@23</p>
          </div>
          {router.pathname !== "/" && (
            <>
              <Button variant="outline" asChild>
                <Link href="/">Index</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">About</Link>
              </Button>
            </>
          )}
          <Button
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
            variant="outline"
            size="icon"
            className="flex-none"
          >
            <SunMoon strokeWidth={1} />
          </Button>
        </div>
        <Cursor />
      </div>
    </>
  );
};

export default Layout;
