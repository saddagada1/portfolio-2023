import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

const PageTransition: React.FC = ({}) => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const { width, height } = useWindowSize();

  const handleRouteChangeStart = (url: string) => {
    gsap.set(".root", { display: "flex" });
    gsap
      .timeline()
      .fromTo(
        ".grid-item",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.01,
          stagger: { amount: 0.5, from: "random" },
        },
      )
      .fromTo(
        ".grid-item",
        { backdropFilter: "blur(4px)" },
        {
          backdropFilter: "blur(24px)",
          duration: 0.01,
          stagger: { amount: 0.5, from: "random" },
          onComplete: () => {
            void handleRouteChangeComplete(url);
          },
        },
      );
  };

  const handleRouteChangeComplete = async (url: string) => {
    await router.push(url);
    gsap
      .timeline()
      .fromTo(
        ".grid-item",
        { backdropFilter: "blur(24px)" },
        {
          backdropFilter: "blur(4px)",
          duration: 0.01,
          stagger: { amount: 0.5, from: "random" },
        },
      )
      .fromTo(
        ".grid-item",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.01,
          stagger: { amount: 0.5, from: "random" },
          onComplete: () => {
            gsap.set(".root", { display: "none" });
            setDisabled(false);
          },
        },
      );
  };

  useEffect(() => {
    const routeChangeStart = (url: string) => {
      if (disabled || url === router.pathname) return;
      setDisabled(true);
      handleRouteChangeStart(url);
      throw "Aborting route change. You can safely ignore this error.";
    };

    router.events.on("routeChangeStart", routeChangeStart);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, disabled]);

  return (
    <div className="root fixed z-10 hidden h-screen w-screen items-center justify-center">
      <div
        style={
          width > height ? { width, height: width } : { width: height, height }
        }
        className="grid aspect-square grid-cols-12 grid-rows-[repeat(12,_minmax(0,_1fr))]"
      >
        {Array.from({ length: 144 }).map((_, index) => (
          <span
            key={index}
            className="grid-item h-full w-full border backdrop-blur-sm"
          />
        ))}
      </div>
    </div>
  );
};
export default PageTransition;
