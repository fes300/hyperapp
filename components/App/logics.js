import { fetchUser } from '../../redux/modules/Users'
import { ping } from '../../redux/modules/Ping'

export default {
  onclick (dispatch, type) {
    switch (type) {
      case 'fetch':
        dispatch(fetchUser('redux-observable'))
        break
      case 'ping':
        dispatch(ping())
        break
      default:
      // no default
    }
  }
}
