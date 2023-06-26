import React, { Suspense, useEffect, useState,useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF ,useFBX,useAnimations} from "@react-three/drei";




import CanvasLoader from "../Loader";

const Boy = ({ isMobile }) => {
  const ref = useRef();

  const computer = useGLTF('./boy/boy.glb');
const {animations, names} = useFBX('./boy/Waving.fbx');
const { actions } = useAnimations(animations, ref);


 
useEffect(() => {/* highlight-line */
console.log(Object.keys(actions)); /* highlight-line */
actions['mixamo.com'].play();
}); 

  return (
    <mesh
    ref={ref}
     >
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      
      <ambientLight intensity={0.6}/>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0: 3.6}
        position={ [0, -3.25, 0]}
      
      />
    </mesh>
  );
};

const BoyCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if(!isMobile){
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
          <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
          autoRotate
          autoRotateSpeed={0.03}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
         <Boy isMobile={isMobile} />
      </Suspense>

     

      <Preload all />
    </Canvas>
  );}

  else{
    return(
      <>

      </>
    );
  }
};

export default BoyCanvas;