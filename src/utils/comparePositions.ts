import { IColoredSides } from '@/types'

export const comparePosition = (position: number[], value: number[]) => {
	return position[0] == value[0] &&
		position[1] == value[1] &&
		position[2] == value[2]
		? true
		: false
}

export const definePositions = (position: number[]) => {
	const Compare: { [key: string]: IColoredSides } = {
		// 1
		'[1,0,0]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'none' },
			z: { position: 'none' },
			cube: position,
		},
		'[1,1,0]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'none' },
			cube: position,
		},
		'[1,-1,1]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},
		'[1,0,1]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'none' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},
		'[1,1,1]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},
		'[1,1,-1]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},
		'[1,-1,0]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'none' },
			cube: position,
		},
		'[1,0,-1]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'none' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},
		'[1,-1,-1]': {
			x: { position: 'positive', color: 'yellow' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},

		// -1
		'[-1,0,0]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'none' },
			z: { position: 'none' },
			cube: position,
		},
		'[-1,-1,0]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'none' },
			cube: position,
		},
		'[-1,0,-1]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'none' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},
		'[-1,-1,-1]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},
		'[-1,1,0]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'none' },
			cube: position,
		},
		'[-1,1,-1]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},
		'[-1,-1,1]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},
		'[-1,0,1]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'none' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},
		'[-1,1,1]': {
			x: { position: 'negative', color: 'white' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},

		// 0
		'[0,1,0]': {
			x: { position: 'none' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'none' },
			cube: position,
		},
		'[0,0,1]': {
			x: { position: 'none' },
			y: { position: 'none' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},
		'[0,1,1]': {
			x: { position: 'none' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},
		'[0,-1,0]': {
			x: { position: 'none' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'none' },
			cube: position,
		},
		'[0,-1,1]': {
			x: { position: 'none' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'positive', color: 'blue' },
			cube: position,
		},
		'[0,0,-1]': {
			x: { position: 'none' },
			y: { position: 'none' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},
		'[0,1,-1]': {
			x: { position: 'none' },
			y: { position: 'positive', color: 'orange' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},
		'[0,-1,-1]': {
			x: { position: 'none' },
			y: { position: 'negative', color: 'red' },
			z: { position: 'negative', color: 'green' },
			cube: position,
		},
	}

	return Compare
}
