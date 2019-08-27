# unuse [![Build Status](https://travis-ci.org/dy/unuse.svg?branch=master)](https://travis-ci.org/dy/unuse)

Reactless `useEffect` and `useState` hooks for any function.
Impose less [hooks limitations](https://reactjs.org/docs/hooks-rules.html) than React: basically, hook must be sync (unless async callstack is available).

[![NPM](https://nodei.co/npm/unhook.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/unhook/)

```js
import { useEffect } from 'unhook'

getProp({a: { b: { c: 1}} }, 'a.b.c') // 1
getProp([1,2,3], 2) // 3
getProp({}, 'a.b') // undefined

// recognizes arrays too
getProp({a: { b: { c: 1}} }, ['a', 'b', 'c']) // 1
getProp({a: { 'b.c': 1 }}, ['a', 'b.c']) // 1
```

For production, use [babel-plugin-unhook](https://ghub.io/dy/unhook)


### Similar art

* [augmentor](https://www.npmjs.com/package/augmentor), [dom-augmentor](https://www.npmjs.com/package/dom-augmentor)
* [preact hooks](https://preactjs.com/guide/v10/hooks/)
