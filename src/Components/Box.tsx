import usePegatineTextures from '@/hooks/usePegatineTexture'
import { PegatineColor } from '@/types'
import React from 'react'
import * as THREE from 'three'

interface BoxProps {
	position: [number, number, number]
	rightColor?: PegatineColor
	leftColor?: PegatineColor
	upColor?: PegatineColor
	downColor?: PegatineColor
	frontColor?: PegatineColor
	backColor?: PegatineColor
}

type MaterialProps = { color: string } | { map: THREE.Texture }

/**
 * material faces: [RIGHT, LEFT, UP, DOWN, FRONT, BACK]
 */
export const Box = React.forwardRef<THREE.Mesh, BoxProps>((props, ref) => {
	const {
		position,
		rightColor,
		leftColor,
		upColor,
		downColor,
		frontColor,
		backColor,
	} = props

	const textures = usePegatineTextures()

	function getMaterialProps(faceColor?: PegatineColor): MaterialProps {
		if (!faceColor) {
			return { color: 'black' }
		}

		return { map: textures[faceColor] as THREE.Texture }
	}

	return (
		<group ref={ref}>
			<mesh position={position}>
				<boxGeometry attach='geometry' args={[1, 1, 1]} />
				<meshBasicMaterial color={'black'} />
			</mesh>

			{/* Left  */}
			{leftColor ? (
				<mesh position={[position[0] - 0.4999, position[1], position[2]]}>
					<boxGeometry attach='geometry' args={[0.01, 1, 1]} />
					<meshBasicMaterial {...getMaterialProps(leftColor)} />
				</mesh>
			) : null}

			{/* Right  */}
			{rightColor ? (
				<mesh position={[position[0] + 0.4999, position[1], position[2]]}>
					<boxGeometry attach='geometry' args={[0.01, 1, 1]} />
					<meshBasicMaterial {...getMaterialProps(rightColor)} />
				</mesh>
			) : null}

			{/* Top  */}
			{upColor ? (
				<mesh position={[position[0], position[1] + 0.4999, position[2]]}>
					<boxGeometry attach='geometry' args={[1, 0.01, 1]} />
					<meshBasicMaterial {...getMaterialProps(upColor)} />
				</mesh>
			) : null}

			{/* Bottom */}
			{downColor ? (
				<mesh position={[position[0], position[1] - 0.4999, position[2]]}>
					<boxGeometry attach='geometry' args={[1, 0.01, 1]} />
					<meshBasicMaterial {...getMaterialProps(downColor)} />
				</mesh>
			) : null}

			{/* front */}
			{frontColor ? (
				<mesh position={[position[0], position[1], position[2] + 0.4999]}>
					<boxGeometry attach='geometry' args={[1, 1, 0.01]} />
					<meshBasicMaterial {...getMaterialProps(frontColor)} />
				</mesh>
			) : null}

			{/* back */}
			{backColor ? (
				<mesh position={[position[0], position[1], position[2] - 0.4999]}>
					<boxGeometry attach='geometry' args={[1, 1, 0.01]} />
					<meshBasicMaterial {...getMaterialProps(backColor)} />
				</mesh>
			) : null}
		</group>
	)
})
