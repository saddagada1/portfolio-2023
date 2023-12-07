import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/layout";
import { Theme } from "~/components/theme";
import "~/styles/globals.css";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

const sans = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueMontreal-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const mono = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Theme attribute="class" defaultTheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
};

export default MyApp;
