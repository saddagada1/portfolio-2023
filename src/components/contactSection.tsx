import { type HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import ContactForm from "./contactForm";
import { Github, Linkedin, Twitter, Hourglass } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const ContactSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section {...props} className={cn("p", className)}>
      <h2 className="p overflow-hidden whitespace-pre pl-0 text-[8vw] font-medium lg:font-normal">
        {"where i'll be".split("").map((l, i) => (
          <span key={i} className="contacts-letter inline-block">
            {l}
          </span>
        ))}
      </h2>
      <div className="gap flex flex-col lg:flex-row">
        <ContactForm className="contact-form flex-1" />
        <div className="gap grid aspect-video flex-1 grid-cols-2 grid-rows-2 lg:aspect-auto">
          <Button
            variant="outline"
            size="social"
            asChild
            className="social-button"
          >
            <Link href="https://github.com/saddagada1">
              <p className="p absolute left-0 top-0">Github</p>
              <Github strokeWidth={0.5} className="icon" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="social"
            asChild
            className="social-button"
          >
            <Link href="https://linkedin.com/in/saivamsi-addagada-32bb80293">
              <p className="p absolute left-0 top-0">LinkedIn</p>
              <Linkedin strokeWidth={0.5} className="icon" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="social"
            asChild
            className="social-button"
          >
            <Link href="https://twitter.com/__saivamsi">
              <p className="p absolute left-0 top-0">Twitter</p>
              <Twitter strokeWidth={0.5} className="icon" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="social"
            asChild
            className="social-button"
          >
            <Link href="https://www.tiktok.com/@whyiscrafty">
              <p className="p absolute left-0 top-0">Tiktok</p>
              <Hourglass strokeWidth={0.5} className="icon" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
