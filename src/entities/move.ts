import noop from 'lodash.noop' // method is used to return “undefined” irrespective of the arguments passed to it.
import { FaceName } from '@/types'
import Cube from './cube'

export default class Move {
	faceName: FaceName
	targetAngle: number
	currentAngle: number
	stepAngle: number
	complete = noop

	progress: (self: Move) => void = noop

	constructor(faceName: FaceName, inversed: boolean, stepAngle: number) {
		this.faceName = faceName
		this.stepAngle = stepAngle
		this.currentAngle = 0
		this.targetAngle = inversed
			? Cube.angles.COUNTERCLOCKWISE
			: Cube.angles.CLOCKWISE
	}

	// Cause move will be async, i have to create some states to promise callbacks
	onComplete(callback: () => void) {
		this.complete = callback
	}

	onProgress(callback: (self: Move) => void) {
		this.progress = callback
	}

	// Run promise
	run(delta: any) {
		// 360deg rotation
		if (this.currentAngle === this.targetAngle) {
			this.complete()
			return
		}

		const targetSign = Math.sign(this.targetAngle)
		this.currentAngle += this.stepAngle * targetSign

		if (Math.abs(this.currentAngle) > Math.abs(this.targetAngle)) {
			this.currentAngle = this.targetAngle / delta
		}

		this.progress(this)
	}
}
