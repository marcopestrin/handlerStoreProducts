import React, { useState } from 'react';

import { ListProducts } from './components/ListProducts'
import { GridProducts } from './components/GridProducts'
import AddProduct from './components/AddProduct'
import ToggleButton from './components/ToggleButton'
import { MAIN_LABEL, ALTERNATIVE_LABEL} from './config'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  const [tableVisible, setTableVisible] = useState(true)
  const onChange = (event) => setTableVisible(event)

  return <>
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
          <Typography variant="h5" component="h5">These are all products</Typography>
          {tableVisible ? <ListProducts /> : <GridProducts /> }
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h5">Add a new product</Typography>

          <AddProduct />
        </Grid>

      </Grid>
    </Container>
  </>
}

export default App;
