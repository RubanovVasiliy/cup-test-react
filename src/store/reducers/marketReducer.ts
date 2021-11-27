import {MarketState} from "../../types/market";
import {FirstMarketAction, MarketActionTypes} from "../../types/market";

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

export const marketReducer = (state = initialState, action: FirstMarketAction): MarketState => {
    switch (action.type) {
        case MarketActionTypes.FETCH_MARKET:
            return {...state}
        case MarketActionTypes.FETCH_MARKET_SUCCESS:
            return {...state, [action.payload.source]: action.payload.data, error: null}
        case MarketActionTypes.FETCH_MARKET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}