import { useState } from "react";
import car from "/public/car.png";

import Shirt from "./canvas/Shirt";
import { Canvas } from "@react-three/fiber";
import Design from "./pages/Design";

function App() {
  const [detail, setDetail] = useState({ x: 0, y: 0, color: "grey" });
  return (
    <div className=" bg-slate-200 h-screen">
      {/* <Design setDetail={setDetail} detail={detail} /> */}
      <div className=" h-96">
        <Canvas>
          <hemisphereLight intensity={1} position={[0, 0, 0]} />
          <Shirt detail={detail} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
