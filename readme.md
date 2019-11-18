# unhook [![Build Status](https://travis-ci.org/unihooks/unhook.svg?branch=master)](https://travis-ci.org/unihooks/unhook) ![experimental](https://img.shields.io/badge/stability-experimental-yellow)

Unleash react/preact hooks from components, make them available in regular javascript without [hooks limitations](https://reactjs.org/docs/hooks-rules.html).

[![NPM](https://nodei.co/npm/unhook.png?mini=true)](https://nodei.co/npm/unhook/)

```js
import { useEffect, useState } from 'unhook'

function tick() {
  let [count, setCount] = useState(0)

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count => count + 1)

      // NOTE: function must be triggered manually
      tick()
    }, 1000)
    return () => clearInterval(id)
  }, [])
}
```

Internally, _unhook_ uses [`error.stack`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack), which is non-standard, but well supported by all browsers/engines for a long time.

For production, it is possible to statically compile source to avoid using `error.stack`. (pending feature...)
<!-- For production, use [babel-plugin-unhook](https://ghub.io/unihooks/unhook). -->

## See also

* [enhook](https://ghub.io/enhook) - turn a function into hooks-enabled function.
* [any-hooks](https://ghub.io/any-hooks) - obtain any installed hooks.
* [unihooks](https://ghub.io/unihooks) - collection of universal hooks
* [remorph](https://ghub.io/@dy/remorph) - react-based morphdom

<p align="right">HK</p>
