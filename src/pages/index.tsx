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
  return (
    <>
      <Head>
        <title>Saivamsi Addagada</title>
      </Head>
      <main className="page-transition pointer-events-none relative z-10 flex flex-1 flex-col justify-between px-4 pb-4 pt-6 lg:px-8 lg:pb-8 lg:pt-16">
        <h1 className="h1 text-6xl sm:text-7xl lg:text-9xl">
          Creative&nbsp;
          <br className="lg:hidden" />
          <span className="font-display font-thin text-destructive">
            {title.split(" ")[0]}&nbsp;
            <br className="hidden lg:block" />
            {title.split(" ")[1]}&nbsp;
          </span>
          <br className="lg:hidden" />
          Developer
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          <h4 className="h4 w-2/3 lg:col-start-2 lg:w-1/4">
            Actively looking for a full time position.
          </h4>
          <h4 className="h4 flex w-2/3 items-end lg:w-1/4">
            43.6532° N, 79.3832° W
          </h4>
        </div>
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
