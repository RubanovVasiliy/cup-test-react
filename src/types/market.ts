export interface MarketStateOutputDto {
    rates: MarketRatesOutputDto,
    base: string,
    timestamp: number,
    date: string,
}

interface MarketRatesOutputDto {
    RUB: number,
    USD: number,
    EUR: number,
}

export interface MarketState {
    first: MarketStateOutputDto,
    second: MarketStateOutputDto,
    third: MarketStateOutputDto,
    error: string | null
}

export enum MarketActionTypes {
    FETCH_MARKET = "FETCH_MARKET",
    FETCH_MARKET_SUCCESS = "FETCH_MARKET_SUCCESS",
    FETCH_MARKET_ERROR = "FETCH_MARKET_ERROR",
}

interface FetchMarketAction {
    type: MarketActionTypes.FETCH_MARKET,
}

interface FetchMarketSuccessAction {
    type: MarketActionTypes.FETCH_MARKET_SUCCESS,
    payload: { data: MarketStateOutputDto, source: SourceType }
}

interface FetchMarketErrorAction {
    type: MarketActionTypes.FETCH_MARKET_ERROR,
    payload: string
}

export type SourceType = 'first' | 'second' | 'third'

export type FirstMarketAction = FetchMarketAction | FetchMarketSuccessAction | FetchMarketErrorAction


