import { useFrame, useThree } from 'react-three-fiber'
import React, { useRef } from 'react'


export function Controls(props) {
	const { camera, gl } = useThree()
	const ref = useRef()
	useFrame(() => ref.current.update())
	return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}
