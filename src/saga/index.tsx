import {all} from 'redux-saga/effects'
import {pollingMFWatcher} from "./marketFirstSaga";

export function* rootWatcher() {
    yield all( [pollingMFWatcher()])
}