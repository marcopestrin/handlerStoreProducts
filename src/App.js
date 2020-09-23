import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"

import { ListProducts } from './components/ListProducts'
import { GridProducts } from './components/GridProducts'
import AddProduct from './components/AddProduct'
import ToggleButton from './components/ToggleButton'
import { selectorProduct } from "./redux/selectors"
import { MAIN_LABEL, ALTERNATIVE_LABEL} from './config'
import { FETCH_PRODUCTS_LIST_REQUEST } from './redux/actions'

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';


function App() {
  const [tableVisible, setTableVisible] = useState(true)
  const [pagination, setPagination] = useState(0)
  const [offset, setOffset] = useState(10)

  const items = useSelector(selectorProduct);
  const { products, loading} = items
  const dispatch = useDispatch();
  
  const lastPage = (products?.length - 1) / offset // da arrotondare per difetto!!!
  const firstItem = pagination * offset
  const lastItem = pagination * offset + offset

  const onChange = (event) => setTableVisible(event)

  useEffect(() => {
    dispatch({ 
        type: FETCH_PRODUCTS_LIST_REQUEST
    });
  }, []);

  const TitlePage = () => {
    return (
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">REACT example application with REDUX created by Marco Pestrin</Typography>
      </Grid>
    )
  }

  const ButtonChangeView = () => {
    return (
      <Grid item xs={12}>
        <ToggleButton 
          onChange={onChange}
          visible={tableVisible}
          mainLabel={MAIN_LABEL}
          alternativeLabel={ALTERNATIVE_LABEL}
        />
      </Grid>
    )
  }

  const contentDataToRender = (products) => {
    return  (
      <Grid item xs={12}>
        {tableVisible ? <ListProducts
          firstItem={firstItem}
          lastItem={lastItem}
          products={products}
          /> : <GridProducts
          firstItem={firstItem}
          lastItem={lastItem}
          products={products}
          /> }
      </Grid>
    )        
  }

  const NewProduct = () => {
    return (
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">Add a new product</Typography>
        <AddProduct />
      </Grid>
    )
  }

  const CustomPagination = () => {
    return (
      <Grid item xs={12}>
        <Pagination
          count={Math.floor(lastPage)}
          size="small"
          hideNextButton={Math.floor(lastPage) === pagination}
          hidePrevButton={pagination === 0}
          onChange={ (event, page) => {
            setPagination(page)
          }}
          />
      </Grid>
      )
  }

  const ChangeOffset = (e) => {
    setOffset(e.target.value)
  }

  const CustomOffset = () => {
    const breakpoint = [
      { value: '10', label: '10' },
      { value: '15', label: '15' },
      { value: '20', label: '20' },
      { value: '25', label: '25' },
    ]
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
            value={offset}
            SelectProps={{
              native: true,
            }}
            onChange={ChangeOffset}
          >
            {breakpoint.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
      </>
    )
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        { <TitlePage /> }
        { <ButtonChangeView /> }
        {loading ? <CircularProgress /> : <CustomOffset /> }
        {loading ? <CircularProgress /> : contentDataToRender(products) }
        {loading ? <CircularProgress /> : <CustomPagination /> }
        { <NewProduct /> }
      </Grid>
    </Container>
  )
}

export default App;
