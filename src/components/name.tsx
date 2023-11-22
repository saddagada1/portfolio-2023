import { useState } from "react";
import SplitFlap from "./split-flap";

const firstName = "saivamsi";
const lastName = "addagada";

const Name: React.FC = ({}) => {
  const [top, setTop] = useState(firstName);
  const [bottom, setBottom] = useState(lastName);
  return (
    <div
      onMouseEnter={() => {
        setTop("but*call");
        setBottom("*me*sai*");
      }}
      className="flex flex-col gap-2 text-3xl md:text-7xl"
    >
      <SplitFlap target={top} identifier="top" />
      <SplitFlap target={bottom} identifier="bottom" />
    </div>
  );
};

export default Name;
