import { OrbitControls, useTexture } from '@react-three/drei'
import React from 'react'
import { BackSide } from 'three'

const SkyBox = () => {
	const skyTexture = useTexture('assets/skybox.jpg')

	return (
		<mesh>
			<OrbitControls enableZoom={false} enablePan={false} />
			<sphereGeometry args={[60, 50, 50]} />
			<meshBasicMaterial map={skyTexture} side={BackSide} />
		</mesh>
	)
}

export default SkyBox
