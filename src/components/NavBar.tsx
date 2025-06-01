import { Box, HStack, Image } from '@chakra-ui/react'
import { ColorModeButton } from './ui/color-mode'
import SearchBar from './SearchBar';
import { FC } from 'react';

interface Props {
    onGetSearchText: (text: string) => void;
}

const NavBar: FC<Props> = ({onGetSearchText}) => {
    return <Box>
        <HStack justifyContent={"space-between"} >
            <Image src="/image.png" boxSize="10" />
            <SearchBar onSubmitSearch={(text: string) => {
                onGetSearchText(text)}}/>
            <ColorModeButton float="right"/>
        </HStack>
    </Box>
}

export default NavBar;