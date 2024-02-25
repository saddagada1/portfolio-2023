import { useLayoutEffect, type HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import gsap from "gsap";
import { useElementSize } from "usehooks-ts";

const Orbs: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const [container, { width, height }] = useElementSize();
  const gridSize = 12;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.to(`.orb`, {
        x: `random(${-width / 2}, ${width / 2}, 1)`,
        y: `random(${-height / 4}, ${height / 4}, 1)`,
        opacity: `random(0, 1, 0.1)`,
        ease: "power4.inOut",
        duration: 5,
        repeat: -1,
        repeatRefresh: true,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div
      {...props}
      ref={container}
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className,
      )}
    >
      <div className="orb absolute h-[35vmax] w-[35vmax] rounded-full bg-purple-500" />
      <div className="orb absolute h-[35vmax] w-[35vmax] rounded-full bg-green-500" />
      <div className="orb absolute h-[35vmax] w-[35vmax] rounded-full bg-teal-500" />
      <div className="orb absolute h-[35vmax] w-[35vmax] rounded-full bg-blue-500" />
      <div className="orb absolute h-[35vmax] w-[35vmax] rounded-full bg-red-500" />
      <div className="orb absolute h-[35vmax] w-[35vmax] rounded-full bg-orange-500" />
      <div className="orb absolute h-[35vmax] w-[35vmax] rounded-full bg-yellow-500" />
      <div
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
        className="absolute left-0 top-0 z-10 grid h-full w-full hr:aspect-square hr:h-auto"
      >
        {Array.from({ length: gridSize ** 2 }).map((_, index) => (
          <span
            key={index}
            className="backdrop-blur-2xl lg:backdrop-blur-3xl"
          />
        ))}
      </div>
    </div>
  );
};
export default Orbs;
