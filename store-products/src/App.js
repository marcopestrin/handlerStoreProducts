import React, { useState } from 'react';

import { ListProducts } from './components/ListProducts'
import { GridProducts } from './components/GridProducts'
import AddProduct from './components/AddProduct'
import ToggleButton from './components/ToggleButton'
import { MAIN_LABEL, ALTERNATIVE_LABEL} from './config'

import Container from '@material-ui/core/Container';

function App() {
  const [tableVisible, setTableVisible] = useState(true)
  const onChange = (event) => setTableVisible(event)

  return <>
    <Container maxWidth="lg">
      <ToggleButton 
        onChange={onChange}
        visible={tableVisible}
        mainLabel={MAIN_LABEL}
        alternativeLabel={ALTERNATIVE_LABEL}
      />
      {tableVisible ? <ListProducts /> : <GridProducts /> }

      <AddProduct />
    </Container>
  </>
}

export default App;
