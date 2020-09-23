import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { BREAKPOINT_OFFSET } from '../../config'
export default (props: any) => {
  const { setOffset, currentOffset } = props

  const ChangeOffset = (e: any) => {
    setOffset(e.target.value)
  }

  return (
    <>
        <Grid item xs={10}></Grid>
        <Grid item xs={2}>
            <TextField
                label="Items"
                variant="outlined"
                name="offset"
                size="small"
                select
                fullWidth
                value={currentOffset}
                SelectProps={{
                native: true,
                }}
                onChange={ChangeOffset}
            >
                {BREAKPOINT_OFFSET.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
        </Grid>
    </>
    )
}