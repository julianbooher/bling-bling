import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      maxWidth: 900,
    },
    tableContainer: {
        maxWidth: 900,
      },
  });

export default function TransactionTable() {
    const classes = useStyles();
    const transactions = useSelector(state => state.transactions);
    
    return (
        <div>  
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Expense</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow key={transaction._id}>
                                <TableCell>{transaction.owes} owes {transaction.owed} {transaction.cost} for {transaction.name}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}