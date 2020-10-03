import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ListProductsComponent } from "./components/ListProducts/ListProductsComponent";
import PaginationComponent from "./components/Pagination/PaginationComponent";
import OffsetComponent from "./components/Offset/OffsetComponent";
import { GridProductsComponent } from "./components/GridProducts/GridProductsComponent";
import AddProductComponent from "./components/AddProduct/AddProductComponent";
import ToggleButtonComponent from "./components/ToggleButton/ToggleButtonComponent";
import { selectorProduct } from "./redux/selectors";
import { MAIN_LABEL, ALTERNATIVE_LABEL } from "./config";
import { Actions } from "./redux/actions";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [tableVisible, setTableVisible] = useState(true);
  const [pagination, setPagination] = useState(0);
  const [offset, setOffset] = useState(10);

  const items = useSelector(selectorProduct);
  const { products, loading } = items;
  const dispatch = useDispatch();

  const lastPage = (products?.length - 1) / offset; // da arrotondare per difetto!!!
  const firstItem = pagination * offset;
  console.log("first item: ", firstItem);
  const lastItem = pagination * offset + offset;

  const onChange = (event: any) => setTableVisible(event);

  useEffect(() => {
    dispatch({
      type: Actions.FETCH_PRODUCTS_LIST_REQUEST,
    });
  }, [dispatch]);

  const TitlePage = () => {
    return (
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          REACT example application with REDUX created by Marco Pestrin
        </Typography>
      </Grid>
    );
  };

  const ButtonChangeView = () => {
    return (
      <Grid item xs={12}>
        <ToggleButtonComponent
          onChange={onChange}
          visible={tableVisible}
          mainLabel={MAIN_LABEL}
          alternativeLabel={ALTERNATIVE_LABEL}
        />
      </Grid>
    );
  };

  const contentDataToRender = (products: any) => {
    return (
      <Grid item xs={12}>
        {tableVisible ? (
          <ListProductsComponent
            firstItem={firstItem}
            lastItem={lastItem}
            products={products}
          />
        ) : (
          <GridProductsComponent
            firstItem={firstItem}
            lastItem={lastItem}
            products={products}
          />
        )}
      </Grid>
    );
  };

  const NewProduct = () => {
    return (
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          Add a new product
        </Typography>
        <AddProductComponent />
      </Grid>
    );
  };

  const ContentPage = () => {
    return (
      <>
        <ButtonChangeView />
        <OffsetComponent setOffset={setOffset} currentOffset={offset} />
        {contentDataToRender(products)}
        <PaginationComponent
          setPagination={setPagination}
          lastPage={lastPage}
        />
      </>
    );
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <TitlePage />
        {loading ? <CircularProgress /> : <ContentPage />}
        <NewProduct />
      </Grid>
    </Container>
  );
}

export default App;
