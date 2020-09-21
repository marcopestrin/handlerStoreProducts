import React, { useState } from 'react';
import { useSelector } from "react-redux"

import { ListProducts } from './components/ListProducts'
import { GridProducts } from './components/GridProducts'
import AddProduct from './components/AddProduct'
import ToggleButton from './components/ToggleButton'
import { selectorProduct } from "./redux/selectors"
import { MAIN_LABEL, ALTERNATIVE_LABEL} from './config'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';

function App() {
  const [tableVisible, setTableVisible] = useState(true)
  const [pagination, setPagination] = useState(0)
  const [offset, setOffset] = useState(10)
  const onChange = (event) => setTableVisible(event)
  const products = useSelector(selectorProduct);
  const lastPage = (products.length - 1) / offset // da arrotondare per difetto!!!
  const firstItem = pagination * offset
  const lastItem = pagination * offset + offset


  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Typography variant="h5" component="h5">REACT example application with REDUX created by Marco Pestrin</Typography>
        </Grid>

        <Grid item xs={12}>
          <ToggleButton 
            onChange={onChange}
            visible={tableVisible}
            mainLabel={MAIN_LABEL}
            alternativeLabel={ALTERNATIVE_LABEL}
          />
        </Grid>

        <Grid item xs={12}>
          {tableVisible ? <ListProducts
            firstItem={firstItem}
            lastItem={lastItem}
            /> : <GridProducts
            firstItem={firstItem}
            lastItem={lastItem}
            /> }
        </Grid>

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

        <Grid item xs={12}>
          <Typography variant="h5" component="h5">Add a new product</Typography>
          <AddProduct />
        </Grid>

      </Grid>
    </Container>
  )
}

export default App;
