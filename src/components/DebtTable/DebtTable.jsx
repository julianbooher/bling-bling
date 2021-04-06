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

import moment from 'moment';

const useStyles = makeStyles({
    table: {
      maxWidth: 500,
    },
    tableContainer: {
        maxWidth: 500,
      },
  });

export default function TransactionTable() {
    const classes = useStyles();
    const debt = useSelector(state => state.debt);
    
    return (
        <div>  
            {JSON.stringify(debt)}
        </div>
    )
}