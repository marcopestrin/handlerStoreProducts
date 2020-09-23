import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import { ListProducts } from './components/ListProducts'
import Pagination from './components/Pagination'
import Offset from './components/Offset'
import { GridProducts } from './components/GridProducts'
import AddProduct from './components/AddProduct'
import ToggleButton from './components/ToggleButton'
import { selectorProduct } from "./redux/selectors"
import { MAIN_LABEL, ALTERNATIVE_LABEL} from './config'
import { FETCH_PRODUCTS_LIST_REQUEST } from './redux/actions'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

function App() {
  const [tableVisible, setTableVisible] = useState(true)
  const [pagination, setPagination] = useState(0)
  const [offset, setOffset] = useState(10)

  const items = useSelector(selectorProduct);
  const { products, loading} = items
  const dispatch = useDispatch()
  
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

  const ContentPage = () => {
    return (
      <>
        <ButtonChangeView />
        <Offset
          setOffset={setOffset}
          currentOffset={offset}
        />
        { contentDataToRender(products) }
        <Pagination
          setPagination={setPagination}
          lastPage={lastPage}
        />
      </>
    )
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <TitlePage />
        { loading ? <CircularProgress /> : <ContentPage /> }
        <NewProduct />
      </Grid>
    </Container>
  )
}

export default App;
