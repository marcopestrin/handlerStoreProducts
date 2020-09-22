import React, { FC } from 'react'
import { useDispatch } from "react-redux"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import { REMOVE_ITEM } from '../../redux/actions'
import { DATA_KEY } from '../../config'

import DeleteIcon from '@material-ui/icons/Delete';

export const ListProducts: FC = (props: any): JSX.Element => {
    const dispatch = useDispatch();
    const { firstItem, lastItem, products } = props

    function deleteItem (payload: any) {
        dispatch({
            type: REMOVE_ITEM,
            payload
        })
    }

    const NoData = () => {
        return (
            <TableRow>
                <Typography variant="body2" gutterBottom> DATA NOT AVAILABLE </Typography>
            </TableRow>
        )
    }

    const THead = () => {
        return (
            <TableHead>
                <TableRow>
                    {DATA_KEY.map(col => ( // ciclo tutte le colonne in maniera da crearmi l'intestazione della tabella
                        <TableCell>{col.toUpperCase()}</TableCell>
                    ))}
                    <TableCell>-</TableCell>
                </TableRow>
            </TableHead>
        )
    }

    const TBody = () => {
        return (
            <TableBody>
                { products?.length ? products.map((prod: any, index: number) => (
                    <TableRow hover={true}>
                        {(index >= firstItem && index < lastItem ) ? <>
                            {DATA_KEY.map(col => ( // ciclo tutte le colonne da renderizzare il contenuto della tabella
                                <TableCell size={"small"}>{prod[col]}</TableCell>
                            ))}
                            <TableCell size={"small"}>
                                <DeleteIcon
                                    onClick={(e) => {
                                        deleteItem(prod)
                                    }}
                                    fontSize="small"
                                />
                            </TableCell>
                        </> : <></> }
                    </TableRow>
                )) : <NoData /> }
            </TableBody>
        )
    }

    return (
        <TableContainer>
            <Table aria-label="customized table">
                <THead />
                <TBody />
            </Table>
        </TableContainer>
    )
}