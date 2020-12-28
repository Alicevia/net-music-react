import { handleActions } from 'redux-actions'
import { TYPES } from './action'
import { Map } from 'immutable'


const defaultState = Map({
  banners: [],
  hotRec: [],
  album: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  hotSinger: [],
  hotAnchor: []
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
  [TYPES.UP_RANKING](state, action) {
    return state.set('upRanking', action.payload)
  },
  [TYPES.NEW_RANKING](state, action) {
    return state.set('newRanking', action.payload)
  },
  [TYPES.ORIGIN_RANKING](state, action) {
    return state.set('originRanking', action.payload)
  },
  [TYPES.HOT_SINGER](state, action) {
    return state.set('hotSinger', action.payload)
  },
  [TYPES.HOT_ANCHOR](state, action) {
    return state.set('hotAnchor', action.payload)
  },
}, defaultState)