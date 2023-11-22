import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { cn } from "~/lib/utils";

const Cursor: React.FC = ({}) => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  // const [background, setBackground] = useState<string | null>(null);
  const { width, height } = useWindowSize();
  const cols = width >= height ? 16 : 12;
  const rows = width >= height ? 12 : 16;

  useEffect(() => {
    if (disabled) return;

    const handleRouteChangeStart = (url: string) => {
      // gsap.set(".grid-item", { backgroundColor: `hsl(${background})` });
      gsap.timeline().to(".grid-item", {
        opacity: 1,
        duration: 0.1,
        ease: "power4.inOut",
        stagger: {
          from: currentIndex ?? "center",
          each: 0.05,
          grid: [rows, cols],
        },
        onComplete: () => {
          void handleRouteChangeComplete(url);
        },
      });
    };

    const handleRouteChangeComplete = async (url: string) => {
      await router.push(url);
      gsap.timeline().to(".grid-item", {
        opacity: 0,
        duration: 0.1,
        ease: "power4.inOut",
        stagger: {
          from: currentIndex ?? "center",
          each: 0.05,
          grid: [rows, cols],
        },
        onComplete: () => {
          // gsap.set(".grid-item", { backgroundColor: `transparent` });
          setDisabled(false);
        },
      });
    };

    const routeChangeStart = (url: string) => {
      if (url === router.pathname) return;
      gsap.killTweensOf(
        Array.from({ length: cols * rows }).map(
          (_, index) => `.grid-item-${index}`,
        ),
      );
      setDisabled(true);
      handleRouteChangeStart(url);
      throw "Aborting route change. You can safely ignore this error.";
    };

    const handleClick = (index: number) => {
      const cells = ".grid-item";
      gsap.to(cells, {
        duration: 0.1,
        ease: "power4.inOut",
        opacity: 1,
        stagger: {
          from: index,
          each: 0.1,
          grid: [rows, cols],
        },
      });
      gsap.to(cells, {
        duration: 0.1,
        ease: "power4.inOut",
        opacity: 0,
        stagger: {
          from: index,
          each: 0.1,
          grid: [rows, cols],
        },
        delay: 0.3,
      });
    };

    const handleMouseOver = (index: number) => {
      const cell = `.grid-item-${index}`;
      if (gsap.isTweening(cell)) return;
      gsap.to(cell, { opacity: 1 });
      gsap.to(cell, { opacity: 0, delay: 0.2 });
    };

    const calcGridItem = (e: MouseEvent, click: boolean) => {
      const colSize = width / cols;
      const rowSize = height / rows;

      const col = Math.floor(e.screenX / colSize);
      const row = Math.floor(e.screenY / rowSize) - 1;

      const index = col + cols * row;

      if (index >= cols * rows || index < 0) return;

      setCurrentIndex(index);

      const ignore = (e.target as HTMLElement).closest("a");

      click && !ignore ? handleClick(index) : handleMouseOver(index);
    };

    router.events.on("routeChangeStart", routeChangeStart);
    window.addEventListener("mousemove", (e) => calcGridItem(e, false));
    window.addEventListener("click", (e) => calcGridItem(e, true));

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      window.removeEventListener("mousemove", (e) => calcGridItem(e, false));
      window.removeEventListener("click", (e) => calcGridItem(e, true));
    };
  }, [cols, currentIndex, disabled, height, router, rows, width]);

  // useEffect(() => {
  //   if (typeof window === undefined) return;
  //   if (!background) {
  //     setBackground(
  //       getComputedStyle(document.documentElement).getPropertyValue(
  //         "--destructive",
  //       ),
  //     );
  //   }
  // }, [background]);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-50 grid h-screen w-screen"
    >
      {Array.from({ length: cols * rows }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "grid-item h-full w-full opacity-0 backdrop-blur-3xl",
            `grid-item-${index}`,
          )}
        />
      ))}
    </div>
  );
};

export default Cursor;
