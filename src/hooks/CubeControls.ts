import React from 'react'

const useCubeControls = () => {
	// Whole Cube
	const [xPressed, setXPressed] = React.useState(false)
	const [yPressed, setYPressed] = React.useState(false)
	const [zPressed, setZPressed] = React.useState(false)

	// Faces
	const [fPressed, setFPressed] = React.useState(false)
	const [rPressed, setRPressed] = React.useState(false)
	const [uPressed, setUPressed] = React.useState(false)
	const [bPressed, setBPressed] = React.useState(false)
	const [lPressed, setLPressed] = React.useState(false)
	const [dPressed, setDPressed] = React.useState(false)

	return {
		xPressed,
		yPressed,
		zPressed,
		fPressed,
		rPressed,
		uPressed,
		bPressed,
		lPressed,
		dPressed,
		setXPressed,
		setYPressed,
		setZPressed,
		setFPressed,
		setRPressed,
		setUPressed,
		setBPressed,
		setLPressed,
		setDPressed,
	}
}

export default useCubeControls
