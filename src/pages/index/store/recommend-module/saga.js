import { call, put, takeEvery } from 'redux-saga/effects'
import { reqTopBanners } from '@/services/recommendApi'
import { TYPES } from './action'


function* fetchBanner(action) {
  //action可以被你截获取
  const res = yield call(reqTopBanners)
  yield put({ type: TYPES.UPDATE_BANNERS, payload: res.banners })
}


export default function* watchRecommend() {
  yield takeEvery(TYPES.FETCH_UPDATE_BANNERS, fetchBanner)
}
