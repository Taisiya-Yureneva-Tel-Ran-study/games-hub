import './App.css'
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {

  return (
    <Grid templateAreas={{
      base: "'nav' 'main'",
      md:   "'nav nav' 'aside main'"
    }}>
      <GridItem area="nav">
        <NavBar />        
      </GridItem>
      <Stack hideBelow="md" >
        <GridItem area="aside" bg="coral">ASIDE</GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
