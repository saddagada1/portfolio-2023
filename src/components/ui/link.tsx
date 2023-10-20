import { type HTMLAttributes, useEffect, useMemo } from "react";
import _Link from "next/link";
import { cn } from "~/lib/utils";
import gsap from "gsap";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, label, children, ...rest }) => {
  const { className, ...props } = rest;
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    timeline.set(`.${label}-link-letter-bottom`, { display: "inline-block" });
    timeline.to(`.${label}-link-letter`, {
      yPercent: -100,
      duration: 0.2,
      stagger: { amount: 0.1 },
    });
    timeline.fromTo(
      `.${label}-link-letter-bottom`,
      { yPercent: 100 },
      { yPercent: 0, duration: 0.2, stagger: { amount: 0.1 } },
      0,
    );

    return () => {
      timeline.kill();
    };
  }, [label, timeline]);

  const handleMouseEnter = () => {
    timeline.play();
  };

  const handleMouseLeave = () => {
    timeline.reverse();
  };

  return (
    <_Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      href={href}
      className={cn("relative block overflow-hidden leading-none", className)}
    >
      {label.split("").map((letter, index) => (
        <span key={index} className={`${label}-link-letter inline-block`}>
          {letter}
        </span>
      ))}
      <div className="absolute left-0 top-0">
        {label.split("").map((letter, index) => (
          <span
            key={index}
            className={`${label}-link-letter-bottom hidden text-destructive`}
          >
            {letter}
          </span>
        ))}
      </div>
      {children}
    </_Link>
  );
};
export default Link;
