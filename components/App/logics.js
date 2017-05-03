import { fetchUser } from '../../redux/modules/Users/index.js'

export default {
  onclick (store) {
    store.dispatch(fetchUser('redux-observable'))
  }
}
