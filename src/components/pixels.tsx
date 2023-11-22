import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { cn } from "~/lib/utils";
import { darkForeground, foreground, projects } from "~/lib/constants";
import { useTheme } from "next-themes";

interface PixelsProps {
  delay?: number;
  onComplete?: (index: number) => void;
}

const Pixels: React.FC<PixelsProps> = ({ delay, onComplete }) => {
  const { theme } = useTheme();
  const [glyphIndex, setGlyphIndex] = useState(0);
  const cols = 12;
  const rows = 12;

  const glyph = useMemo(() => {
    return projects[glyphIndex]?.glyph;
  }, [glyphIndex]);

  useEffect(() => {
    if (!glyph) return;

    const tl = gsap.timeline();

    const selectedPixels = glyph.map((index) => `.pixel-grid-item-${index}`);

    tl.to(selectedPixels, {
      backgroundColor: `hsl(${theme === "dark" ? darkForeground : foreground})`,
      stagger: { each: 0.1 },
      onComplete: () => {
        onComplete && onComplete(glyphIndex);
      },
    }).to(selectedPixels, {
      backgroundColor: "transparent",
      stagger: { each: 0.1 },
      delay: delay,
      onComplete: () => {
        let index = glyphIndex;
        if (glyphIndex === projects.length - 1) {
          index = 0;
        } else {
          index++;
        }
        setGlyphIndex(index);
        onComplete && onComplete(index);
      },
    });

    return () => {
      tl.kill();
    };
  }, [delay, glyph, glyphIndex, onComplete, theme]);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      className="grid aspect-square w-full flex-1 lg:aspect-auto"
    >
      {Array.from({ length: cols * rows }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "pixel-grid-item h-full w-full backdrop-blur-sm",
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
