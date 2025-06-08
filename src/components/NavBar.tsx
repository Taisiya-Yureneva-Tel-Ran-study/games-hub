import { Box, HStack, Image } from '@chakra-ui/react'
import { ColorModeButton } from './ui/color-mode'
import SearchBar from './SearchBar';
import { FC } from 'react';

const NavBar: FC = () => {
    return <Box>
        <HStack justifyContent={"space-between"} >
            <Image src="/image.png" boxSize="10" />
            <SearchBar />
            <ColorModeButton float="right"/>
        </HStack>
    </Box>
}

export default NavBar;