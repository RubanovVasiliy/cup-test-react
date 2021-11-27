import {Dispatch} from "redux";
import {FirstMarketAction, MarketActionTypes, SourceType} from "../../types/market";
import axios from "axios";
import {URLs} from "../../URLs";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchMarketFirst = (url: URLs, source: SourceType) => {
    return async (dispatch: Dispatch<FirstMarketAction>) => {
        try {
            dispatch({type: MarketActionTypes.FETCH_MARKET})
            const {data} = await axios.get(url)
            dispatch({type: MarketActionTypes.FETCH_MARKET_SUCCESS, payload: {data: data, source: source}})
        } catch (e) {
            dispatch({type: MarketActionTypes.FETCH_MARKET_ERROR, payload: "Error loading market"})
        }
    }
}

export const fetchMarketFirstPoll = (url: URLs, source: SourceType) => {
    return async (dispatch: Dispatch<FirstMarketAction>) => {
        while (true) {
            try {
                dispatch({type: MarketActionTypes.FETCH_MARKET})
                const {data} = await axios.get(url)
                dispatch({
                    type: MarketActionTypes.FETCH_MARKET_SUCCESS,
                    payload: {data: data, source: source}
                })
            } catch (e) {
                dispatch({
                    type: MarketActionTypes.FETCH_MARKET_ERROR,
                    payload: "Error loading market poll"
                })
                await delay(5000)
                await fetchMarketFirstPoll(url, source)
            }
        }
    }
}


