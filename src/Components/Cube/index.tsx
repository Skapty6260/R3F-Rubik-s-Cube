import useRefs from '@/hooks/useRefs'
import { FaceName } from '@/types'
import { facesMeta } from './meta'
import * as THREE from 'three'
import React, { useEffect } from 'react'

import CubeEntity from '@/entities/cube'
import { rotateAroundWorldAxis } from './helpers'
import MoveEntity from '@/entities/move'
import { Box } from '@/Components/Box'
import { useFrame } from 'react-three-fiber'
import getRandomMoves from '@/utils/getRandomMoves'
import useCubeControls from '@/hooks/CubeControls'
import { useKeyControls } from '@/hooks/useKeyControls'

export interface CubeRef {
	rotateFace(faceName: FaceName, inversed: boolean): void
	scrambleFaces(): void
}

const defaultStepAngle = 6

const Cube = React.forwardRef<CubeRef, {}>((_, ref) => {
	const boxRefs = useRefs<THREE.Mesh>(27) // Custom hook to manage multiple refs
	const cubeEntityRef = React.useRef<CubeEntity>(new CubeEntity())

	const moveEntityRef = React.useRef<MoveEntity>()

	// Implement keybind rotations
	const cubeRef: any = React.useRef(null)

	const {
		xPressed,
		yPressed,
		zPressed,
		setXPressed,
		setYPressed,
		setZPressed,
	} = useCubeControls()

	useKeyControls({
		key: 'x',
		callback: () => {
			if (yPressed || zPressed) return
			setXPressed(true)
			setTimeout(() => {
				setXPressed(false)
			}, 310)
		},
	})
	useKeyControls({
		key: 'y',
		callback: () => {
			if (xPressed || zPressed) return
			setYPressed(true)
			setTimeout(() => {
				setYPressed(false)
			}, 310)
		},
	})
	useKeyControls({
		// Add Keydown callback
		key: 'z',
		callback: () => {
			if (xPressed || yPressed) return
			setZPressed(true)
			setTimeout(() => {
				setZPressed(false)
			}, 310)
		},
	})

	useFrame((state, delta) => {
		const { x, y } = cubeRef.current.position
		const deltaAngle = Math.atan2(y, x) / (Math.PI / 180)

		xPressed && (cubeRef.current.rotation.x += delta * 5)
		yPressed && (cubeRef.current.rotation.y += delta * 5)
		zPressed && (cubeRef.current.rotation.z += delta * 5)
	})

	const rotateMeshs = (faceName: FaceName, degrees: number) => {
		const facePieces = cubeEntityRef.current.faces[faceName]

		// workaround for not available refs, for now
		for (let i = 0; i < 9; i += 1) {
			const piece = facePieces[i]
			if (!boxRefs[piece.key].current) {
				return
			}
		}

		for (let i = 0; i < 9; i += 1) {
			const piece = facePieces[i]
			rotateAroundWorldAxis(
				boxRefs[piece.key].current!,
				facesMeta[faceName].axis,
				THREE.MathUtils.degToRad(degrees)
			)
		}
	}

	const rotateFace = async (
		faceName: FaceName,
		inversed: boolean,
		stepAngle = defaultStepAngle
	) => {
		if (moveEntityRef.current) {
			return Promise.resolve()
		}

		return new Promise<void>(resolve => {
			moveEntityRef.current = new MoveEntity(faceName, inversed, stepAngle)

			moveEntityRef.current.onComplete(() => {
				cubeEntityRef.current.rotate(faceName, inversed)
				moveEntityRef.current = undefined
				resolve()
			})

			moveEntityRef.current.onProgress(move => {
				const targetSign = Math.sign(move.targetAngle)
				const rotationFactor = facesMeta[faceName].inverse
					? -targetSign
					: targetSign
				rotateMeshs(faceName, stepAngle * rotationFactor)
			})
		})
	}

	const scrambleFaces = async () => {
		if (moveEntityRef.current) {
			alert('Please wait for the current rotation to finish')
			return
		}

		const moves = getRandomMoves(20)

		for (let i = 0; i < moves.length; i++) {
			const { faceName, inversed } = moves[i]
			// eslint-disable-next-line
			await rotateFace(faceName, inversed, defaultStepAngle * 3)
		}

		alert('The cube is ready for you 🥳')
	}

	useFrame((_, delta) => {
		if (moveEntityRef.current) {
			moveEntityRef.current.run(delta)
		}
	})

	React.useImperativeHandle(ref, () => ({
		rotateFace,
		scrambleFaces,
	}))

	React.useEffect(() => {
		return () => {
			// clean up the promise
			if (moveEntityRef.current) {
				moveEntityRef.current.complete()
			}
		}
	}, [])

	useFrame((state, delta) => {
		if (moveEntityRef.current) {
			state.scene.updateMatrixWorld()
		}
	})

	return (
		<React.Suspense fallback={null}>
			<group ref={cubeRef}>
				<Box
					ref={boxRefs[0]}
					position={[-1, 1, 1]}
					upColor='yellow'
					leftColor='red'
					frontColor='green'
				/>
				<Box
					ref={boxRefs[1]}
					position={[0, 1, 1]}
					upColor='yellow'
					frontColor='green'
				/>
				<Box
					ref={boxRefs[2]}
					position={[1, 1, 1]}
					upColor='yellow'
					rightColor='orange'
					frontColor='green'
				/>
				<Box
					ref={boxRefs[3]}
					position={[-1, 0, 1]}
					frontColor='green'
					leftColor='red'
				/>
				<Box ref={boxRefs[4]} position={[0, 0, 1]} frontColor='green' />
				<Box
					ref={boxRefs[5]}
					position={[1, 0, 1]}
					frontColor='green'
					rightColor='orange'
				/>
				<Box
					ref={boxRefs[6]}
					position={[-1, -1, 1]}
					leftColor='red'
					frontColor='green'
					downColor='white'
				/>
				<Box
					ref={boxRefs[7]}
					position={[0, -1, 1]}
					frontColor='green'
					downColor='white'
				/>
				<Box
					ref={boxRefs[8]}
					position={[1, -1, 1]}
					rightColor='orange'
					frontColor='green'
					downColor='white'
				/>
				<Box
					ref={boxRefs[9]}
					position={[-1, 1, 0]}
					upColor='yellow'
					leftColor='red'
				/>
				<Box ref={boxRefs[10]} position={[0, 1, 0]} upColor='yellow' />
				<Box
					ref={boxRefs[11]}
					position={[1, 1, 0]}
					upColor='yellow'
					rightColor='orange'
				/>
				<Box ref={boxRefs[12]} position={[-1, 0, 0]} leftColor='red' />
				<Box ref={boxRefs[13]} position={[0, 0, 0]} />
				<Box ref={boxRefs[14]} position={[1, 0, 0]} rightColor='orange' />
				<Box
					ref={boxRefs[15]}
					position={[-1, -1, 0]}
					leftColor='red'
					downColor='white'
				/>
				<Box ref={boxRefs[16]} position={[0, -1, 0]} downColor='white' />
				<Box
					ref={boxRefs[17]}
					position={[1, -1, 0]}
					rightColor='orange'
					downColor='white'
				/>
				<Box
					ref={boxRefs[18]}
					position={[-1, 1, -1]}
					backColor='blue'
					upColor='yellow'
					leftColor='red'
				/>
				<Box
					ref={boxRefs[19]}
					position={[0, 1, -1]}
					backColor='blue'
					upColor='yellow'
				/>
				<Box
					ref={boxRefs[20]}
					position={[1, 1, -1]}
					backColor='blue'
					upColor='yellow'
					rightColor='orange'
				/>
				<Box
					ref={boxRefs[21]}
					position={[-1, 0, -1]}
					backColor='blue'
					leftColor='red'
				/>
				<Box ref={boxRefs[22]} position={[0, 0, -1]} backColor='blue' />
				<Box
					ref={boxRefs[23]}
					position={[1, 0, -1]}
					backColor='blue'
					rightColor='orange'
				/>
				<Box
					ref={boxRefs[24]}
					position={[-1, -1, -1]}
					leftColor='red'
					backColor='blue'
					downColor='white'
				/>
				<Box
					ref={boxRefs[25]}
					position={[0, -1, -1]}
					backColor='blue'
					downColor='white'
				/>
				<Box
					ref={boxRefs[26]}
					position={[1, -1, -1]}
					rightColor='orange'
					backColor='blue'
					downColor='white'
				/>
			</group>
		</React.Suspense>
	)
})

export default Cube
