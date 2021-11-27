import {Dispatch} from "redux";
import {FirstMarketAction, MarketFirstActionTypes, SourceType} from "../../types/marketFirst";
import axios from "axios";
import {URLs} from "../../URLs";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchMarketFirst = (url: URLs,) => {
    return async (dispatch: Dispatch<FirstMarketAction>) => {
        try {
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET})
            const {data} = await axios.get(url)
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR, payload: "Error loading market first"})
        }
    }
}

export const fetchMarketFirstPoll = (url: URLs, source: SourceType) => {
    return async (dispatch: Dispatch<FirstMarketAction>) => {
        while (true) {
            try {
                dispatch({type: MarketFirstActionTypes.FETCH_FIRST_MARKET})
                const {data} = await axios.get(url)
                dispatch({
                    type: MarketFirstActionTypes.FETCH_FIRST_MARKET_SUCCESS,
                    payload: {data: data, source: source}
                })
            } catch (e) {
                dispatch({
                    type: MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR,
                    payload: "Error loading market first poll"
                })
                await delay(5000)
                await fetchMarketFirstPoll(url, source)
            }
        }
    }
}


