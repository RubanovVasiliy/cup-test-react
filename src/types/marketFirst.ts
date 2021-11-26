import {MarketStateOutputDto} from "./market";

export enum MarketFirstActionTypes {
    FETCH_FIRST_MARKET = "FETCH_FIRST_MARKET",
    FETCH_FIRST_MARKET_SUCCESS = "FETCH_FIRST_MARKET_SUCCESS",
    FETCH_FIRST_MARKET_ERROR = "FETCH_FIRST_MARKET_ERROR",
    START_POLLING_FIRST_MARKET = "START_POLLING_FIRST_MARKET",
    STOP_POLLING_FIRST_MARKET = "STOP_POLLING_FIRST_MARKET",
}

interface FetchFirstMarketAction {
    type: MarketFirstActionTypes.FETCH_FIRST_MARKET,
}

interface FetchFirstMarketSuccessAction {
    type: MarketFirstActionTypes.FETCH_FIRST_MARKET_SUCCESS,
    payload: MarketStateOutputDto
}

interface FetchFirstMarketErrorAction {
    type: MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR,
    payload: string
}

interface StartPollingFirstMarketAction {
    type: MarketFirstActionTypes.START_POLLING_FIRST_MARKET,
}

interface StopPollingFirstMarketAction {
    type: MarketFirstActionTypes.STOP_POLLING_FIRST_MARKET,
}

export type FirstMarketAction = FetchFirstMarketAction | FetchFirstMarketSuccessAction
    | FetchFirstMarketErrorAction | StartPollingFirstMarketAction | StopPollingFirstMarketAction