import { h, app, Router } from 'hyperapp'

app({
  state: {
    count: 0,
  },
  actions: {
    add: s => ({ count: s.count + 1 })
  },
  view: {
    '/': (s,a) => <button onclick={a.add}>{s.count}</button>,
    '*': _ => <h1>{location.pathname}</h1>,
  },
  plugins: [Router],
})
