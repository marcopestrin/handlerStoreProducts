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
                    {DATA_KEY.map((col, index) => (
                        <TableCell key={index}>{col.toUpperCase()}</TableCell>
                    ))}
                    <TableCell>-</TableCell>
                </TableRow>
            </TableHead>
        )
    }

    const tableContent = (product: any) => {
        return (
            <>
                {DATA_KEY.map((col: string, index: number) => (
                    <TableCell
                        key={index}
                        size={"small"}
                    >{product[col]}</TableCell>
                ))}
            </>
        )
    }

    const deleteItemIcon = (product: object) => {
        return (
            <TableCell size={"small"}>
                <DeleteIcon
                    onClick={(e) => {
                        deleteItem(product)
                    }}
                    fontSize="small"
                />
            </TableCell>
        )
    }

    const TBody = () => {
        return (
            <TableBody>
                { products?.length ? products.map((prod: object, index: number) => (
                    <TableRow hover={true} key={index} >
                        {(index >= firstItem && index < lastItem ) ? <>
                            { tableContent(prod) }
                            { deleteItemIcon(prod) }
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