import {put, takeEvery, call} from 'redux-saga/effects'
import {fetchMFAC, fetchMFSuccessAC} from "../store/action-creators/marketFirst";
import axios from "axios";
import {MarketStateOutputDto} from "../types/market";

const fetchMarketFirstFromAPI = () => axios.get<MarketStateOutputDto>('http://localhost:3000/api/v1/third/poll')
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* fetchMarketFirstWorker() {
    try {
        const {data} = yield call(fetchMarketFirstFromAPI)
        yield put(fetchMFSuccessAC(data))
    } catch (e) {
        yield call(delay, 5000)
        yield put(fetchMFAC())
    }
}

export function* pollingMFWatcher() {
    yield takeEvery(fetchMFAC, fetchMarketFirstWorker)
}