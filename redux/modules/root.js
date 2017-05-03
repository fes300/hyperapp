import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import ping, { pingEpic } from './Ping'
import users, { fetchUserEpic } from './Users'

export const rootEpic = combineEpics(
  pingEpic,
  fetchUserEpic
)

export const rootReducer = combineReducers({
  ping,
  users
})
