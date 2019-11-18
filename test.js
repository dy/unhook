import t from 'tape'
import { useState, useEffect } from '.'

t.only('useState', t => {
	let log = []
	function a() {
		let [value, setValue] = useState(1)
		log.push('a', value)
		setValue(value + 1)
	}
	function b() {
		let [value, setValue] = useState(100)
		log.push('b', value)
		setValue(value - 1)
	}

	a()
	t.deepEqual(log, ['a', 1])

	b()
	t.deepEqual(log, ['a', 1, 'b', 100])

	a()
	t.deepEqual(log, ['a', 1, 'b', 100, 'a', 2])

	b()
	t.deepEqual(log, ['a', 1, 'b', 100, 'a', 2, 'b', 99])

	function step(x, y) {
		x()
		y()
	}
	step(a, b)
	t.deepEqual(log, ['a', 1, 'b', 100, 'a', 2, 'b', 99, 'a', 3, 'b', 98])

	setTimeout(() => {
		a()
		b()
		t.deepEqual(log, ['a', 1, 'b', 100, 'a', 2, 'b', 99, 'a', 3, 'b', 98, 'a', 4, 'b', 97])

		t.end()
	})
})

t.skip('useEffect', t => {
	function tick() {
		let [count, setCount] = useState(0)
		console.log(count)
		useEffect(() => {
			let id = setInterval(() => {
				setCount(count => count + 1)

				// NOTE: function must be triggered manually
				tick()
			}, 1000)
			return () => clearInterval(id)
		}, [])
	}

	tick()
})
