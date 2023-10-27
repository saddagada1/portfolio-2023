import Head from "next/head";
import { Separator } from "./ui/separator";
import PageTransition from "./pageTransition";
import Link from "./ui/link";
import { useWindowSize } from "usehooks-ts";

const Navbar = () => {
  return (
    <nav className="h4 z-10 w-full px-4 pt-4 lg:px-8 lg:pt-8">
      <div className="grid grid-cols-3 lg:grid-cols-4">
        <div>
          <p className="p text-muted-foreground">Name</p>
          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center">
            <Link label="Saivamsi" href="/">
              &nbsp;
            </Link>
            <Link label="Addagada" href="/" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="p text-muted-foreground">Sitemap</p>
          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center">
            <Link label="Index" href="/">
              ,&nbsp;
            </Link>
            <Link label="Portfolio" href="/portfolio">
              ,&nbsp;
            </Link>
            <Link label="About" href="/about" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="p text-muted-foreground">Social</p>
          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center">
            <Link label="Github" href="https://github.com/saddagada1">
              ,&nbsp;
            </Link>
            <Link
              label="LinkedIn"
              href="https://linkedin.com/in/saivamsi-addagada-32bb80293"
            />
          </div>
        </div>
      </div>
      <Separator className="mt-2 bg-foreground" />
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
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-background font-sans">
        <Navbar />
        {children}
        <PageTransition />
      </div>
    </>
  );
};

export default Layout;
