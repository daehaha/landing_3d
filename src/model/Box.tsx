export default function Box() {
	return (
		<mesh position={[-2, 100, 100]}>
			<boxGeometry />
			<meshBasicMaterial color={0x00ff00} wireframe />
		</mesh>
	)
}
