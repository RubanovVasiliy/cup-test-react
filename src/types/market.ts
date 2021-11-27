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


