import React, { useEffect, FC } from 'react'
import { useSelector, useDispatch } from "react-redux"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import { FETCH_PRODUCTS_LIST_REQUEST, REMOVE_ITEM } from '../../redux/actions'
import { selectorProduct } from "../../redux/selectors"

import DeleteIcon from '@material-ui/icons/Delete';

// componente REACT della lista dei prodotti
export const ListProducts: FC = (props: any): JSX.Element => {
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

    return <TableContainer>
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    {column.map(col => ( // ciclo tutte le colonne in maniera da crearmi l'intestazione della tabella
                        <TableCell>{col.toUpperCase()}</TableCell>
                    ))}
                    <TableCell>-</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { products.length ? products.map((prod: any) => (
                    <TableRow hover={true}>
                        {column.map(col => ( // ciclo tutte le colonne da renderizzare il contenuto della tabella
                            <TableCell size={"small"}>{prod.data[col]}</TableCell>
                        ))}
                        <TableCell size={"small"}>
                            <DeleteIcon
                                onClick={(e) => {
                                    deleteItem(prod)
                                }}
                                fontSize="small"
                            />
                            
                        </TableCell>
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