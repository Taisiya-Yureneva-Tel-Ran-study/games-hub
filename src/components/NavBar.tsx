import { Box, Image, Text } from '@chakra-ui/react'
import { ColorModeButton } from './ui/color-mode'

const NavBar = () => {
    return <Box>
        <Image src="/image.png" boxSize="40px" float="left"/>
        <Text fontSize="2xl" fontWeight="bold" ml={2} float="left">Nav</Text>
        <ColorModeButton float="right"/>
    </Box>
}

export default NavBar;