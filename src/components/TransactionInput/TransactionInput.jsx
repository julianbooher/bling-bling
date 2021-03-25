import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    // },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '25%',
        maxWidth: '40%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formPaper:{
        maxWidth: 900
    }
  }));

const people = [
    'Julian',
    'Teaghan'
]

const defaultState = {
    owes: '',
    owed: '',
    cost: 0,
    name: ''
}

  
  
export default function TransactionInput() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [values, setValues] = useState(defaultState)

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch({type: 'POST_NEW_TRANSACTION', payload: values})
        setValues(defaultState)

    }

return (
    <>
        {/* {JSON.stringify(values)} */}
        <br></br>
        <div>
            <Paper className={classes.formPaper}>
                <Grid container>
                    <form onSubmit={handleSubmit}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={values.owes}
                            onChange={handleChange('owes')}
                            required
                            label="Name"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {people.map((person, i) => (
                            <MenuItem key={i} value={person}>{person}</MenuItem>
                        ))}

                        </Select>
                    </FormControl>
                    <p style={{display: 'inline-block'}}>Owes</p>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={values.owed}
                            onChange={handleChange('owed')}
                            required
                            label="Name"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {people.map((person, i) => (
                            <MenuItem key={i} value={person}>{person}</MenuItem>
                        ))}

                        </Select>
                    </FormControl>
                    <FormControl className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-cost">Cost</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-cost"
                            value={values.cost}
                            onChange={handleChange('cost')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="cost"
                            required
                            type="number"
                        />
                    </FormControl>
                    <FormControl className={classes.margin} variant="outlined">
                    <TextField 
                        id="outlined-basic" 
                        variant="outlined"
                        label="Expense Name" 
                        value={values.name}
                        onChange={handleChange('name')}
                    />
                    </FormControl>
                    <div>
                        <Button 
                            className={classes.margin}
                            variant="contained" 
                            color="primary" 
                            type="submit"
                        >
                            Submit
                        </Button>
                    </div>

                    </form>
                </Grid>
            </Paper>
        </div>
    </>
    )
}