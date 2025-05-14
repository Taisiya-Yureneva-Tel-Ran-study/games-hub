import { Box, HStack, Image } from '@chakra-ui/react'
import { ColorModeButton } from './ui/color-mode'

const NavBar = () => {
    return <Box>
        <HStack justifyContent={"space-between"} >
            <Image src="/image.png" boxSize="10" />
            <ColorModeButton float="right"/>
        </HStack>
    </Box>
}

export default NavBar;