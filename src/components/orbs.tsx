import { useEffect, type HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import gsap from "gsap";

interface OrbsProps extends HTMLAttributes<HTMLDivElement> {
  identifier: string;
  bounds: number;
  blur?: string;
  size?: string;
  grain?: boolean;
}

const Orbs: React.FC<OrbsProps> = ({
  identifier,
  bounds,
  blur,
  size,
  grain,
  ...props
}) => {
  const { className, ...rest } = props;

  useEffect(() => {
    const timeline = gsap.timeline();
    gsap.to(`.${identifier}`, {
      x: `random(-${bounds}, ${bounds}, 1)`,
      y: `random(-${bounds}, ${bounds}, 1)`,
      opacity: `random(0, 1, 0.1)`,
      ease: "power4.inOut",
      duration: 1,
      repeat: -1,
      repeatRefresh: true,
    });
    return () => {
      timeline.kill();
    };
  }, [bounds, identifier]);

  return (
    <div
      {...rest}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute aspect-square rounded-full bg-purple-500",
          identifier,
          size ?? "w-1/3",
        )}
      />
      <div
        className={cn(
          "absolute aspect-square rounded-full bg-green-500",
          identifier,
          size ?? "w-1/3",
        )}
      />
      <div
        className={cn(
          "absolute aspect-square rounded-full bg-blue-500",
          identifier,
          size ?? "w-1/3",
        )}
      />
      <div
        className={cn(
          "absolute aspect-square rounded-full bg-red-500",
          identifier,
          size ?? "w-1/3",
        )}
      />
      <div
        className={cn(
          "absolute aspect-square rounded-full bg-yellow-500",
          identifier,
          size ?? "w-1/3",
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full",
          blur ?? "backdrop-blur-[6px]",
        )}
      />
      {grain && (
        <div className="anim-grain z-20 opacity-10 mix-blend-overlay" />
      )}
    </div>
  );
};
export default Orbs;
