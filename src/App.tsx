import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Box from "./model/Box"
import { Suspense } from "react";
function App() {
	return (
		<Suspense fallback={null}>

			<Canvas camera={{ position: [0, 0, 2] }}>
				<Environment
					files="/sky.hdr"
					background
				/>
				<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
				<PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
				<Box />
			</Canvas >
		</Suspense>
	);
}

export default App;
