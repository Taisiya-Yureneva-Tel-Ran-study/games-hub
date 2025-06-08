import './App.css'
import { Box, Grid, GridItem, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import OrderSelector from './components/OrderSelector'
import GenreSelector from './components/GenreSelector'

function App() {
  return (
    <Grid templateAreas={{
      base: "'nav' 'main'",
      md: "'nav nav' 'aside main'"
    }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Stack hideBelow="md" >
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <Stack  marginTop={2} direction={{md: "row", base: "column"}}>
          <PlatformSelector />
          <OrderSelector />
          <Box hideFrom="md" width={"auto"} >
            <GenreSelector />
          </Box>
        </Stack>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
