import * as THREE from 'three'

export interface PegatineTextures {
	red: THREE.Texture
	orange: THREE.Texture
	blue: THREE.Texture
	green: THREE.Texture
	white: THREE.Texture
	yellow: THREE.Texture
}

export type PegatineColor = keyof PegatineTextures

export interface ICube {
	// coloredSides: IColoredSides
	position: number[]
}

export interface IColoredSides {
	cube: number[]

	x: {
		color?: PegatineColor
		position: 'negative' | 'positive' | 'none'
	}
	y: {
		color?: PegatineColor
		position: 'negative' | 'positive' | 'none'
	}
	z: {
		color?: PegatineColor
		position: 'negative' | 'positive' | 'none'
	}
}

//  CONTROLS
export type FaceName = 'U' | 'D' | 'L' | 'R' | 'F' | 'B' | 'M' | 'E' | 'S'

export type SliceName = 'M' | 'S' | 'E'

export type ControlName =
	| 'front'
	| 'down'
	| 'right'
	| 'back'
	| 'up'
	| 'left'
	| 'middle'
	| 'standing'
	| 'equatorial'

// Move
export interface Move<T = FaceName> {
	faceName: T
	inversed: boolean
}
