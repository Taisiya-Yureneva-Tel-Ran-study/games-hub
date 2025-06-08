import { create } from 'zustand';
import { GameQuery } from '../model/GameQuery';
import { Platform } from '../model/Platform';

interface GameQueryStore extends GameQuery {
    setGenre: (genre: string | null) => void; // Function to set the genre
    setPlatform: (platform: Platform | null) => void; // Function to set the platform
    setSorting: (sortBy: string | null) => void; // Function to set the sorting criteria
    setSearchText: (searchText: string | null) => void; // Function to set the search text
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    genre: null,
    platform: null,
    sortBy: null,
    searchText: null,
    setGenre: (genre: string | null) => set((state) => {
        console.log("Setting genre to:", genre);
        return (state.genre === genre ? state : {...state,
        genre: genre})}),
    setPlatform: (platform: Platform | null) => set((state) => {
        console.log("Setting platform to:", platform);
        return (state.platform === platform ? state : {...state, platform: platform})}),
    setSorting: (sortBy: string | null) => set((state) => {
        console.log("Setting sortBy to:", sortBy);
        return (state.sortBy === sortBy ? state : {...state,
        sortBy: sortBy
    })}),
    setSearchText: (searchText: string | null) => set((state) => {
        console.log("Setting searchText to:", searchText);
        return (state.searchText === searchText ? state : {...state,
        searchText: searchText
    })})
}))

export default useGameQueryStore;