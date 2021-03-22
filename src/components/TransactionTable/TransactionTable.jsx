import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function TransactionTable() {

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch({type: 'FETCH_ALL_TRANSACTIONS'})
    }, [])
    const transactions = useSelector(state => state.transactions);

    return (
        <div>
            <h2>Hello from TransactionTable.jsx</h2>
            {JSON.stringify(transactions)}
        </div>
    )
}