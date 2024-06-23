import { FaceName } from '@/types'
import MoveEntity from '@/entities/move'

export const RotateFace = async (
	faceName: FaceName,
	inversed: boolean,
	stepAngle: number,
	facesMeta: any,
	moveEntityRef: any,
	rotateMeshs: any,
	cubeEntityRef: any
) => {
	if (moveEntityRef.current) {
		return Promise.resolve()
	}

	return new Promise(resolve => {
		moveEntityRef.current = new MoveEntity(faceName, inversed, stepAngle)

		moveEntityRef.current.onComplete(() => {
			cubeEntityRef.current.rotate(faceName, inversed)
			moveEntityRef.current = undefined
			resolve()
		})

		moveEntityRef.current.onProgress((move: any) => {
			const targetSign = Math.sign(move.targetAngle)
			const rotationFactor = facesMeta[faceName].inverse
				? -targetSign
				: targetSign
			rotateMeshs(faceName, stepAngle * rotationFactor)
		})
	})
}
