import Head from "next/head";
import { Separator } from "./ui/separator";
import PageTransition from "./pageTransition";
import Link from "./ui/link";

const Navbar = () => {
  return (
    <nav className="w-ful h4 z-10 px-8 pt-8">
      <div className="grid grid-cols-4">
        <div>
          <p className="p text-muted-foreground">Name</p>
          <div className="flex flex-1 items-center">
            <Link label="Saivamsi" href="/">
              &nbsp;
            </Link>
            <Link label="Addagada" href="/" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="p text-muted-foreground">Sitemap</p>
          <div className="flex flex-1 items-center">
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
          <div className="flex flex-1 items-center">
            <Link label="Github" href="/">
              ,&nbsp;
            </Link>
            <Link label="LinkedIn" href="/projects" />
          </div>
        </div>
      </div>
      <Separator className="bg-foreground" />
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
      <div
        style={{ perspective: "1080px" }}
        className="flex h-screen w-screen flex-col overflow-hidden bg-background font-sans"
      >
        <Navbar />
        {children}
        <PageTransition />
      </div>
    </>
  );
};

export default Layout;
