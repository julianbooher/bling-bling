import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import TransactionTable from '../TransactionTable/TransactionTable.jsx';
import TransactionInput from '../TransactionInput/TransactionInput.jsx';


export default function Home(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type: 'FETCH_ALL_TRANSACTIONS'})
        dispatch({type: 'FETCH_ALL_DEBTS'})
    }, [])

    return (
        <div>
            <TransactionInput/>
            <TransactionTable/>
        </div>
    )
}