import {MarketFirstActionTypes} from "../../types/marketFirst";
import {IError, MarketStateOutputDto} from "../../types/market";

export const fetchMFAC = () => ({type: MarketFirstActionTypes.FETCH_FIRST_MARKET})
export const fetchMFSuccessAC = (payload: MarketStateOutputDto) => ({type: MarketFirstActionTypes.FETCH_FIRST_MARKET_SUCCESS, payload})
export const fetchMFErrorAC = (payload: IError) => ({type: MarketFirstActionTypes.FETCH_FIRST_MARKET_ERROR, payload})