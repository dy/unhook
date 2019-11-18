import enhook, {
	useState as useNativeState,
	useEffect as useNativeEffect,
	useMemo as useNativeMemo,
	useReducer as useNativeReducer,
	useCallback as useNativeCallback,
	useContext as useNativeContext,
	useRef as useNativeRef,
	useLayoutEffect as useNativeLayoutEffect
} from 'enhook'
import { parse } from 'stacktrace-parser'


const cache = {}

export default function unhook (hook) {
	return (...args) => {
		let [unhookSite, fnSite, callSite, ...stack] = parse(new Error().stack)
		let stackId = `${fnSite.file}:${fnSite.lineNumber}:${fnSite.column}`

		const fn = cache[stackId] || (cache[stackId] = enhook((...args) => hook(...args)))

		return fn(...args)
	}
}

export const useState = unhook(useNativeState)
export const useEffect = unhook(useNativeEffect)
export const useCallback = unhook(useNativeCallback)
export const useMemo = unhook(useNativeMemo)
export const useReducer = unhook(useNativeReducer)
export const useLayoutEffect = unhook(useNativeLayoutEffect)
export const useContext = unhook(useNativeContext)
export const useRef = unhook(useNativeRef)
