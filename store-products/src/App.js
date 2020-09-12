import React, { useState } from 'react';

import { ListProducts } from './components/ListProducts'
import { GridProducts } from './components/GridProducts'
import AddProduct from './components/AddProduct'
import ToggleButton from './components/ToggleButton'
import { MAIN_LABEL, ALTERNATIVE_LABEL} from './config'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function App() {
  const [tableVisible, setTableVisible] = useState(true)
  const onChange = (event) => setTableVisible(event)

  return <>
    <Container maxWidth="lg">
      <Box>
        <Typography>marco pestrin</Typography>
      </Box>
      <Box>
        <ToggleButton 
          onChange={onChange}
          visible={tableVisible}
          mainLabel={MAIN_LABEL}
          alternativeLabel={ALTERNATIVE_LABEL}
        />
      </Box>
      {tableVisible ? <ListProducts /> : <GridProducts /> }
      <AddProduct />
    </Container>
  </>
}

export default App;
