import logics from './logics'
import render from './render'

function app (render, store) {
  const { users, ping } = store.getState()

  const usersToRender = Object.keys(users).length > 0
    ? JSON.stringify(users) : ''

  console.log('rendering App...')

  render`
  <div>
    <h1>Hello, app!</h1>
    <h2>Last render: ${new Date().toLocaleTimeString()}.</h2>
    <h2>isPinging? ${JSON.stringify(ping.isPinging)}.</h2>
    <div
      style="background-color: #426e86;color: #FFF; width: 100px;text-align: center;"
      onclick="${logics.onclick.bind(null, store.dispatch, 'fetch')}"
    > Fetch user </div>
    ${usersToRender}
    <br />
    <div
      style="background-color: #fff;color: #426e86; border: 2px solid #426e86; width: 100px;text-align: center;"
      onclick="${logics.onclick.bind(null, store.dispatch, 'ping')}"
    > Ping </div>
  </div>
  `
}

export default app.bind(null, render)
