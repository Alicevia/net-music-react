import { call, put, takeEvery } from 'redux-saga/effects'
import { reqTopBanners, reqHotRec, reqNewAlbum, reqListRanking } from '@/services/recommendApi'
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

function* fetchListRanking(action) {
  let idx = action.payload.idx
  const res = yield call(reqListRanking, action.payload)
  let payload = res.playlist
  if (idx === 0) {
    yield put({ type: TYPES.UP_RANKING, payload })
  } else if (idx === 2) {
    yield put({ type: TYPES.NEW_RANKING, payload })
  } else if (idx === 3) {
    yield put({ type: TYPES.ORIGIN_RANKING, payload })

  }
}



export default function* watchRecommend() {
  yield takeEvery(TYPES.FETCH_UPDATE_BANNERS, fetchBanner)
  yield takeEvery(TYPES.FETCH_HOT_REC, fetchHotRec)
  yield takeEvery(TYPES.FETCH_NEW_ALBUM, fetchNewAlbum)
  yield takeEvery(TYPES.FETCH_LIST_RANKING, fetchListRanking)
}
