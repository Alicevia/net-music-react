import { call, put, takeLatest } from 'redux-saga/effects'
import { reqTopBanners, reqHotRec } from '@/services/recommendApi'
import { TYPES } from './action'


function* fetchBanner(action) {
  //action可以被你截获取
  const res = yield call(reqTopBanners)
  yield put({ type: TYPES.UPDATE_BANNERS, payload: res.banners })
}

function* fetchHotRec(action) {
  console.log(action)
  const res = yield call(reqHotRec, action.payload)
  console.log(res)
  yield put({ type: TYPES.HOT_REC, payload: res.result })
}


export default function* watchRecommend() {
  yield takeLatest(TYPES.FETCH_UPDATE_BANNERS, fetchBanner)
  yield takeLatest(TYPES.FETCH_HOT_REC, fetchHotRec)
}
