import React, { useEffect, FC } from 'react'
import { useSelector, useDispatch } from "react-redux"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import { FETCH_PRODUCTS_LIST_REQUEST } from '../../redux/actions'
import { selectorProduct } from "../../redux/selectors"

// componente REACT della lista dei prodotti
export const ListProducts: FC = (props: any): JSX.Element => {
    const products = useSelector(selectorProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ 
            type: FETCH_PRODUCTS_LIST_REQUEST
        });
      }, []);

    return <TableContainer>
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Title</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { products.length ? products.map((prod: any) => (
                    <TableRow>
                        <TableCell>{prod.data.category}</TableCell>
                        <TableCell>{prod.data.description}</TableCell>
                        <TableCell>{prod.data.price}</TableCell>
                        <TableCell>{prod.data.title}</TableCell>
                    </TableRow>
                )) :
                <TableRow>
                    <Typography variant="body2" gutterBottom> DATA NOT AVAILABLE </Typography>
                </TableRow>
                }
            </TableBody>
        </Table>
    </TableContainer>
}