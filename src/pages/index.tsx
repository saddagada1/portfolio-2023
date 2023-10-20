import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import Scene from "~/components/three/scene";
import { useShuffleText } from "~/lib/hooks";

const Index = () => {
  const title = useShuffleText({
    data: [
      "Full Stack",
      "Front End",
      "Back End",
      "Type Script",
      "Java Script",
      "React NextJS",
    ],
    defaultValue: "Full Stack",
    ignoreSpaces: true,
    random: true,
  });
  // const titleEnd = useShuffleText({
  //   data: ["Stack", "End", "End", "Script", "Script", "NextJS"],
  //   defaultValue: "Stack",
  // });
  return (
    <>
      <Head>
        <title>Saivamsi Addagada</title>
      </Head>
      <main className="page-transition pointer-events-none relative z-10 flex flex-1 flex-col justify-between px-8 pb-8 pt-16">
        <p className="p absolute right-8 top-0 mb-0">
          * If you are reading this I am still working on my portfolio. Some
          sections may be incomplete.
        </p>
        <h1 className="h1 text-9xl">
          Creative&nbsp;
          <span className="font-display font-thin text-destructive">
            {title.split(" ")[0]}
            <br />
            {title.split(" ")[1]}&nbsp;
          </span>
          Developer
        </h1>
        <div className="grid grid-cols-3">
          <h4 className="h4 col-start-2 w-1/4">
            Actively looking for a full time position.
          </h4>
          <h4 className="h4 flex w-1/4 items-end">43.6532° N, 79.3832° W</h4>
        </div>
        {/* <div className="absolute right-0 h-full w-1/2 backdrop-blur-sm" /> */}
      </main>
      <div className="page-transition fixed h-full w-full">
        <Canvas flat camera={{ position: [-2, 2, 8] }}>
          <Scene />
        </Canvas>
      </div>
    </>
  );
};

export default Index;
