import './App.css'
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import GameQuery from './model/GameQuery'

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({genre: null, platform: null, sortBy: null, order: ''});

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
          <GenreList 
            onSelectGenre={(g) => {
              setGameQuery({...gameQuery, genre:g});
            }} 
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <PlatformSelector 
          onSelectPlatform={(p) => {
            setGameQuery({...gameQuery, platform: p});
          }} 
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid 
          selectedGenre={gameQuery.genre} 
          selectedPlatform={gameQuery.platform} 
        />
      </GridItem>
    </Grid>
  )
}

export default App
