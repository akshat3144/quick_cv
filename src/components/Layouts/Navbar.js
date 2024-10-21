import { IconButton } from '@chakra-ui/button';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'black'}
            as='header'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='#2894ec' style={{ fontFamily: "Pacifico" }}>QuickCV</Heading>
                <Spacer></Spacer>
            </Flex>

        </Stack>
    )
}

export default Navbar
