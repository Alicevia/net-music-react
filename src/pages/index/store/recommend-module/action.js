import { createActions } from 'redux-actions'

export const TYPES = {
  FETCH_UPDATE_BANNERS: 'recommend/FETCH_UPDATE_BANNERS',
  UPDATE_BANNERS: 'recommend/UPDATE_BANNERS',
  HOT_REC: 'recommend/HOC_REC',
  FETCH_HOT_REC: 'recommend/FETCH_HOT_REC',
}


export default createActions({
  [TYPES.FETCH_UPDATE_BANNERS](data) {
    return data
  },
  [TYPES.UPDATE_BANNERS](data) {
    return data
  },
  [TYPES.FETCH_HOT_REC](data) {
    return data
  },
})


