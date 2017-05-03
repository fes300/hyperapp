// ACTION TYPES
const PING = 'PING'
const PONG = 'PONG'

// ACTION CREATORS
export const ping = () => ({ type: PING })

// EPIC
export const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' })

// REDUCER
export default function reducer (state = { isPinging: false }, action) {
  switch (action.type) {
    case PING:
      return { isPinging: true }

    case PONG:
      return { isPinging: false }

    default:
      return state
  }
}
