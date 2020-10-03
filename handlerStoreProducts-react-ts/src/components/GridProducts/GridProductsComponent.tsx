import React, { FC } from "react";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Actions } from "../../redux/actions";
import { DATA_KEY } from "../../config";

export const GridProductsComponent = (props: any) => {
  const dispatch = useDispatch();
  const { firstItem, lastItem, products } = props;

  const deleteItem = (payload: any) => {
    dispatch({
      type: Actions.REMOVE_ITEM,
      payload,
    });
  };
  const NoData = () => {
    return (
      <Grid item xs={4}>
        <Typography variant="body2" gutterBottom>
          {" "}
          DATA NOT AVAILABLE{" "}
        </Typography>
      </Grid>
    );
  };

  const deleteItemIcon = (product: any) => {
    return (
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={(e) => {
            deleteItem(product);
          }}
        >
          DELETE ITEM
        </Button>
      </CardActions>
    );
  };

  const cardContent = (product: any) => {
    return (
      <CardContent>
        {DATA_KEY.map((col, index) => (
          <Typography key={index} color="primary">
            <strong>{col.toUpperCase()}</strong>: {product[col]}
          </Typography>
        ))}
      </CardContent>
    );
  };

  return (
    <Grid container spacing={6}>
      {products?.length ? (
        products.map((prod: object, index: number) => {
          if (index >= firstItem && index < lastItem) {
            return (
              <Grid item xs={4} key={index}>
                <Card variant="outlined">
                  {cardContent(prod)}
                  {deleteItemIcon(prod)}
                </Card>
              </Grid>
            );
          }
        })
      ) : (
        <NoData />
      )}
    </Grid>
  );
};
