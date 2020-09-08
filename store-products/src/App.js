import React from 'react';
import { ListProducts } from './components/ListProducts'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function App() {
  return <>
    <Container maxWidth="lg">
      <ListProducts />
      <Button variant="contained" color="secondary">
        ADD ITEM
      </Button>
    </Container>
  </>
}

export default App;
