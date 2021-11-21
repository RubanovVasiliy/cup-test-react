import {Dispatch} from "redux";
import {FirstMarketAction, MarketFirstActionTypes} from "../../types/marketFirst";
import axios from "axios";
import {marketFirstPollURL, marketFirstURL} from "../../URLs";

export const fetchMarketFirst = () => {
    return async (dispatch: Dispatch<FirstMarketAction>) => {
        try {
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET})
            const {data} = await axios.get(marketFirstURL)
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR, payload: "Error loading market first"})
        }
    }
}

export const fetchMarketFirstPoll = () => {
    return async (dispatch: Dispatch<FirstMarketAction>) => {
        try {
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET})
            const {data} = await axios.get(marketFirstPollURL)
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET_SUCCESS, payload: data})
            await fetchMarketFirstPoll()
        } catch (e) {
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR, payload: "Error loading market first poll"})
        }
    }
}