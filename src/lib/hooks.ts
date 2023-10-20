import { useState } from "react";
import { rand } from "./utils";
import { useInterval } from "usehooks-ts";

interface UseShuffleTextProps {
  data: string[];
  defaultValue: string;
  manual?: boolean;
  onShuffle?: (index: number) => void;
  ignoreSpaces?: boolean;
  random?: boolean;
  shuffleDuration?: number;
  shuffleInterval?: number;
}

export const useShuffleText = ({
  data,
  defaultValue,
  manual,
  onShuffle,
  ignoreSpaces,
  random,
  shuffleDuration,
  shuffleInterval,
}: UseShuffleTextProps) => {
  const alphabet =
    "!@#$%&?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [index, setIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shufflingText, setShufflingText] = useState(defaultValue.split(""));
  const [indexHistory, setIndexHistory] = useState<number[]>([0]);

  useInterval(
    () =>
      setShufflingText(
        shufflingText.map((letter) => {
          if (ignoreSpaces && letter === " ") {
            return letter;
          }
          return alphabet.split("")[rand(0, alphabet.length - 1)]!;
        }),
      ),
    manual ?? isShuffling ? 50 : null,
  );

  useInterval(
    () => {
      let newIndex = index;
      if (random) {
        while (indexHistory.includes(newIndex)) {
          newIndex = rand(0, data.length - 1);
        }
      } else if (index === data.length - 1) {
        newIndex = 0;
      } else {
        newIndex++;
      }
      if (indexHistory.length + 1 === data.length) {
        setIndexHistory([newIndex]);
      } else {
        setIndexHistory([...indexHistory, newIndex]);
      }
      !onShuffle ? setIsShuffling(false) : onShuffle(newIndex);
      setShufflingText(data[newIndex]!.split(""));
      setIndex(newIndex);
    },
    manual ?? isShuffling ? shuffleDuration ?? 250 : null,
  );

  useInterval(
    () => setIsShuffling(true),
    !isShuffling && !manual ? shuffleInterval ?? 5000 : null,
  );

  return shufflingText.join("");
};
