import app from './components/App'
import store from './redux/configureStore'

function renderApp () {
  app(store)
}

store.subscribe(renderApp)
renderApp()
