import gsap from "gsap";
import { useTheme } from "next-themes";
import { type HTMLAttributes, useEffect, useState, useMemo } from "react";
import { cn } from "~/lib/utils";

interface CharacterProps extends HTMLAttributes<HTMLDivElement> {
  identifier: string;
  target: string;
  delay?: number;
  highlight?: string;
}

const Character: React.FC<CharacterProps> = ({
  identifier,
  target,
  delay,
  highlight,
  ...props
}) => {
  const { className, style, ...rest } = props;
  const [characterSet] = useState("abcdefghijklmnopqrstuvwxyz*".split(""));
  const [character, setCharacter] = useState(
    characterSet[
      !!delay
        ? characterSet.indexOf(target) + delay > characterSet.length - 1
          ? 0
          : characterSet.indexOf(target) + delay
        : 0
    ]!,
  );
  const [background, setBackground] = useState<string | null>(null);
  const [accent, setAccent] = useState<string | null>(null);

  const nextChar = useMemo(() => {
    if (character === target) return character;
    const indexCurr = characterSet.indexOf(character);

    if (indexCurr === -1 || indexCurr + 1 >= characterSet.length) {
      return characterSet[0]!;
    }

    return characterSet[indexCurr + 1]!;
  }, [character, characterSet, target]);

  useEffect(() => {
    if (!background || !accent) return;

    const tl = gsap.timeline();

    const animate = () => {
      tl.fromTo(
        `.${identifier}-top`,
        { rotateX: "0deg", backgroundColor: `hsl(${accent})` },
        {
          rotateX: "-90deg",
          backgroundColor: `hsl(${background})`,
          duration: 0.1,
          ease: "none",
        },
      ).fromTo(
        `.${identifier}-bottom`,
        { rotateX: "90deg", backgroundColor: `hsl(${accent})` },
        {
          rotateX: "0deg",
          backgroundColor: `hsl(${background})`,
          duration: 0.1,
          ease: "none",
          onComplete: () => {
            setCharacter(nextChar);
          },
        },
      );
    };

    if (character !== target) {
      animate();
    }

    return () => {
      tl.kill();
    };
  }, [accent, background, character, identifier, nextChar, target]);

  useEffect(() => {
    if (typeof window === undefined) return;
    if (!background || !accent) {
      setBackground(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--background",
        ),
      );
      setAccent(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--primary-foreground",
        ),
      );
    }
  }, [background, accent]);

  return (
    <div
      {...rest}
      style={{ transformStyle: "preserve-3d", ...style }}
      className={cn(
        "relative flex flex-col border font-mono font-medium uppercase",
        className,
      )}
    >
      <p
        className={cn(
          "clip-top split-flap absolute",
          !!highlight && nextChar === highlight && "text-destructive",
        )}
      >
        {nextChar}
      </p>
      <p
        className={cn(
          "clip-top split-flap absolute",
          `${identifier}-top`,
          !!highlight && character === highlight && "text-destructive",
        )}
      >
        {character}
      </p>
      <p
        className={cn(
          "clip-bottom split-flap",
          !!highlight && character === highlight && "text-destructive",
        )}
      >
        {character}
      </p>
      <p
        style={{ transform: "rotateX(90deg)" }}
        className={cn(
          "clip-bottom split-flap absolute",
          `${identifier}-bottom`,
          !!highlight && nextChar === highlight && "text-destructive",
        )}
      >
        {nextChar}
      </p>
    </div>
  );
};

interface SplitFlapProps extends HTMLAttributes<HTMLDivElement> {
  target: string;
  identifier: string;
}

const SplitFlap: React.FC<SplitFlapProps> = ({
  target,
  identifier,
  ...props
}) => {
  const { className, style, ...rest } = props;
  const { theme } = useTheme();
  const empties = "* ";
  return (
    <div
      {...rest}
      key={theme}
      style={{ perspective: 1000, ...style }}
      className={cn("flex gap-2", className)}
    >
      {target.split("").map((char, index) => (
        <Character
          key={index}
          identifier={`${identifier}-${
            empties.includes(char) ? "empty" : char
          }-${index}`}
          target={char}
          className="flex-1"
          delay={target.split("").length - index}
          highlight={empties.includes(char) ? char : undefined}
        />
      ))}
    </div>
  );
};
export default SplitFlap;
