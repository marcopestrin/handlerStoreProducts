import React, { FC } from 'react'
import { useDispatch } from "react-redux"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { REMOVE_ITEM } from '../../redux/actions'
import { DATA_KEY } from '../../config'

export const GridProducts: FC = (props: any): JSX.Element => {
    const dispatch = useDispatch();
    const { firstItem, lastItem, products } = props

    const deleteItem = (payload: any) => {
        dispatch({
            type: REMOVE_ITEM,
            payload
        })
    }
    const NoData = () => {
        return (
            <Grid item xs={4}>
                <Typography variant="body2" gutterBottom> DATA NOT AVAILABLE </Typography>
            </Grid>
        )
    }

    return (
        <Grid container spacing={6} xs={12}>
            { products?.length ? products.map((prod: any, index: number) =>  {
                if(index >= firstItem && index < lastItem) {
                    return (
                        <Grid item xs={4}>
                            <Card variant="outlined">
                                <CardContent>
                                    {DATA_KEY.map(col => (
                                        <Typography color="primary"><strong>{col.toUpperCase()}</strong>: {prod[col]}</Typography>
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
                    )
                }  
            }) : <NoData /> }
        </Grid>
    )
}