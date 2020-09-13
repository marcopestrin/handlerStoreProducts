import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { ADD_ITEM } from '../../redux/actions'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
          margin: theme.spacing(3),
        },
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

    return (
            <form
                className={classes.root}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Grid container spacing={3}>
                    
                    <Grid item spacing={6} xs={4}>
                        <TextField fullWidth={true} label="Title" variant="outlined" name="title" inputRef={register} />
                    </Grid>                

                    <Grid item spacing={6} xs={4}>
                        <TextField fullWidth label="Description" variant="outlined" name="description" inputRef={register} />
                    </Grid>

                    <Grid item spacing={6} xs={4}>
                        <TextField fullWidth label="Price" variant="outlined" name="price" inputRef={register} type="Number" />
                    </Grid>
                    
                    <Grid item spacing={6} xs={4}>
                        <TextField fullWidth label="Category" variant="outlined" name="category" inputRef={register} />
                    </Grid>
                    
                    <Grid item spacing={6} xs={4}>
                        <TextField fullWidth label="Employee" variant="outlined" name="employee" inputRef={register} />
                    </Grid>
                    
                    <Grid item spacing={6} xs={4}>
                        <TextField fullWidth label="Reviews"  variant="outlined" name="reviews" inputRef={register} />
                    </Grid>

                    <Grid item spacing={6} xs={4}>
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
