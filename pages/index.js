import Head from "next/head";

import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Mono1 from "../Components/Mono1-engravedexport";
import Mono2 from "../Components/Mono2engraved4export";
import Mono3 from "../Components/Mono3engravedexport";
import { Sparkles } from "@react-three/drei";

// import Sparkles from "@react-three/drei";

export default function Home() {
  return (
    <div className={css.page}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css.canvasCont1}>
        <Canvas className={css.canvas}>
          <Suspense fallback={null}>
            <Mono1 />
            <ambientLight intensity={0.2} />
            <Sparkles
              count={15}
              speed={0.75}
              opacity={0.5}
              size={5}
              scale={5}
              noise={20}
              color={"#d5fdeb"}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className={css.canvasCont2}>
        <Canvas className={css.canvas}>
          <Suspense>
            <Mono2 />
            <ambientLight intensity={0.2} />
            <Sparkles
              count={15}
              speed={0.75}
              opacity={0.5}
              size={5}
              scale={5}
              noise={20}
              color={"#d5fdeb"}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className={css.canvasCont3}>
        <Canvas className={css.canvas}>
          <Suspense>
            <Mono3 />
            <ambientLight intensity={0.2} />
            <Sparkles
              count={15}
              speed={0.75}
              opacity={0.5}
              size={5}
              scale={5}
              noise={20}
              color={"#d5fdeb"}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
