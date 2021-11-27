import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {useActions} from "../store/hooks/useActions";
import {Table} from "antd";
import 'antd/dist/antd.css';
import {URLs} from "../URLs";


const MarketTable: FC = () => {
    const state = useTypedSelector(state => state.first)
    const {fetchMarketFirstPoll} = useActions()

    useEffect(() => {
        fetchMarketFirstPoll(URLs.marketFirstPollURL, "first")
        fetchMarketFirstPoll(URLs.marketSecondPollURL, "second")
        fetchMarketFirstPoll(URLs.marketThirdPollURL, "third")
    }, [])


    const first = {
        RUB: state.first.rates.RUB.toFixed(2),
        USD: state.first.rates.USD.toFixed(2),
        EUR: state.first.rates.EUR.toFixed(2),
        RUB_USD: (state.first.rates.RUB / state.first.rates.USD).toFixed(2),
        RUB_EUR: (state.first.rates.RUB / state.first.rates.EUR).toFixed(2),
        EUR_USD: (state.first.rates.EUR / state.first.rates.USD).toFixed(2)
    }
    const second = {
        RUB: state.second.rates.RUB.toFixed(2),
        USD: state.second.rates.USD.toFixed(2),
        EUR: state.second.rates.EUR.toFixed(2),
        RUB_USD: (state.second.rates.RUB / state.second.rates.USD).toFixed(2),
        RUB_EUR: (state.second.rates.RUB / state.second.rates.EUR).toFixed(2),
        EUR_USD: (state.second.rates.EUR / state.second.rates.USD).toFixed(2),
    }
    const third = {
        RUB: state.third.rates.RUB.toFixed(2),
        USD: state.third.rates.USD.toFixed(2),
        EUR: state.third.rates.EUR.toFixed(2),
        RUB_USD: (state.third.rates.RUB / state.third.rates.USD).toFixed(2),
        RUB_EUR: (state.third.rates.RUB / state.third.rates.EUR).toFixed(2),
        EUR_USD: (state.third.rates.EUR / state.third.rates.USD).toFixed(2),
    }


    const dataSource = [
        {
            key: '1',
            pair: 'RUB/CUPCAKE',
            first: first.RUB,
            second: second.RUB,
            third: third.RUB,
        },
        {
            key: '2',
            pair: 'USD/CUPCAKE',
            first: first.USD,
            second: second.USD,
            third: third.USD,
        },
        {
            key: '3',
            pair: 'EUR/CUPCAKE',
            first: first.EUR,
            second: second.EUR,
            third: third.EUR,
        },
        {
            key: '4',
            pair: 'RUB/USD',
            first: first.RUB_USD,
            second: second.RUB_USD,
            third: third.RUB_USD,
        },
        {
            key: '5',
            pair: 'RUB/EUR',
            first: first.RUB_EUR,
            second: second.RUB_EUR,
            third: third.RUB_EUR,
        },
        {
            key: '6',
            pair: 'EUR/USD',
            first: first.EUR_USD,
            second: second.EUR_USD,
            third: third.EUR_USD,
        },
    ];

    const columns = [
        {
            title: 'Pair name/market',
            dataIndex: 'pair',
            key: 'pair',
        },
        {
            title: 'First',
            dataIndex: 'first',
            key: 'first',
        },
        {
            title: 'Second',
            dataIndex: 'second',
            key: 'second',
        },
        {
            title: 'Third',
            dataIndex: 'third',
            key: 'third',
        },
    ];

    return (
        <div>
            {state.error && <h1>{state.error}</h1>}
            <Table dataSource={dataSource} columns={columns} pagination={{position: []}}/>;
        </div>
    );
};

export default MarketTable;