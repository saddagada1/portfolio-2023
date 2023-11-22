import Link from "next/link";
import { Button } from "./ui/button";
import { AtSign, Github, Linkedin, ListTree } from "lucide-react";

const Socials: React.FC = ({}) => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <div className="flex flex-1 gap-2">
        <Button variant="outline" size="nav" asChild>
          <Link href="mailto:saddagada1@gmail.com">
            <AtSign strokeWidth={1} />
            <p className="button-label">Email</p>
          </Link>
        </Button>
        <Button variant="outline" size="nav" asChild>
          <Link href="https://github.com/saddagada1">
            <Github strokeWidth={1} />
            <p className="button-label">Github</p>
          </Link>
        </Button>
      </div>
      <div className="flex flex-1 gap-2">
        <Button variant="outline" size="nav" asChild>
          <Link href="https://linkedin.com/in/saivamsi-addagada-32bb80293">
            <Linkedin strokeWidth={1} />
            <p className="button-label">LinkedIn</p>
          </Link>
        </Button>
        <Button variant="outline" size="nav" asChild>
          <Link href="utils/Saivamsi-Addagada-Resume.pdf" download>
            <ListTree strokeWidth={1} />
            <p className="button-label">Resume</p>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Socials;
