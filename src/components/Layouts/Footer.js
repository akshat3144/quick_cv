import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            bg="black"
            color="white">

            <Container
                as={Stack}
                maxW={'10xl'}
                py={5}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={'center'}
                align={'center'}>

                <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'} fontSize={'lg'}>
                    <Text>&copy; 2024 QuickCV - Made By</Text>
                    <Text as={'a'} href={'https://www.linkedin.com/in/akshat-gupta-840740285/'} target={'_blank'} color={'#2894ec'}>Akshat Gupta</Text>
                </Stack>


                {/* <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' as={'a'} href={'https://github.com/jigar-sable'} target='_blank' bg={'gray.300'}>
                        <FaGithub />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://www.linkedin.com/in/jigar-sable/'} target='_blank' colorScheme={'blue'}>
                        <FaLinkedin />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://www.instagram.com/jigarsable_/'} target='_blank' colorScheme={'pink'}>
                        <FaInstagram />
                    </IconButton>

                </Stack> */}
            </Container>
        </Box>
    )
}

export default Footer
