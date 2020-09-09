import React from 'react';

import { ListProducts } from './components/ListProducts'
import Container from '@material-ui/core/Container';
import AddProduct from './components/AddProduct'

function App() {
  return <>
    <Container maxWidth="lg">
      <ListProducts />

      <AddProduct />
    </Container>
  </>
}

export default App;
