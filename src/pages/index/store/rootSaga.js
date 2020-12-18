import { all, fork } from 'redux-saga/effects'

import recommend from './recommend-module/saga'

export default function* () {
  yield all([fork(recommend)])
}