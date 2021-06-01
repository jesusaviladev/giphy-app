import { renderHook, act } from '@testing-library/react-hooks'
import useForm from './useForm.js'

test('should change keyword', ()=>{
	
	const { result } = renderHook(()=> useForm())

	act(()=>{
		result.current.updateKeyword('pochoclo')
	})

	expect(result.current.keyword).toBe('pochoclo')

	})

test('should use inital values', ()=>{
	
	const { result } = renderHook(()=> useForm({ initialKeyword: 'batman'}))

	expect(result.current.keyword).toBe('batman')

	})

test('should change state twice', () => {

	const { result } = renderHook(()=> useForm())

	act(()=>{
		result.current.updateKeyword('cotu')
		result.current.updateKeyword('cotufa')
	})

	expect(result.current.keyword).toBe('cotufa')
})
