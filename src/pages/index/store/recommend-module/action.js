import { createActions } from 'redux-actions'

export const TYPES = {
  FETCH_UPDATE_BANNERS: 'recommend/FETCH_UPDATE_BANNERS',
  UPDATE_BANNERS: 'recommend/UPDATE_BANNERS',
}


export default createActions({
  [TYPES.FETCH_UPDATE_BANNERS](data) {
    return data
  },
  [TYPES.UPDATE_BANNERS](data) {
    return data
  },
})


