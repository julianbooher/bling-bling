import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

  
  
  export default function TransactionInput() {
      const classes = useStyles();
      const [values, setValues] = useState({
          name: '',
          cost: null,
          date: null,
          buyer: null
      })

      const handleChange = (prop) => (event) => {
          setValues({ ...values, [prop]: event.target.value });
      };

    return (
        <div className={classes.root}>
            <div>
            <FormControl className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-cost">Cost</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-cost"
                    value={values.cost}
                    onChange={handleChange('cost')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={40}
                />
            </FormControl>

            </div>
        </div>
    )
}