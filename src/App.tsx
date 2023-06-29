import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import Box from "./model/Box"
import { Suspense } from "react";
import Ocean from "./world/Ocean";
function App() {
	return (
		<Suspense fallback={null}>
			<Canvas>
				<Environment
					files="/sky.hdr"
					background
				/>
				<PerspectiveCamera fov={50} />
				<OrbitControls target={[100, 0.35, 0]} maxPolarAngle={1.45} enableRotate={false} enablePan={true} enableZoom={false} />

				<spotLight
					color={[1, 0.25, 0, 7]}
					intensity={1.5}
					angle={0.6}
					penumbra={0.5}
					position={[5, 5, 0]}
					castShadow
					shadow-bias={-0.0001}
				/>



				<Box />
				<Ocean></Ocean>
			</Canvas >
		</Suspense>
	);
}

export default App;
