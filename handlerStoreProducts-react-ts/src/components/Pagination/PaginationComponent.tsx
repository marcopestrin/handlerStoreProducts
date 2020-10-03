import React from "react";

import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default (props: any) => {
  const { setPagination, lastPage } = props;

  const useStyles = makeStyles((theme) =>
    createStyles({
      marginAuto: {
        margin: "auto",
      },
      displayFlex: {
        display: "flex",
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.displayFlex}>
        <Pagination
          className={classes.marginAuto}
          count={Math.floor(lastPage)}
          size="small"
          onChange={(event, page) => {
            setPagination(page);
          }}
        />
      </div>
    </Grid>
  );
};
