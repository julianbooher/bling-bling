import React, {useEffect} from 'react';
import TransactionTable from '../TransactionTable/TransactionTable.jsx';
import TransactionInput from '../TransactionInput/TransactionInput.jsx';


export default function Home(){
    return (
        <div>
            <TransactionInput/>
            <TransactionTable/>
        </div>
    )
}