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
    payload: MarketStateOutputDto
}

interface FetchFirstMarketErrorAction {
    type: MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR,
    payload: string
}

export type FirstMarketAction = FetchFirstMarketAction | FetchFirstMarketSuccessAction | FetchFirstMarketErrorAction