import { useGLTF, useTexture, Decal } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
const Shirt = () => {
  const { nodes } = useGLTF("/shirt_baked.glb");
  const nodes2 = useGLTF("/scene.glb");
  console.log(nodes2);
  // materials.lambert1.color.setStyle("#FFF3DA");
  const logo = useTexture("/car.png");
  console.log(nodes);
  return (
    <mesh
      castShadow
      geometry={nodes.Sketchfab_model}
      // material={materials.lambert1}
      material-roughness={1}
      dispose={null}
      position={[0, 0.5, 0]}
      rotation={[0, 0, 0]}
      scale={9}
    >
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      <Decal
        position={[0, 0.17, 0.1]}
        rotation={[0, 0, 0]}
        scale={0.14}
        map={logo}
        depthTest={false}
        depthWrite={true}
      />
    </mesh>
  );
};

export default Shirt;
