import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { ADD_ITEM } from '../../redux/actions'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            display: 'flex',
            flexWrap: 'wrap',
        }
    })
);

interface IFormInput {
    title: string;
    description: string;
    price: number;
    category: string;
    employee: string;
    reviews: string;
}

function AddProduct() {
    const classes = useStyles();
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const dispatch = useDispatch();
    const onSubmit = (data: IFormInput) => {
        reset()
        dispatch({ 
            type: ADD_ITEM,
            payload: data
        });
    }

    return <Box>
        <Grid item spacing={3}>
            <Typography variant="h5" component="h5">Add a new product</Typography>
            <form
                className={classes.root}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField label="Title" variant="outlined" name="title" inputRef={register} />
                <TextField label="Description" variant="outlined" name="description" inputRef={register} />
                <TextField label="Price" variant="outlined" name="price" inputRef={register} type="Number" />
                <TextField label="Category" variant="outlined" name="category" inputRef={register} />
                <TextField label="Employee" variant="outlined" name="employee" inputRef={register} />
                <TextField label="Reviews" variant="outlined" name="reviews" inputRef={register} />
                <Button 
                    variant="contained"
                    color="secondary"
                    type="submit"
                >
                    ADD ITEM
                </Button>
            </form>
        </Grid>
    </Box>
}

export default AddProduct;
