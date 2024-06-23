'use client'
import { Environment } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import SkyBox from '@/Components/SkyBox'
import TooltipsUI from '@/Components/ui/tooltips'
import { useRef } from 'react'
import { FaceName } from '@/types'
import Cube from '@/Components/Cube/index'
import { useKeyControls } from '@/hooks/useKeyControls'
import useCubeControls from '@/hooks/CubeControls'

export default function Home() {
	const cubeRef: any = useRef(null!)

	useKeyControls({
		key: 'f',
		callback: () => {
			if (cubeRef.current) {
				cubeRef.current.rotateFace('F', true)
			}
		},
	})

	useKeyControls({
		key: 'r',
		callback: () => {
			if (cubeRef.current) {
				cubeRef.current.rotateFace('R', true)
			}
		},
	})

	useKeyControls({
		key: 'u',
		callback: () => {
			if (cubeRef.current) {
				cubeRef.current.rotateFace('U', true)
			}
		},
	})

	useKeyControls({
		key: 'b',
		callback: () => {
			if (cubeRef.current) {
				cubeRef.current.rotateFace('B', true)
			}
		},
	})

	useKeyControls({
		key: 'l',
		callback: () => {
			if (cubeRef.current) {
				cubeRef.current.rotateFace('L', true)
			}
		},
	})

	useKeyControls({
		key: 'd',
		callback: () => {
			if (cubeRef.current) {
				cubeRef.current.rotateFace('D', true)
			}
		},
	})

	useKeyControls({
		key: 'm',
		callback: () => {
			if (cubeRef.current) {
				cubeRef.current.rotateFace('M', true)
			}
		},
	})

	useKeyControls({
		key: 'e',
		callback: () => {
			console.log('e')
			if (cubeRef.current) {
				cubeRef.current.rotateFace('E', true)
			}
		},
	})

	useKeyControls({
		key: 's',
		callback: () => {
			if (cubeRef.current) {
				cubeRef.current.rotateFace('S', true)
			}
		},
	})

	return (
		<main className='h-screen w-full align-middle relative overflow-hidden flex'>
			<TooltipsUI />

			<div className='w-full h-screen'>
				<Canvas camera={{ position: [5, 5, 5] }}>
					<SkyBox />

					<ambientLight intensity={0.5} />
					<directionalLight position={[2, 5, 5]} />

					<Cube ref={cubeRef} />

					<Environment preset='park' />
				</Canvas>
			</div>
		</main>
	)
}
