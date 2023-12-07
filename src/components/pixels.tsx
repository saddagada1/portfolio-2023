import { useEffect, useState } from "react";
import gsap from "gsap";
import { cn } from "~/lib/utils";
import { darkForeground, foreground } from "~/lib/constants";
import { useTheme } from "next-themes";

interface PixelsProps {
  glyph?: number[];
}

const Pixels: React.FC<PixelsProps> = ({ glyph }) => {
  const { theme } = useTheme();
  const cols = 12;
  const rows = 12;
  const [current, setCurrent] = useState<number[] | undefined>(glyph);

  useEffect(() => {
    if (!glyph || !current) return;

    const tl = gsap.timeline();

    if (JSON.stringify(glyph) !== JSON.stringify(current)) {
      const oldPixels = current.map((index) => `.pixel-grid-item-${index}`);
      tl.to(oldPixels, {
        backgroundColor: "transparent",
        stagger: { each: 0.1 },
        onComplete: () => {
          setCurrent(glyph);
        },
      });
    }

    const newPixels = current.map((index) => `.pixel-grid-item-${index}`);

    tl.to(newPixels, {
      backgroundColor: `hsl(${theme === "dark" ? darkForeground : foreground})`,
      stagger: { each: 0.1 },
    });

    return () => {
      tl.kill();
    };
  }, [current, glyph, theme]);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      className="grid aspect-square h-full"
    >
      {Array.from({ length: cols * rows }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "pixel-grid-item h-full w-full",
            `pixel-grid-item-${index}`,
            index % cols !== 0 && "border-l",
            index >= cols && "border-t",
          )}
        />
      ))}
    </div>
  );
};

export default Pixels;
