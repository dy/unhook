# unhook [![Build Status](https://travis-ci.org/dy/unhook.svg?branch=master)](https://travis-ci.org/dy/unhook)

Reactless `useEffect` and `useState` hooks for any function.
Impose less [hooks limitations](https://reactjs.org/docs/hooks-rules.html) than React: basically, hook must be sync (unless async callstack is available).

[![NPM](https://nodei.co/npm/unhook.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/unhook/)

```js
import { useEffect, useState } from 'unhook'

function foo () {
  useEffect(() => {
    // called once
  }, [])

  let [x, setX] = useState(1)
}
```

Internally, _unhooks_ use [`error.stack`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack), which is non-standard, but well supported by all browsers for long time.
For production, use [babel-plugin-unhook](https://ghub.io/dy/unhook).


### Similar art

* [augmentor](https://www.npmjs.com/package/augmentor), [dom-augmentor](https://www.npmjs.com/package/dom-augmentor)
* [preact hooks](https://preactjs.com/guide/v10/hooks/)
* [idx](https://ghub.io/idx)

##

HK
