import { call, put, takeEvery } from 'redux-saga/effects'
import { reqTopBanners, reqHotRec, reqNewAlbum } from '@/services/recommendApi'
import { TYPES } from './action'


function* fetchBanner(action) {
  //action可以被你截获取
  const res = yield call(reqTopBanners)
  yield put({ type: TYPES.UPDATE_BANNERS, payload: res.banners })
}

function* fetchHotRec(action) {
  const res = yield call(reqHotRec, action.payload)
  yield put({ type: TYPES.HOT_REC, payload: res.result })
}


function* fetchNewAlbum(action) {
  const res = yield call(reqNewAlbum, action.payload)
  yield put({ type: TYPES.NEW_ALBUM, payload: res.albums })
}



export default function* watchRecommend() {
  yield takeEvery(TYPES.FETCH_UPDATE_BANNERS, fetchBanner)
  yield takeEvery(TYPES.FETCH_HOT_REC, fetchHotRec)
  yield takeEvery(TYPES.FETCH_NEW_ALBUM, fetchNewAlbum)
}
