import Head from "next/head";
import Link from "next/link";
import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Mono1 from "../Components/Monoliths1";
import Mono2 from "../Components/Monoliths2";
import Mono3 from "../Components/Monoliths3";
import Mono4 from "../Components/Monoliths4";
import { MapControls, Loader } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function Home() {
  const mapControlsRef = useRef(null);
  const [evilMode, setEvilMode] = useState(false);
  const [introOpen, setIntroOpen] = useState(true);

  const spring = useSpring({
    intensity: evilMode ? 0 : 0.2,
  });

  useEffect(() => {
    if (!!mapControlsRef.current) {
      console.log(mapControlsRef.current.position);
    }
  }, [mapControlsRef.current]);

  const Loading = "Loading";

  return (
    <>
      <Head>
        <title>Jacob Dunbar CV</title>
        <meta
          name="Jacob Dunbar CV"
          content="curriculum vitae CV resume web front end developer Jacob Dunbar "
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {introOpen && (
        <div className={css.intro}>
          <div className={css.modal}>
            <h2 className={css.heading}>Jacob Dunbar CV</h2>{" "}
            <button className={css.button}>
              <Link href={"./jacobDunbarCV.pdf"} download>
                Download PDF
              </Link>
            </button>
            <div className={css.textCont}>
              <p className={css.para}>Or</p>
              <p className={css.para}>Continue into the jungle.</p>
              <p className={css.para}>
                Click and drag to navigate and explore. Look out for frightened
                Jacob and be carefull around the skull...
              </p>
              <p className={css.para}>☠️</p>
              <p className={css.para}>
                Download the PDF version at any time by clicking the button in
                the bottom left corner.
              </p>
            </div>
            <button className={css.button} onClick={() => setIntroOpen(false)}>
              Enter
            </button>
          </div>
        </div>
      )}

      <div className={css.superCont}>
        {!introOpen && (
          <button className={css.buttonPerm}>
            <Link href={"./jacobDunbarCV.pdf"} download>
              Download PDF
            </Link>
          </button>
        )}

        <Canvas>
          <MapControls
            ref={mapControlsRef}
            enableZoom={false}
            enableRotate={false}
          />
          <animated.ambientLight intensity={spring.intensity} />
          <perspectiveCamera makeDefault position={[0, 0, 0]} />
          <Suspense fallback={null}>
            <Mono1 setEvilMode={setEvilMode} evilMode={evilMode} />
          </Suspense>
          <Suspense fallback={null}>
            <Mono2 setEvilMode={setEvilMode} evilMode={evilMode} />
          </Suspense>
          <Suspense fallback={null}>
            <Mono3 setEvilMode={setEvilMode} evilMode={evilMode} />
          </Suspense>
          <Suspense fallback={null}>
            <Mono4 setEvilMode={setEvilMode} evilMode={evilMode} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
