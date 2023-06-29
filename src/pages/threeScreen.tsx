import { OrbitControls } from "@react-three/drei";
import Ocean from "../world/Ocean"
//TODO: Panolens 구현하기 
//TOOD: texture 불러오기 
//TODO: orbit control 제한해보기
//TODO: equirectangler 설치하기 
//TODO: message 보여지는지 확인할것 
const threeScreen = () => {
	return (
		<>
			<OrbitControls enableZoom={false} enableRotate={true} />
			<mesh>
			</mesh>
			<Ocean></Ocean>
		</>
	);
};
export default threeScreen
