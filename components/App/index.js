import logics from './logics'
import model from './model'
import render from './render'


function app(render, model) {
  render`
  <div>
    <h1>Hello, ${model.name}!</h1>
    <h2>Last render: ${new Date().toLocaleTimeString()}.</h2>
    <h2>count: ${model.count}.</h2>
    <div
      onclick="${logics.onclick}"
    > button to click </div>
  </div>
  `
}


export default app.bind(null, render, model)
