import { useRef } from 'react'

export default function useRefs<T>(
	capacity: number,
	initValue: T | null = null
) {
	return Array.from({ length: capacity }).map(() => useRef<T>(initValue))
}
