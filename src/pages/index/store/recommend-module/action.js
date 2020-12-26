import { createActions } from 'redux-actions'

export const TYPES = {
  FETCH_UPDATE_BANNERS: 'recommend/FETCH_UPDATE_BANNERS',
  UPDATE_BANNERS: 'recommend/UPDATE_BANNERS',
  HOT_REC: 'recommend/HOC_REC',
  FETCH_HOT_REC: 'recommend/FETCH_HOT_REC',
  FETCH_NEW_ALBUM: 'recommend/FETCH_NEW_ALBUM',
  NEW_ALBUM: 'recommend/NEW_ALBUM',

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
  [TYPES.FETCH_NEW_ALBUM](data) {
    return data
  },
})


