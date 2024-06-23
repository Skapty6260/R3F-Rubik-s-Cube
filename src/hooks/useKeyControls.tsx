import { RefCallback, useEffect, useRef } from 'react'

interface IProps {
	key: string
	callback: RefCallback<KeyboardEvent>
}

export const useKeyControls = (
	{ key, callback }: IProps = { key: '', callback: () => {} }
) => {
	const callbackRef = useRef(callback)

	useEffect(() => {
		callbackRef.current = callback
	})

	useEffect(() => {
		function handle(event: KeyboardEvent) {
			if (event.key === key) {
				callbackRef.current(event)
			}
		}

		document.addEventListener('keypress', handle)
		return () => document.removeEventListener('keypress', handle)
	}, [key])
}
