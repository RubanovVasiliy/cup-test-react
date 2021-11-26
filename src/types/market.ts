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

export type IError = string | null


export interface MarketState {
    market: MarketStateOutputDto,
    error: IError
}


