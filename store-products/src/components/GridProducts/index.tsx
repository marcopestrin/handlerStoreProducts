import React, { useEffect, FC } from 'react'
import { useSelector, useDispatch } from "react-redux"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { selectorProduct } from "../../redux/selectors"
import { FETCH_PRODUCTS_LIST_REQUEST, REMOVE_ITEM } from '../../redux/actions'
import { DATA_KEY } from '../../config'

export const GridProducts: FC = (props: any): JSX.Element => {
    const products = useSelector(selectorProduct);
    const dispatch = useDispatch();
    const column = ['title', 'description', 'price', 'category', 'employee', 'reviews']

    useEffect(() => {
        dispatch({ 
            type: FETCH_PRODUCTS_LIST_REQUEST
        });
      }, []);

    function deleteItem (payload: any) {
        dispatch({
            type: REMOVE_ITEM,
            payload
        })
    }

    return <>
        <Grid container spacing={3}>
            { products.length ? products.map((prod: any) => (
                <>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardContent>
                                {DATA_KEY.map(col => (
                                    <Typography>{col.toUpperCase()}: {prod.data[col]}</Typography>
                                ))}
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="secondary"
                                    onClick={(e) => {
                                        deleteItem(prod)
                                    }}
                                >DELETE ITEM</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </>
            )): <>nooo</>}
        </Grid>
    </>
    }