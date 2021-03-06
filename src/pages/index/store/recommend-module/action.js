import { createActions } from 'redux-actions'

export const TYPES = {
  FETCH_UPDATE_BANNERS: 'recommend/FETCH_UPDATE_BANNERS',
  UPDATE_BANNERS: 'recommend/UPDATE_BANNERS',
  HOT_REC: 'recommend/HOC_REC',
  FETCH_HOT_REC: 'recommend/FETCH_HOT_REC',
  FETCH_NEW_ALBUM: 'recommend/FETCH_NEW_ALBUM',
  NEW_ALBUM: 'recommend/NEW_ALBUM',

  FETCH_LIST_RANKING: 'recommend/FETCH_LIST_RANKING',
  UP_RANKING: 'recommend/UP_RANKING',
  NEW_RANKING: 'recommend/NEW_RANKING',
  ORIGIN_RANKING: 'recommend/ORIGIN_RANKING',

  HOT_SINGER: 'recommend/HOT_SINGER',
  FETCH_HOT_SINGER: 'recommend/FETCH_HOT_SINGER',

  HOT_ANCHOR: 'recommend/HOT_ANCHOR',
  FETCH_HOT_ANCHOR: 'recommend/FETCH_HOT_ANCHOR'
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
  [TYPES.FETCH_LIST_RANKING](data) {
    return data
  },
  [TYPES.FETCH_HOT_SINGER](data) {
    return data
  },
  [TYPES.FETCH_HOT_ANCHOR](data) {
    return data
  },
})


