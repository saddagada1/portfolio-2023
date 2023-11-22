import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useEffectOnce, useWindowSize } from "usehooks-ts";
import { cn } from "~/lib/utils";

const Cursor: React.FC = ({}) => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { width, height } = useWindowSize();
  const cols = width >= height ? 12 : 8;
  const rows = width >= height ? 8 : 12;

  useEffectOnce(() => {
    gsap.to(".grid-item", {
      opacity: 0,
      duration: 0.1,
      ease: "power4.inOut",
      stagger: {
        from: "random",
        amount: 1,
      },
      delay: 1,
    });
  });

  useEffect(() => {
    if (disabled) return;

    const handleRouteChangeStart = (url: string) => {
      gsap
        .timeline()
        .to(".grid-item", {
          opacity: 1,
          duration: 0.1,
          ease: "power4.inOut",
          stagger: {
            from: currentIndex ?? "center",
            each: 0.1,
            grid: [rows, cols],
          },
        })
        .to(".page", {
          opacity: 0.1,
          ease: "none",
          duration: 1,
          onComplete: () => {
            void handleRouteChangeComplete(url);
          },
        });
    };

    const handleRouteChangeComplete = async (url: string) => {
      await router.push(url);
      gsap
        .timeline()
        .to(".page", {
          opacity: 1,
          ease: "none",
          duration: 1,
        })
        .to(".grid-item", {
          opacity: 0,
          duration: 0.1,
          ease: "power4.inOut",
          stagger: {
            from: currentIndex ?? "center",
            each: 0.1,
            grid: [rows, cols],
          },
          onComplete: () => {
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

    const handleClick = (e: MouseEvent) => {
      const ignore = (e.target as HTMLElement).closest("a");
      if (ignore) return;
      const index = calcGridItem(e);
      if (!index) return;
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

    const handleMouseOver = (e: MouseEvent) => {
      const index = calcGridItem(e);
      if (!index) return;
      const cell = `.grid-item-${index}`;
      if (gsap.isTweening(cell)) return;
      gsap.to(cell, { opacity: 1 });
      gsap.to(cell, { opacity: 0, delay: 0.2 });
    };

    const calcGridItem = (e: MouseEvent) => {
      const colSize = width / cols;
      const rowSize = height / rows;

      const col = Math.floor(e.screenX / colSize);
      const row = Math.floor(e.screenY / rowSize) - 1;

      const index = col + cols * row;

      if (index >= cols * rows || index < 0) return;

      setCurrentIndex(index);
      return index;
    };

    router.events.on("routeChangeStart", routeChangeStart);
    window.addEventListener("mousemove", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      window.removeEventListener("mousemove", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, [cols, currentIndex, disabled, height, router, rows, width]);

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
            "grid-item h-full w-full origin-top-left backdrop-blur-3xl",
            `grid-item-${index}`,
          )}
        />
      ))}
    </div>
  );
};

export default Cursor;
