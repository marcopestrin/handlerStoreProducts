import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux"
import { selectorProduct } from "../../redux/selectors"
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
    const { register, handleSubmit } = useForm<IFormInput>();
    // const products = useSelector(selectorProduct);
    const dispatch = useDispatch();
    const onSubmit = (data: IFormInput) => {
        console.log(data)
        dispatch({ 
            type: ADD_ITEM,
            payload: data
        });
    }

    return <form
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
}

export default AddProduct;
