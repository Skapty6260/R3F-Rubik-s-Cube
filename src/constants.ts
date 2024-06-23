import { Vector3 } from 'three'

export const CUBE_SIZE: number = 0.925
export const CUBE_VOLUME_SIZE: number = 0.01
export const COLORS = ['white', 'blue', 'green', 'red', 'yellow', 'orange']

/*
//  Cube matrix with values -1, 0, 1
	[1, 1, 1], //1
	[1, 1, 0], //2
	[1, 1, -1], //3
	[1, 0, 1], //4
	[1, 0, 0], //5
	[1, 0, -1], //6
	[1, -1, 1], //7
	[1, -1, 0], //8
	[1, -1, -1], //9
	[0, 1, 1], //10
	[0, 1, 0], //11
	[0, 1, -1], //12
	[0, 0, 1], //13
	[0, 0, -1], //15
	[0, -1, 1], //16
	[0, -1, 0], //17
	[0, -1, -1], //18
	[-1, 1, 1], //19
	[-1, 1, 0], //20
	[-1, 1, -1], //21
	[-1, 0, 1], //22
	[-1, 0, 0], //23
	[-1, 0, -1], //24
	[-1, -1, 1], //25
	[-1, -1, 0], //26
	[-1, -1, -1], //26 (AI generates 27 with [0,0,0], which should be empty. A.K.A removed)*/

//  Sides (Faces) top, middle, bottom
export const TopSide = [
	[1, 1, 1], //1
	[0, 1, 0], //2
	[1, 1, 0], //3
	[0, 1, 1], //4
	[0, 1, -1], //5
	[-1, 1, 1], //7
	[-1, 1, 0], //8
	[-1, 1, -1], //9
	[1, 1, -1], //10
]
export const BottomSide = [
	[-1, -1, -1], //1
	[-1, -1, 0], //2
	[-1, -1, 1], //3
	[0, -1, -1], //4
	[0, -1, 0], //5
	[0, -1, 1], //6
	[1, -1, -1], //7
	[1, -1, 0], //8
	[1, -1, 1], //9
]
export const MiddleSide = [
	[1, 0, 1], //1
	[0, 0, 1], //2
	[1, 0, 0], //3
	[0, 0, -1], //4
	[-1, 0, 1], //5
	[0, 0, 1], //6
	[-1, 0, 0], //7
	[1, 0, -1], //9
	[-1, 0, -1],
]

// Slices (horizontal faces) left, middle, right
export const LeftSlice = []

export const CubeMatrix = [TopSide, BottomSide, MiddleSide]
