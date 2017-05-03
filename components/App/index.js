import logics from './logics'
import model from './model'
import render from './render'


function app(render, store) {
  render`
  <div>
    <h1>Hello, ${model(store).name}!</h1>
    <h2>Last render: ${new Date().toLocaleTimeString()}.</h2>
    <h2>count: ${model(store).count}.</h2>
    <div
      onclick="${logics.onclick.bind(null, store)}"
    > button to click </div>
  </div>
  `
}


export default app.bind(null, render)
