import {
  useFBO,
  MeshTransmissionMaterial,
  Environment,
  useVideoTexture,
  ContactShadows,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { type Mesh, MathUtils } from "three";
import { rand } from "~/lib/utils";

const heroes: Record<number, { src: string; href: string }> = {
  1: {
    src: "/media/purple-haze.mp4",
    href: "https://www.youtube.com/watch?v=cJunCsrhJjg&ab_channel=JimiHendrixVEVO",
  },
  2: {
    src: "/media/voodoo-child.mp4",
    href: "https://www.youtube.com/watch?v=NWJwj4tZMOU&ab_channel=PaulRatcliff",
  },
  3: {
    src: "/media/everyday-i-have-the-blues.mp4",
    href: "https://www.youtube.com/watch?v=6TWdLqER014&ab_channel=WalterCalloni",
  },
  4: {
    src: "/media/covered-in-rain.mp4",
    href: "https://www.youtube.com/watch?v=DYHng61lftA&ab_channel=CarreroQuirogaDanielAlejandro",
  },
  5: {
    src: "/media/riviera-paradise.mp4",
    href: "https://www.youtube.com/watch?v=3c_8VUL5jks&ab_channel=stevierayvaughnVEVO",
  },
  6: {
    src: "/media/srv-blues.mp4",
    href: "https://www.youtube.com/watch?v=VSLc0tCnOrM&ab_channel=stevie%27sblues",
  },
};

const Scene: React.FC = () => {
  const orb = useRef<Mesh>(null!);
  const video = useRef<Mesh>(null!);
  const renderTarget = useFBO();
  const { viewport } = useThree();
  const [hero] = useState(heroes[rand(1, 6)]!);
  const texture = useVideoTexture(hero.src);
  const router = useRouter();

  const calcObjectSize = (defaultSize: number, defaultVMax = 22.25) => {
    const vmax =
      viewport.width > viewport.height ? viewport.width : viewport.height;
    const percentage = defaultSize / defaultVMax;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    return isPortrait ? vmax * percentage * 1.5 : vmax * percentage;
  };

  useFrame((state) => {
    const { gl, scene, camera, pointer } = state;
    video.current.visible = true;
    gl.setRenderTarget(renderTarget);
    gl.render(scene, camera);
    video.current.visible = false;
    orb.current.rotation.x = MathUtils.lerp(
      orb.current.rotation.x,
      pointer.y * 1.5,
      0.02,
    );
    orb.current.rotation.y = MathUtils.lerp(
      orb.current.rotation.y,
      pointer.x * 1.5,
      0.02,
    );
    orb.current.position.x = MathUtils.lerp(
      orb.current.position.x,
      pointer.x,
      0.02,
    );
    orb.current.position.y = MathUtils.lerp(
      orb.current.position.y,
      pointer.y,
      0.02,
    );
    gl.setRenderTarget(null);
  });

  return (
    <>
      <Environment files="/utils/dancing_hall_1k.hdr" blur={1} />
      <group position={[calcObjectSize(2), -0.5, 0]}>
        <mesh onClick={() => void router.push(hero.href)} ref={orb}>
          <octahedronGeometry args={[calcObjectSize(3), 20]} />
          <MeshTransmissionMaterial
            buffer={renderTarget.texture}
            ior={1.2}
            thickness={1.5}
            anisotropy={0.1}
            chromaticAberration={0.3}
            distortionScale={1.0}
            roughness={0.2}
            temporalDistortion={0.3}
          />
        </mesh>
        <mesh
          ref={video}
          position={[calcObjectSize(1), -0.5, 0]}
          scale={[7, 7, 0]}
        >
          <planeGeometry />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
        <ContactShadows
          position={[-2.25, -5, 0]}
          blur={calcObjectSize(1.5)}
          scale={calcObjectSize(50)}
          far={7}
        />
      </group>
    </>
  );
};

export default Scene;
