import React from 'react';

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { ADD_ITEM } from '../../redux/actions'

interface IFormInput {
    title: string;
    body: string;
    userId: number;
}

function AddProduct() {
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const dispatch = useDispatch();
    const onSubmit = (data: IFormInput) => {
        reset()
        dispatch({ 
            type: ADD_ITEM,
            payload: data
        });
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <Grid container spacing={3}>
                
                <Grid item xs={4}>
                    <TextField fullWidth={true} label="Title" variant="outlined" name="title" inputRef={register} />
                </Grid>                

                <Grid item xs={4}>
                    <TextField fullWidth label="Body" variant="outlined" name="body" inputRef={register} />
                </Grid>

                <Grid item xs={4}>
                    <TextField fullWidth label="userId" variant="outlined" name="userId" inputRef={register} type="Number" />
                </Grid>

                <Grid item xs={4}>
                    <Button 
                        variant="contained"
                        color="secondary"
                        type="submit"
                        fullWidth
                    >
                        ADD ITEM
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default AddProduct;
