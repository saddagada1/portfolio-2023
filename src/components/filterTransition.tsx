import gsap from "gsap";
import { useEffect } from "react";
import { useElementSize } from "usehooks-ts";
import { cn } from "~/lib/utils";

interface FilterTransitionProps {
  transition: boolean;
  blurIntensity?: string;
}

const FilterTransition: React.FC<FilterTransitionProps> = ({
  transition,
  blurIntensity,
}) => {
  const [container, { width, height }] = useElementSize();

  useEffect(() => {
    if (transition) {
      gsap.set(".filter-root", { display: "flex" });
      gsap.fromTo(
        ".filter-grid-item",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.01,
          stagger: { amount: 0.5, from: "random" },
        },
      );
    } else {
      gsap.fromTo(
        ".filter-grid-item",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.01,
          stagger: { amount: 0.5, from: "random" },
          onComplete: () => {
            gsap.set(".filter-root", { display: "none" });
          },
        },
      );
    }
  }, [transition]);

  return (
    <div
      ref={container}
      className="filter-root absolute z-10 hidden h-full w-full items-center justify-center"
    >
      <div
        style={width > height ? { width } : { height }}
        className="grid aspect-square grid-cols-12 grid-rows-[repeat(12,_minmax(0,_1fr))]"
      >
        {Array.from({ length: 144 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "filter-grid-item h-full w-full border backdrop-blur-sm",
              blurIntensity,
            )}
          />
        ))}
      </div>
    </div>
  );
};
export default FilterTransition;
