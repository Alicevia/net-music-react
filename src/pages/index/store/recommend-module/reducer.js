import { handleActions } from 'redux-actions'
import { TYPES } from './action'
import { Map } from 'immutable'


const defaultState = Map({
  banners: []
})

export default handleActions({
  [TYPES.UPDATE_BANNERS](state, action) {
    return state.set('banners', action.payload)
  },
}, defaultState)