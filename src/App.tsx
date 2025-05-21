import './App.css'
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <Grid templateAreas={{
      base: "'nav' 'main'",
      md:   "'nav nav' 'aside main'"
    }}>
      <GridItem area="nav">
        <NavBar />        
      </GridItem>
      <Stack hideBelow="md" >
        <GridItem area="aside">
          <GenreList onSelectGenre={(g) => setSelectedGenre(g)} selectedGenre={selectedGenre}/>
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
