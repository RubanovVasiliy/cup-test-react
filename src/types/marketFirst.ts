import {MarketStateOutputDto} from "./market";

export enum MarketFirstActionTypes {
    FETCH_FIRST_MARKET = "FETCH_FIRST_MARKET",
    FETCH_FIRST_MARKET_SUCCESS = "FETCH_FIRST_MARKET_SUCCESS",
    FETCH_FIRST_MARKET_ERROR = "FETCH_FIRST_MARKET_ERROR",
}

interface FetchFirstMarketAction {
    type: MarketFirstActionTypes.FETCH_FIRST_MARKET,
}

interface FetchFirstMarketSuccessAction {
    type: MarketFirstActionTypes.FETCH_FIRST_MARKET_SUCCESS,
    payload: {data:MarketStateOutputDto , source: SourceType}
}

interface FetchFirstMarketErrorAction {
    type: MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR,
    payload: string
}

export type SourceType = 'first' | 'second' | 'third'

export type FirstMarketAction = FetchFirstMarketAction | FetchFirstMarketSuccessAction | FetchFirstMarketErrorAction