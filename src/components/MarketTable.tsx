import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {useActions} from "../store/hooks/useActions";
import {Table} from "antd";
import 'antd/dist/antd.css';


const MarketTable: FC = () => {
    const state = useTypedSelector(state => state.first)
    const {fetchMarketFirst,fetchMarketFirstPoll} = useActions()

    useEffect(() => {
        //fetchMarketFirst()
        fetchMarketFirstPoll()
    }, [])

    const dataSource = [
        {
            key: '1',
            pair:'RUB/CUPCAKE',
            first: state.market.rates.RUB,
            second: '1',
            third: '1',
        },
        {
            key: '2',
            pair:'USD/CUPCAKE',
            first: state.market.rates.USD,
            second: '1',
            third: '1',
        },
        {
            key: '3',
            pair:'EUR/CUPCAKE',
            first: state.market.rates.EUR,
            second: '1',
            third: '1',
        },
        {
            key: '4',
            pair:'RUB/USD',
            first: state.market.rates.RUB/state.market.rates.USD,
            second: '1',
            third: '1',
        },
        {
            key: '5',
            pair:'RUB/EUR',
            first: state.market.rates.RUB/state.market.rates.EUR,
            second: '1',
            third: '1',
        },
        {
            key: '6',
            pair:'EUR/USD',
            first: state.market.rates.EUR/state.market.rates.USD,
            second: '1',
            third: '1',
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
            {state.market.rates.EUR}
            <br/>
            {state.market.rates.RUB}
            <br/>
            {state.market.rates.USD}
            <br/>
            {state.market.date}
            <Table dataSource={dataSource} columns={columns} pagination={{ position: [] }}/>;
        </div>
    );
};

export default MarketTable;