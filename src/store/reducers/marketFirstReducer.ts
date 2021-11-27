import {MarketState} from "../../types/market";
import {FirstMarketAction, MarketFirstActionTypes} from "../../types/marketFirst";

const initialState: MarketState = {
    first: {
        rates: {
            RUB: 0,
            USD: 0,
            EUR: 0,
        },
        base: '',
        timestamp: 0,
        date: '',
    },
    second: {
        rates: {
            RUB: 0,
            USD: 0,
            EUR: 0,
        },
        base: '',
        timestamp: 0,
        date: '',
    },
    third: {
        rates: {
            RUB: 0,
            USD: 0,
            EUR: 0,
        },
        base: '',
        timestamp: 0,
        date: '',
    },
    error: null
}

export const marketFirstReducer = (state = initialState, action: FirstMarketAction): MarketState => {
    switch (action.type) {
        case MarketFirstActionTypes.FETCH_FIRST_MARKET:
            return {...state}
        case MarketFirstActionTypes.FETCH_FIRST_MARKET_SUCCESS:
            return {...state, [action.payload.source]: action.payload.data}
        case MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}