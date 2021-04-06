import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import TransactionTable from '../TransactionTable/TransactionTable.jsx';
import TransactionInput from '../TransactionInput/TransactionInput.jsx';
import DebtTable from '../DebtTable/DebtTable.jsx'

// Material UI
import Grid from '@material-ui/core/Grid';


export default function Home(){

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type: 'FETCH_ALL_TRANSACTIONS'})
        dispatch({type: 'FETCH_ALL_DEBTS', payload: {userOne: 'Julian', userTwo: 'Teaghan'}})
    }, [])

    return (
        <div>
            <Grid container>
                <Grid item xs={12} xl={9}>
                    <TransactionInput/>
                </Grid>
                <Grid item xs={12} xl={3}>
                    <DebtTable />
                </Grid>
            </Grid>
            <TransactionTable/>
            
        </div>
    )
}