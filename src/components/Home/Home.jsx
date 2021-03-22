import React, {useEffect} from 'react';
import TransactionTable from '../TransactionTable/TransactionTable.jsx'


export default function Home(){
    return (
        <div>
            <h4>Hello from Home</h4>
            <TransactionTable/>
        </div>
    )
}