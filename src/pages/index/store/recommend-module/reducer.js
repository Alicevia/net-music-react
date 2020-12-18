import { handleActions } from 'redux-actions'
import { TYPES } from './action'
const defaultState = {
  banners: []
}

export default handleActions({
  [TYPES.UPDATE_BANNERS](state, action) {
    console.log(state, action)
    state.banners = action.payload
    return { ...state }
  },
}, defaultState)