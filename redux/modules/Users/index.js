import Rx from 'rxjs/Rx'

const { ajax } = Rx.Observable

// ACTION TYPES
const FETCH_USER = 'FETCH_USER'
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'

// ACTION CREATORS
export const fetchUser = username => ({ type: FETCH_USER, payload: username })
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload })

// EPIC
export const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
    )

// REDUCER
export default function reducer (state = {}, action) {
  console.log(state, action);
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        // `login` is the username
        [action.payload.login]: action.payload
      }

    default:
      return state
  }
}
