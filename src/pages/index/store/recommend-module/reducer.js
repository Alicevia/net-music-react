import { handleActions } from 'redux-actions'
import { TYPES } from './action'
import { Map } from 'immutable'


const defaultState = Map({
  banners: [],
  hotRec: [],
  album: []
})

export default handleActions({
  [TYPES.UPDATE_BANNERS](state, action) {
    return state.set('banners', action.payload)
  },
  [TYPES.HOT_REC](state, action) {
    return state.set('hotRec', action.payload)
  },
  [TYPES.NEW_ALBUM](state, action) {
    return state.set('album', action.payload)
  },
}, defaultState)